function multiWithALargeNumber(num1, num2) {
    const bigNum1 = BigInt(num1);
    const bigNum2 = BigInt(num2);
    return (bigNum1 * bigNum2).toString();
  }
  
  console.log(multiWithALargeNumber('12345678910111213', 89));
  console.log(multiWithALargeNumber('12345678910111213', 89) === '1098765422999897957');
  