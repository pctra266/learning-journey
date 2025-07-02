// DO NOT EDIT users
var users = [
  {
    id: 1,
    first_name: 'Eamon',
    last_name: 'Harhoff',
    email: 'eharhoff0@imageshack.us',
    gender: 'Male',
    age: 76,
    salary: 18888,
  },
  {
    id: 2,
    first_name: 'Laney',
    last_name: 'Whittam',
    email: 'lwhittam1@issuu.com',
    gender: 'Female',
    age: 42,
    salary: 15018,
  },
  {
    id: 3,
    first_name: 'Lynett',
    last_name: 'Twinberrow',
    email: 'ltwinberrow2@gov.uk',
    gender: 'Female',
    age: 99,
    salary: 13343,
  },
  {
    id: 4,
    first_name: 'Madella',
    last_name: 'Kliesl',
    email: 'mkliesl3@ft.com',
    gender: 'Female',
    age: 56,
    salary: 5248,
  },
  {
    id: 5,
    first_name: 'Simona',
    last_name: 'Knee',
    email: 'sknee4@sciencedaily.com',
    gender: 'Female',
    age: 18,
    salary: 14376,
  },
  {
    id: 6,
    first_name: 'Cord',
    last_name: 'McMurthy',
    email: 'cmcmurthy5@wordpress.org',
    gender: 'Male',
    age: 19,
    salary: 9514,
  },
  {
    id: 7,
    first_name: 'Obed',
    last_name: 'Beaven',
    email: 'obeaven6@msn.com',
    gender: 'Male',
    age: 20,
    salary: 18463,
  },
  {
    id: 8,
    first_name: 'Elayne',
    last_name: 'Smeuin',
    email: 'esmeuin7@wsj.com',
    gender: 'Female',
    age: 96,
    salary: 19907,
  },
  {
    id: 9,
    first_name: 'Robin',
    last_name: 'Picford',
    email: 'rpicford8@typepad.com',
    gender: 'Female',
    age: 55,
    salary: 14975,
  },
  {
    id: 10,
    first_name: 'Patsy',
    last_name: 'Ochterlonie',
    email: 'pochterlonie9@latimes.com',
    gender: 'Female',
    age: 93,
    salary: 9716,
  }
];

// YOUR CODE HERE
function problem01() {
  // Use forEach to get first_name and last_name of all users 
  // and put it an array then return that array
  let result = [];
  users.forEach(function(user){
    result.push(
      {name: `${user.first_name} ${user.last_name}`} 
    );
  })
  return result;
}
console.log(problem01());

function problem02() {
  // return an array of user which is male and age is under 40
  return users.filter(function(user){
   return user.gender == 'Male' && user.age <40;
  })
}
console.log(problem02());
function problem03() {
  // return an array of full name
  return users.map(function(user){
    return{
      name: `${user.first_name} ${user.last_name}`
    } 
  })
}
console.log(problem03());
function convertSnakeCaseToCamelCase(str){
  return str.replace(/_([a-z])/g, (_,char)=> char.toUpperCase());
}

function problem04() {
  // return new array of user where the key of each record in new array is camelCase 
  return users.map(function(user){
    let newUser = {};
    for(const key in user){
      const keyCamel = convertSnakeCaseToCamelCase(key);
      newUser[keyCamel] = user[key];
    }
    return newUser;
  })
}
console.log(problem04());

function problem05() {
  // return the average age in users 
  const sumAge = users.reduce(function (sum,ele){
    return sum + ele.age;
  },0)

  return sumAge/users.length;
}
console.log(problem05());

function problem0601() {
  // return an array of full name using Array.prototype.reduce
  return users.reduce((result, ele) => {
    result.push(`${ele.first_name} ${ele.last_name}`);
    return result;
  }, []);
}
console.log(problem0601());


function problem0602() {
  // return an array of user which is male and age under 40 using Array.prototype.reduce
  return users.reduce((arr,ele) => {
    if(ele.gender == 'Male' && ele.age <40){
      arr.push(ele)
    } 
    return arr;
  },[] );
} 
console.log(problem0602());

function problem0603() {
  // return new array where each record is in camelCase using Array.prototype.reduce
  return users.reduce((arr,ele) => {
    let newUser = {};
    for(const key in ele){
      const keyCamel = convertSnakeCaseToCamelCase(key);
      newUser[keyCamel] = ele[key];
    }
    arr.push(newUser);
    return arr;
  },[]);
}
console.log(problem0603());

function problem07() {
  // return the sorted array of user (sort by field first_name in ascending order)
  return users.sort((a, b) => a.first_name.localeCompare(b.first_name));
}
console.log(problem07());

function faMap(array, fn) {
  // implement faMap that works like Array.prototype.map
  let result = [];
  array.forEach(element => {result.push(fn(element))});
  return result;
}
console.log(faMap(users,(ele)=>{
  return {
    ...ele,
    newField:"hello"
  }
}));

function faFilter(array, predicate) {
  // implement faMap that works like Array.prototype.filter
  let result = [];
  for(const element of array) {
    if(predicate(element)) {
      result.push(element);
  }
}
  return result;
}
console.log(faFilter([-1,2,3,4],(ele)=>{
  return ele > 0;
}));

function faReduce(array, fn, defaultValue) {
  // implement faReduce that works like Array.prototype.reduce
  let accumulator = defaultValue;
  for (const element of array) {
    accumulator = fn(accumulator, element);
    }
  return accumulator;
}
console.log(faReduce([1,2,3,4],(acc,ele)=>acc+ele,0))

function problem1101(array, fn) {
  // map array using faReduce
  return faReduce(array,(arr,ele) =>{arr.push(fn(ele)); return arr},[]);
}
console.log(problem1101([1,2,3,4],x=>x*2))

function problem1102(array, fn) {
  // filter array using faReduce
  return faReduce(array,(arr,ele) =>{if(fn(ele)) arr.push(ele); return arr},[]);
}
console.log(problem1102([1,2,3,4],x=>x<=2))

function problem1201(array) {
  // implement sum array with faReduce
  return faReduce(array, (sum, ele) => sum + ele, 0);
}
console.log(problem1201([1,2,3,4]))


function problem1202(array) {
  // implement product array with faReduce
  return faReduce(array, (sum, ele) => sum * ele, 1);
}
console.log(problem1202([1,2,3,4]))

function problem1203(array) {
  // implement reverse array with faReduce
  return faReduce(array, (result, ele) => {
    result.unshift(ele);
    return result;
  }, []);
}
console.log(problem1203([1,2,3,4]))


function getProp(obj, path) {
    // use Array.prototype.reduce
   let arr = path.split('.');
   let result = faReduce(arr,(obj,ele)=> {
   return obj == null ? undefined : obj[ele];

  }, obj);
   return result;
}


var student = {
  name: 'Nguyen Van A',
  addresses: [
    {
      type: 'personal',
      location: 'Hanoi',
    },
    {
      type: 'work',
      location: 'Hoa Lac',
    },
  ],
  clazz: {
    frontend: {
      name: 'Angular',
    },
  },
};

getProp(student, 'name'); // Nguyen Van A same as student.name or student['name']
console.log(getProp(student, 'name'))

getProp(student, 'addresses.0.location'); // Hanoi same as student.addresses[0].location
console.log(getProp(student, 'addresses.0.location'))

getProp(student, 'clazz.frontend.name'); // Angular same as student.clazz.frontend.name
console.log(getProp(student, 'clazz.frontend.name'))

getProp(student, 'hobbbies.name'); // undefined no field hobbies in student
console.log(getProp(student, 'hobbbies.name'))

// DO NOT EDIT CODE BELOW
// if (window.Cypress) {
//   window.jsa401 = {
//     problem01,
//     problem02,
//     problem03,
//     problem04,
//     problem05,
//     problem0601,
//     problem0602,
//     problem0603,
//     problem07,
//     faMap,
//     faFilter,
//     faReduce,
//     problem1101,
//     problem1102,
//     problem1201,
//     problem1202,
//     problem1203,
//     getProp
//   };
// }
