export const Fraction = function(numerator = 0, denominator = 1) {
  this.numerator = numerator;
  this.denominator = denominator ? denominator : 1;
};

export const addFractions = (a, b) => {
  let result = new Fraction();
  result.numerator = a.numerator * b.denominator + b.numerator * a.denominator;
  result.denominator = a.denominator * b.denominator;
  result = simplifyFraction(result);

  return result;
};

export const subtractFractions = (a, b) => {
  let result = new Fraction();
  result.numerator = a.numerator * b.denominator - b.numerator * a.denominator;
  result.denominator = a.denominator * b.denominator;
  result = simplifyFraction(result);
  return result;
};

export const multiplyFractions = (a, b) => {
  let result = new Fraction();
  result.numerator = a.numerator * b.numerator;
  result.denominator = a.denominator * b.denominator;
  result = simplifyFraction(result);
  return result;
};

export const divideFractions = (a, b) => {
  let result = new Fraction();
  result.numerator = a.numerator * b.denominator;
  result.denominator = a.denominator * b.numerator;
  result = simplifyFraction(result);
  return result;
};

const simplifyFraction = fraction => {
  let i = 2;

  while (i <= fraction.numerator) {
    while (fraction.numerator % i == 0 && fraction.denominator % i == 0) {
      fraction.numerator = fraction.numerator / i;
      fraction.denominator = fraction.denominator / i;
    }
    i++;
  }
  return fraction;
};
