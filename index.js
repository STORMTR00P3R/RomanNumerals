function decimalToRoman(n) {
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4, 
    I: 1
  }

  if (typeof n !== 'number' || n < 0 || n > 4000) {
    throw new Error('Invalid input. Enter a positive integer less than 4000.')
  }

  let result = '';
  for (let symbol in romanNumerals) {
    const value = romanNumerals[symbol]; // M, CM, D, CD...
    console.log("Current Value being examined: " + value);
    while (n >= value) {
      console.log("You got it!");
      console.log("Symbol found: " + symbol);
      result += symbol;
      n -= value;
    }
  }
  return result;
}

console.log(decimalToRoman(8));

