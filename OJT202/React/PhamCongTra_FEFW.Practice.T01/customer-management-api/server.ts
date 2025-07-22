import express, {Request, Response, NextFunction} from 'express';
import bodyParser from 'body-parser';
import {readFileSync} from 'fs';
import md5 from 'md5';

interface User {
    id: number,
    email: string,
    password: string,
    numberPerPage: number,
    token: string
}

interface Order {
    productName: string;
    itemCost: number;
}

interface State {
    _id: string;
    id: number;
    abbreviation: string;
    name: string;
}

interface Customer {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    address: string;
    city: string;
    state: State;
    orders: Order[];
    latitude: number;
    longitude: number;
}

const app = express();
const customers: Customer[] = JSON.parse(
    readFileSync('data/customers.json', 'utf-8')
);
const states: State[] = JSON.parse(readFileSync('data/states.json', 'utf-8'));
const users: User[] = JSON.parse(readFileSync('data/users.json', 'utf-8'));
const port = process.env.PORT || 8888;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Enable CORS
app.use(function (req: Request, res: Response, next: NextFunction) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, Authorization, X-Requested-With, X-XSRF-TOKEN, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    );
    next();
});

function checkToken(request: Request, response: Response, next: NextFunction) {
    const authorization = request.headers.authorization;

    const token = authorization?.split('Bearer ')[1];

    if (!token) {
        return response.status(401).json({
            message: 'token is required'
        });
    }

    const user = users.filter(user => user.token == token.trim());

    console.log(user);

    if (!user) {
        console.log(user);

        return response.status(401).json({
            message: 'token is invalid'
        });
    }

    next();
}

app.get('/api/customers/page/:skip/:top', (req: Request, res: Response) => {
    const topVal = parseInt(req.params.top, 10);
    const skipVal = parseInt(req.params.skip, 10);

    const skip = isNaN(skipVal) ? 0 : skipVal;
    let top = isNaN(topVal) ? 10 : skip + topVal;

    if (top > customers.length) {
        top = skip + (customers.length - skip);
    }

    console.log(`Skip: ${skip} Top: ${top}`);

    var pagedCustomers = customers.slice(skip, top);
    res.json({
        results: pagedCustomers,
        totalRecords: customers.length
    });
});

app.get('/api/customers', (req: Request, res: Response) => {
    res.json(customers);
});

app.get('/api/customers/:id', (req: Request, res: Response) => {
    let customerId = parseInt(req.params.id, 10);
    let selectedCustomer = null;
    for (let customer of customers) {
        if (customer.id === customerId) {
            // found customer to create one to send
            selectedCustomer = {};
            selectedCustomer = customer;
            break;
        }
    }
    res.json(selectedCustomer);
});

app.post('/api/customers', (req: Request, res: Response) => {
    let postedCustomer = req.body;
    let maxId = Math.max.apply(
        Math,
        customers.map((customer) => customer.id)
    );
    postedCustomer.id = ++maxId;
    postedCustomer.gender = postedCustomer.id % 2 === 0 ? 'female' : 'male';
    customers.push(postedCustomer);
    res.json(postedCustomer);
});

app.put('/api/customers/:id', checkToken, (req: Request, res: Response) => {
    let putCustomer: Customer = req.body;
    let id = parseInt(req.params.id, 10);
    let status = false;

    const customer = customers.find(user => user.id == id);

    if (!customer) {
        return res.status(400).json({
            message: 'Cannot find user with id:' + id
        });
    }

    customer.firstName = putCustomer.firstName;
    customer.lastName = putCustomer.lastName;
    customer.address = putCustomer.address;
    customer.city = putCustomer.city;

    res.json({...customer});
});

app.delete('/api/customers/:id', checkToken, function (req: Request, res: Response) {
    let customerId = parseInt(req.params.id, 10);
    const findIndex = customers.findIndex(user => user.id === customerId);

    if (findIndex === -1) {
        return res.status(400).json({
            message: 'Cannot find user with id:' + customerId
        });
    }

    const customer = {...customers[findIndex]};
    customers.splice(findIndex, 1);

    res.json({...customer});
});

app.get('/api/orders/:id', function (req: Request, res: Response) {
    let customerId = parseInt(req.params.id, 10);
    for (let cust of customers) {
        if (cust.id === customerId) {
            return res.json(cust);
        }
    }
    res.json([]);
});

app.get('/api/states', (req: Request, res: Response) => {
    res.json(states);
});

app.post('/api/users', checkToken, (req: Request, res: Response) => {

    var {currentEmail, newEmail, password, numberPerPage} = req.body;

    console.log(currentEmail, newEmail, password, numberPerPage);

    const user = users.find(user => user.email === currentEmail && user.password === password);

    if (!user) {
        return res.status(400).json({
            message: 'Email or password is invalid'
        });
    }

    user.email = newEmail;

    res.json({
        ...user
    });
});

app.post('/api/auth/login', (req: Request, res: Response) => {
    var {email, password} = req.body;

    console.log(email, password);

    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
        return res.status(400).json({message: 'Email or password is invalid'});
    }

    user.token = md5(new Date().getTime().toString());

    return res.json({...user});
});

app.post('/api/auth/logout', checkToken, (req: Request, res: Response) => {
    res.json(true);
});

app.listen(port);

console.log('Express listening on port ' + port);
