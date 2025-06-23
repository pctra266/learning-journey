var a =1;
function b(){
    a = 10;
    return;
    function a(){}
}
b();
console.log(a);

// inside function b, function a hoisting then a = 10 => function a inside function b have value is 5
// var a =1 is global scope and not be affected by function b => log result  = 1