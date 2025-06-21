function swap(a, b) {
    var tmp = a;
    a = b;
    b = tmp;
  }
  
  var x = 1;
  var y = 2;
  
  swap(x, y);
  console.log(x);
  
// the result is 1,2 because
// Inside the function, a = x = 1, b = y = 2
// Then the function swaps a and b, but these are local variables.
// This does not affect the original x and y outside the function.