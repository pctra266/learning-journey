const userAPi = "https://jsonplaceholder.typicode.com/users";

// Promis

// fetch(userAPi).then(res =>{
//     return res.json();
// }).then(res=>{
//     console.log(res);
// })

// const getUser = async ()=>{
//     const res = await fetch(userAPi);
//     const data = await res.json();
//     console.log(data);
// }

// axios.get(userAPi).then(res=>{
//     console.log(res.data)

// })

const user = {
    name: "tra",
    ogj: {
        tra: "tra1",
        tra2:"tra2"
    }
}

const getUser = async () => {
    const res = await axios.get(userAPi);
    return res.data; 
  };
getUser().then(res=>{
    console.log(res)
});