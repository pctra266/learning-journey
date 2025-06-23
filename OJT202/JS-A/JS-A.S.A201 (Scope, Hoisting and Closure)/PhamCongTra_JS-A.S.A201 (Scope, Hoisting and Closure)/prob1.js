function test(){
    console.log(a);
    console.log(foo());

    var a = 1;
    function foo(){
        return 2;
    }
}
test();
//  result is:
//  undefined 
// 2

// because a hoisting var a => log output is undefined
//  function hoisting all => output foo() function is 2