function empty(o) {
  o = null;
}
var x = [];
empty(x);
console.log(x);

//  x remains unchanged because:

//  x is declared as an empty array: var x = [];
//  empty(x) is called, passing the reference to the empty array x into the function.
//  Inside the function empty, the parameter o receives a copy of the reference to x.
//  o = null changes the local copy of the reference, not the original x.
//  So, the original variable
