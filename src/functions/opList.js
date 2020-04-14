import { stringToFraction } from "./helperFunctions";
/*
  List with all the possible operations
  An array of objects, each object is an operation

  name: is the name of the op, this will be used when
  rendering and in the autocomplete input field.

  route: is the react router route where this operation can be done.
  displaySymbol: Symbol to be displayed on buttons or cards
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
    displaySymbol: "GJ"
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
          [stringToFraction("1"), stringToFraction("2"), stringToFraction("3")],
          [stringToFraction("4"), stringToFraction("5"), stringToFraction("6")],
          [stringToFraction("7"), stringToFraction("8"), stringToFraction("9")]
        ]
      },
      {
        rows: 3,
        cols: 3,
        matrix: [
          [stringToFraction("1"), stringToFraction("2"), stringToFraction("3")],
          [stringToFraction("4"), stringToFraction("5"), stringToFraction("6")],
          [stringToFraction("7"), stringToFraction("8"), stringToFraction("9")]
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
          [stringToFraction("1"), stringToFraction("2"), stringToFraction("3")],
          [stringToFraction("4"), stringToFraction("5"), stringToFraction("6")],
          [stringToFraction("7"), stringToFraction("8"), stringToFraction("9")]
        ]
      },
      {
        rows: 3,
        cols: 3,
        matrix: [
          [
            stringToFraction("10"),
            stringToFraction("11"),
            stringToFraction("12")
          ],
          [
            stringToFraction("13"),
            stringToFraction("14"),
            stringToFraction("15")
          ],
          [
            stringToFraction("16"),
            stringToFraction("17"),
            stringToFraction("18")
          ]
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
          [stringToFraction("1"), stringToFraction("2"), stringToFraction("3")],
          [stringToFraction("4"), stringToFraction("5"), stringToFraction("6")],
          [stringToFraction("7"), stringToFraction("8"), stringToFraction("9")]
        ]
      },
      {
        rows: 3,
        cols: 3,
        matrix: [
          [stringToFraction("1"), stringToFraction("2"), stringToFraction("3")],
          [stringToFraction("4"), stringToFraction("5"), stringToFraction("6")],
          [stringToFraction("7"), stringToFraction("8"), stringToFraction("9")]
        ]
      }
    ],
    opString: "A * B"
  }
];

export default operations;
