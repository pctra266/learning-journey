function multiWithALargeNumber(num1, num2){
    var strNum1 = String(num1);
    var reuslt = [];
    var carry =0;
    for(let i = strNum1.length-1; i >=0; i--){
        var digit =  Number(strNum1[i]);
        var mul = digit * num2 + carry;
        reuslt.push(mul%10);
        carry = Math.floor(mul/10);
    }

    while(carry >0){
        reuslt.push(carry%10);
        carry = Math.floor(carry/10);
    }

    return reuslt.reverse().join("");
}
// console.log(multiWithALargeNumber('12345678910111213', 89));
// console.log(multiWithALargeNumber('12345678910111213', 89) == '1098765422999897957');