/*
  List with all the possible operations
  An array of objects, each object is an operation

  name: is the name of the op, this will be used when
  rendering and in the autocomplete input field.

  route: is the react router route where this operation can be done.
*/

const operations = [
  {
    name: "Matrix Addition",
    route: "/matrix",
    symbol: "+"
  },
  {
    name: "Matrix Subtraction",
    route: "/matrix",
    symbol: "-"
  },
  {
    name: "Matrix Multiplication",
    route: "/matrix",
    symbol: "x"
  }
];

export default operations;
