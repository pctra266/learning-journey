function foo(...args) {
    return [args[0], args[3], args[4], args[5]];
  }
  
  function bar() {
    var a1 = [2, 4];
    var a2 = [6, 8, 10, 12];
  
    return foo(...a1, ...a2);
  }

 // DO NOT MODIFY BELOW CODE
 console.log(bar().join('') === '281012');
 // true