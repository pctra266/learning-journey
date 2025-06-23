function someFunction(number){
    function otherFunction(input){
        return a;
    }
    a = 5;
    return otherFunction();
}

var firstResult = someFunction(9);
var resul = firstResult(2);

// someFunction return result of otherFunction, other function return a, a = 5 => someFunction return 5
// firstResult = 5
// then result error because firstResult not a function