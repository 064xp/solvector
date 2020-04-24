import { Fraction } from "./fractions.js";
/*
  List with all the possible operations
  An array of objects, each object is an operation

  name: is the name of the op, this will be used when
  rendering and in the autocomplete input field.

  route: is the react router route where this operation can be done.
  displaySymbol: Symbol to be displayed on buttons or cards
  displaySize: Size when displayed, if symbol(s) is larger or longer
  symbol: Symbol used when button is clicked, might be different
    for example: display: sin symbol: sin()
  matrices: array with sample matrices, which are objects containing
  rows, cols and the matrices
  opString: Query string to be used in sample
*/

const operations = [
  {
    name: "Gauss Jordan",
    route: "/gauss-jordan",
    displaySymbol: "GJ",
    matrix: {
      rows: 3,
      cols: 4,
      matrix: [
        [new Fraction(1), new Fraction(-1), new Fraction(1), new Fraction(-1)],
        [new Fraction(2), new Fraction(1), new Fraction(-1), new Fraction(4)],
        [new Fraction(1), new Fraction(1), new Fraction(-2), new Fraction(4)]
      ]
    }
  },
  {
    name: "Matrix Addition",
    route: "/matrix",
    symbol: "+",
    displaySymbol: "+",
    matrices: [
      {
        rows: 3,
        cols: 3,
        matrix: [
          [new Fraction(1), new Fraction(2), new Fraction(3)],
          [new Fraction(4), new Fraction(5), new Fraction(6)],
          [new Fraction(7), new Fraction(8), new Fraction(9)]
        ]
      },
      {
        rows: 3,
        cols: 3,
        matrix: [
          [new Fraction(1), new Fraction(2), new Fraction(3)],
          [new Fraction(4), new Fraction(5), new Fraction(6)],
          [new Fraction(7), new Fraction(8), new Fraction(9)]
        ]
      }
    ],
    opString: "A + B"
  },
  {
    name: "Matrix Subtraction",
    route: "/matrix",
    symbol: "-",
    displaySymbol: "−",
    matrices: [
      {
        rows: 3,
        cols: 3,
        matrix: [
          [new Fraction(1), new Fraction(2), new Fraction(3)],
          [new Fraction(4), new Fraction(5), new Fraction(6)],
          [new Fraction(7), new Fraction(8), new Fraction(9)]
        ]
      },
      {
        rows: 3,
        cols: 3,
        matrix: [
          [new Fraction(10), new Fraction(11), new Fraction(12)],
          [new Fraction(13), new Fraction(14), new Fraction(15)],
          [new Fraction(16), new Fraction(17), new Fraction(18)]
        ]
      }
    ],
    opString: "A - B"
  },
  {
    name: "Matrix Multiplication",
    route: "/matrix",
    symbol: "*",
    displaySymbol: "×",
    matrices: [
      {
        rows: 3,
        cols: 3,
        matrix: [
          [new Fraction(1), new Fraction(2), new Fraction(3)],
          [new Fraction(4), new Fraction(5), new Fraction(6)],
          [new Fraction(7), new Fraction(8), new Fraction(9)]
        ]
      },
      {
        rows: 3,
        cols: 3,
        matrix: [
          [new Fraction(1), new Fraction(2), new Fraction(3)],
          [new Fraction(4), new Fraction(5), new Fraction(6)],
          [new Fraction(7), new Fraction(8), new Fraction(9)]
        ]
      }
    ],
    opString: "A * B"
  },
  {
    name: "Matrix Determinant",
    route: "/matrix",
    symbol: "det()",
    displaySymbol: "∣A∣",
    displaySize: "sm",
    matrices: [
      {
        rows: 3,
        cols: 3,
        matrix: [
          [new Fraction(1), new Fraction(2), new Fraction(3)],
          [new Fraction(4), new Fraction(5), new Fraction(6)],
          [new Fraction(7), new Fraction(8), new Fraction(9)]
        ]
      }
    ],
    opString: "det(a)"
  },
  {
    name: "Matrix Inverse",
    route: "/matrix",
    symbol: "inv()",
    displaySymbol: "A<sup>-1</sup>",
    displaySize: "sm",
    matrices: [
      {
        rows: 3,
        cols: 3,
        matrix: [
          [new Fraction(2), new Fraction(2), new Fraction(3)],
          [new Fraction(4), new Fraction(5), new Fraction(6)],
          [new Fraction(7), new Fraction(8), new Fraction(9)]
        ]
      }
    ],
    opString: "inv(a)"
  },
  {
    name: "Matrix Trace",
    route: "/matrix",
    symbol: "tr()",
    displaySymbol: "tr()",
    displaySize: "sm",
    matrices: [
      {
        rows: 3,
        cols: 3,
        matrix: [
          [new Fraction(1), new Fraction(2), new Fraction(3)],
          [new Fraction(4), new Fraction(5), new Fraction(6)],
          [new Fraction(7), new Fraction(8), new Fraction(9)]
        ]
      }
    ],
    opString: "tr(a)"
  }
];

export default operations;
