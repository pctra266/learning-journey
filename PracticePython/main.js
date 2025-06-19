const products = [
  {
    id: 1,
    name: "product1",
    price: 1000,
    quantity: 1,
    completed: true,
  },
  {
    id: 2,
    name: "product2",
    price: 1000,
    quantity: 1,
    completed: true,
  },
  {
    id: 3,
    name: "product",
    price: 1000,
    quantity: 2,
    completed: false,
  },
  {
    id: 4,
    name: "product4",
    price: 1000,
    quantity: 1,
    completed: true,
  },
];
// tootal price product that ocmplei is tru

let total = 0;
for (let i in products) {
  if (products[i].completed) total += products[i].price * products[i].quantity;
}
console.log(total);

// total rice reach 3000 > stop
let total2 = 0;
for (let i in products) {
  if (total2 > 3000) break;
  total2 += products[i].price * products[i].quantity;
}
console.log(total2);

let cach2Total1 = 0;
for (let item of products) {
  if (item.completed) cach2Total1 += item.price * item.quantity;
}
console.log(cach2Total1);
// cach 2:
