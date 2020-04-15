import { buildMatrix } from "./helperFunctions";
import {
  addFractions,
  subtractFractions,
  multiplyFractions,
  divideFractions,
  Fraction
} from "./fractions";

const operations = {
  matrix: {
    //Matrix Addition
    "+": (m1, m2) => {
      let result = buildMatrix(m1.rows, m1.cols);

      if (m1.rows !== m2.rows || m1.cols !== m2.cols) {
        throw new Error("Matrices are of different dimensions");
      }

      for (let i = 0; i < m1.rows; i++) {
        for (let j = 0; j < m1.cols; j++) {
          result.matrix[i][j] = addFractions(m1.matrix[i][j], m2.matrix[i][j]);
        }
      }
      return result;
    }, //end matrix addition
    //Matrix Subtraction
    "-": (m1, m2) => {
      let result = buildMatrix(m1.rows, m1.cols);
      if (m1.rows !== m2.rows || m1.cols !== m2.cols) {
        throw new Error("Matrices are of different dimensions");
      }

      for (let i = 0; i < m1.rows; i++) {
        for (let j = 0; j < m1.cols; j++) {
          result.matrix[i][j] = subtractFractions(
            m1.matrix[i][j],
            m2.matrix[i][j]
          );
        }
      }
      return result;
    }, //end matrix subtraction
    //Matrix Multiplication
    "*": (m1, m2) => {
      let result = buildMatrix(m1.rows, m2.cols);
      let current;

      if (m1.cols !== m2.rows) {
        throw new Error("Matrices are of incompatible dimensions.");
      }

      for (let i = 0; i < m1.rows; i++) {
        for (let j = 0; j < m2.cols; j++) {
          current = new Fraction();
          for (let k = 0; k < m1.cols; k++) {
            current = addFractions(
              current,
              multiplyFractions(m1.matrix[i][k], m2.matrix[k][j])
            );
          }
          result.matrix[i][j] = current;
        }
      }
      return result;
    } //end matrix multiplication
  }, //end matrix operations
  gaussJordan: matrix => {
    let pivot = 0,
      validationFail = null;
    let modifier = new Fraction();
    let tempElement = new Fraction();

    //Swap rows in case first element is 0
    if (matrix.matrix[0][0].numerator === 0) {
      for (let i = 1; i <= matrix.rows; i++) {
        if (matrix.matrix[i][0].numerator !== 0) {
          for (let j = 0; j < matrix.cols; j++) {
            tempElement = matrix.matrix[i][j];
            matrix.matrix[i][j] = matrix.matrix[0][j];
            matrix.matrix[0][j] = tempElement;
          }
          break;
        }
      }
    }

    //Make current pivot 1
    for (let i = 0; i < matrix.rows; i++) {
      modifier = matrix.matrix[i][i];
      for (let j = 0; j < matrix.cols; j++) {
        matrix.matrix[i][j] = divideFractions(matrix.matrix[i][j], modifier);
      }

      //Make the rest of the column 0
      matrix = makeColZero(matrix, pivot);

      pivot++;

      if ((validationFail = validateMatrix(matrix))) {
        return validationFail;
      }
    } //End for rows
    return getSolutions(matrix);
  }
};

//Additional helper functions

const validateMatrix = matrix => {
  let counter = 0;
  for (let j = 0; j < matrix.cols; j++) {
    if (matrix.matrix[matrix.rows - 1][j].numerator === 0) {
      counter++;
    }
  } //End for

  if (counter >= matrix.cols - 1) {
    if (matrix.matrix[matrix.rows - 1][matrix.cols - 1].numerator === 0) {
      return "The system has infinite solutions.";
    } else {
      return "The system has no solutions.";
    }
  }
};

const makeColZero = (matrix, pivot) => {
  let modifier = new Fraction(),
    value = new Fraction(-1, 1);

  for (let i = 0; i < matrix.rows; i++) {
    if (i === pivot) {
      continue;
    }
    modifier = multiplyFractions(matrix.matrix[i][pivot], value);
    for (let j = 0; j < matrix.cols; j++) {
      matrix.matrix[i][j] = addFractions(
        matrix.matrix[i][j],
        multiplyFractions(matrix.matrix[pivot][j], modifier)
      );
    }
  }

  return matrix;
};

const getSolutions = reducedMatrix => {
  let solutions = [];
  for (let i = 0; i < reducedMatrix.rows; i++) {
    solutions.push(reducedMatrix.matrix[i][reducedMatrix.cols - 1]);
  }

  return solutions;
};

export default operations;
