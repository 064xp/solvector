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
    route: "/matrix/addition",
    symbol: "+"
  },
  {
    name: "Matrix Subtraction",
    route: "/matrix/subtraction",
    symbol: "-"
  },
  {
    name: "Matrix Multiplication",
    route: "/matrix/multiplication",
    symbol: "x"
  }
];

export default operations;
