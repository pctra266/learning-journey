//case 1
// console.log('case1 ==================================')
// console.log("A");
// setTimeout(function () {
//   console.log("B");
// }, 0);
// setTimeout(function () {
//   console.log("C");
// }, 0);
// console.log("D");
// result : a d b c

//case 2:
// console.log('case2 ==================================')
// setTimeout(function () {
//   setTimeout(function () {
//     console.log("A");
//   }, 0);
// }, 0);

// setTimeout(function () {
//   console.log("B");
// }, 0);

// setTimeout(function () {
//   setTimeout(function () {
//     console.log("C");
//   }, 0);
// }, 10);

// setTimeout(function () {
//   console.log("D");
// }, 0);
// result :B D A C

//case 3:
// console.log("case3 ==================================");
// var x = "A";

// setTimeout(function () {
//   console.log(x);
//   x = "B";
// }, 3);

// setTimeout(function () {
//   console.log(x);
//   x = "C";
// }, 2);

// setTimeout(function () {
//   console.log(x);
//   x = "D";
// }, 1);

// setTimeout(function () {
//   console.log(x);
// }, 4);

//result: A D C B

//case 4:
console.log("case4 ==================================");
var t1 = setTimeout(function () {
  console.log("A");
  setTimeout(function () {
    console.log("B");
  }, 0);
}, 100);

var t2 = setTimeout(function () {
  console.log("C");
  setTimeout(function () {
    console.log("D");
  }, 0);
}, 200);

clearTimeout(t1);

setTimeout(function () {
  clearTimeout(t2);
}, 250);
//result: C D