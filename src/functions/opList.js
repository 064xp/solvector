/*
  List with all the possible operations
  An array of objects, each object is an operation

  name: is the name of the op, this will be used when
  rendering and in the autocomplete input field.

  route: is the react router route where this operation can be done.
  symbol: Symbol to be displayed in the card
  matrices: array with sample matrices, which are objects containing
  rows, cols and the matrices
  opString: Query string to be used in sample
*/

const operations = [
  {
    name: "Gauss Jordan",
    route: "/gauss-jordan",
    symbol: "GJ"
  },
  {
    name: "Matrix Addition",
    route: "/matrix",
    symbol: "+",
    matrices: [
      {
        rows: 3,
        cols: 3,
        matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
      },
      {
        rows: 3,
        cols: 3,
        matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
      }
    ],
    opString: "A + B"
  },
  {
    name: "Matrix Subtraction",
    route: "/matrix",
    symbol: "-",
    matrices: [
      {
        rows: 3,
        cols: 3,
        matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
      },
      {
        rows: 3,
        cols: 3,
        matrix: [[10, 11, 12], [13, 14, 15], [16, 17, 18]]
      }
    ],
    opString: "A - B"
  },
  {
    name: "Matrix Multiplication",
    route: "/matrix",
    symbol: "x",
    matrices: [
      {
        rows: 3,
        cols: 3,
        matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
      },
      {
        rows: 3,
        cols: 3,
        matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
      }
    ],
    opString: "A + B"
  }
];

export default operations;
