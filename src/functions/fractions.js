export const Fraction = function (numerator = 0, denominator = 1) {
  this.numerator = numerator;
  this.denominator = denominator === 0 ? 1 : denominator;
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

const simplifyFraction = (fraction) => {
  let i = 2;

  while (i <= Math.abs(fraction.numerator)) {
    while (fraction.numerator % i === 0 && fraction.denominator % i === 0) {
      fraction.numerator = fraction.numerator / i;
      fraction.denominator = fraction.denominator / i;
    }
    i++;
  }
  if (fraction.denominator < 0) {
    fraction.numerator *= -1;
    fraction.denominator *= -1;
  }
  if (fraction.numerator === 0) {
    fraction.denominator = 1;
  }
  return fraction;
};

export const fractionToString = (fraction) => {
  if (typeof fraction === "number") {
    return String(fraction);
  }

  let str = String(fraction.numerator);
  if (fraction.denominator !== 1) {
    str += "/" + fraction.denominator;
  }
  return str;
};

export const stringToFraction = (str) => {
  const split = str.split("/");
  let value = new Fraction();

  value.numerator = str ? Number(split[0]) : 0;
  value.denominator = split.length < 2 ? 1 : Number(split[1]);

  //If nested fraction is input for ex. 2/3/5
  if (split.length > 2) {
    throw new Error("Nested fractions are not supported.");
  }

  if (value.denominator === 0) {
    throw new Error("Denominator cannot be 0.");
  }
  return value;
};
