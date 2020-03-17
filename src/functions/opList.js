/*
  List with all the possible operations
  An array of objects, each object is an operation

  name: is the name of the op, this will be used when
  rendering and in the autocomplete input field.

  route: is the react router route where this operation can be done.
*/

const operations = [
  {
    name: "Matrix Addition/Sum",
    route: "/matrix/addition"
  },
  {
    name: "Matrix Subtraction",
    route: "/matrix/subtraction"
  },
  {
    name: "Matrix Multiplication",
    route: "/matrix/multiplication"
  }
];

export default operations;
