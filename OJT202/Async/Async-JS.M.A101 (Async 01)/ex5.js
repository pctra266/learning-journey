//case 1:
// console.log('case 1: ')
// function logA() {
//     console.log('A');
//   }

//   function logB() {
//     console.log('B');
//   }

//   function logC() {
//     console.log('C');
//   }

//   function logD() {
//     console.log('D');
//   }

//   logD(logA(logB(logC())));

//result: c b a d

//case 2:
// function alogA() {
//   setTimeout(function () {
//     console.log("A");
//   }, 0);
// }

// function alogB() {
//   setTimeout(function () {
//     console.log("B");
//   }, 0);
// }

// function alogC() {
//   setTimeout(function () {
//     console.log("C");
//   }, 0);
// }

// function alogD() {
//   setTimeout(function () {
//     console.log("D");
//   }, 0);
// }

// alogD(alogA(alogB(alogC())));

//result: C B A D

//case 3:
// setTimeout(function () {
//   console.log("A");
//   setTimeout(function () {
//     console.log("B");
//     setTimeout(function () {
//       console.log("C");
//       setTimeout(function () {
//         console.log("D");
//       }, 0);
//     }, 100);
//   }, 200);
// }, 300);
// result: A  B C D

//case 4:
setTimeout(function () {
  console.log("A");
  setTimeout(function () {
    console.log("B");
  }, 100);
}, 200);

setTimeout(function () {
  console.log("C");
  setTimeout(function () {
    console.log("D");
  }, 200);
}, 100);

//result: C  A B D