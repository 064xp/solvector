import {
  Fraction,
  divideFractions,
  addFractions,
  multiplyFractions,
  fractionToString,
} from "../fractions";
import { cloneMatrix } from "../matrixHelperFunctions";

let result = {
  result: [],
  steps: [],
};

export const gaussJordan = (matrix) => {
  let pivot = 0;
  let validationFail = null;
  let resMatrix = cloneMatrix(matrix); //clone of the matrix to remove reference
  let modifier = new Fraction();
  let tempElement = new Fraction();
  result = {
    result: [],
    steps: [],
  };

  if ((validationFail = validateCols(matrix))) {
    result.result = validationFail;
    return result;
  }

  //Swap rows in case first element is 0
  if (resMatrix.matrix[0][0].numerator === 0) {
    for (let i = 1; i <= resMatrix.rows; i++) {
      if (resMatrix.matrix[i][0].numerator !== 0) {
        for (let j = 0; j < resMatrix.cols; j++) {
          tempElement = resMatrix.matrix[i][j];
          resMatrix.matrix[i][j] = resMatrix.matrix[0][j];
          resMatrix.matrix[0][j] = tempElement;
        }
        result.steps.push({
          text: `M[0][0] is 0, change row 0 with row ${i}`,
          matrix: cloneMatrix(resMatrix),
        });
        break;
      }
    }
  }
  //Make current pivot 1
  for (let i = 0; i < resMatrix.rows; i++) {
    modifier = resMatrix.matrix[i][i];
    for (let j = 0; j < resMatrix.cols; j++) {
      resMatrix.matrix[i][j] = divideFractions(
        resMatrix.matrix[i][j],
        modifier
      );
    }
    result.steps.push({
      text: `Make current pivot (${fractionToString(modifier)}) 1`,
      matrix: cloneMatrix(resMatrix),
    });

    //Make the rest of the column 0
    resMatrix = makeColZero(resMatrix, pivot);
    pivot++;

    if ((validationFail = validateMatrix(resMatrix))) {
      result.result = validationFail;
      return result;
    }
  } //End for rows
  result.result = resMatrix;

  return result;
}; //end of gaussJordan main function

//Additional helper functions

const validateMatrix = (matrix) => {
  let counter = 0;

  //validate last row
  for (let j = 0; j < matrix.cols; j++) {
    if (matrix.matrix[matrix.rows - 1][j].numerator === 0) {
      counter++;
    }
  }

  if (counter >= matrix.cols - 1) {
    if (counter === matrix.cols) {
      return "The system has infinite solutions.";
    } else if (
      matrix.matrix[matrix.rows - 1][matrix.cols - 2].numerator === 0
    ) {
      return "The system has no solutions.";
    }
  }
};

const validateCols = (matrix) => {
  let counter = 0;
  //check for empty cols
  for (let i = 0; i < matrix.cols; i++) {
    counter = 0;
    for (let j = 0; j < matrix.rows; j++) {
      if (matrix.matrix[j][i].numerator === 0) {
        counter++;
      }
    }
    if (counter === matrix.rows && i !== matrix.cols - 1) {
      return `Invalid matrix, column ${i + 1} has no values`;
    }
  }

  if (matrix.rows < matrix.cols - 1) {
    return "Invalid matrix, more variables than ecuations";
  }
  return null;
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
    result.steps.push({
      text: `Make M[${pivot}][${i}] = 0`,
      matrix: cloneMatrix(matrix),
    });
  }

  return matrix;
};

export const getSolutions = (reducedMatrix) => {
  if (typeof reducedMatrix === "string") {
    return reducedMatrix;
  }
  let solutions = [];
  for (let i = 0; i < reducedMatrix.rows; i++) {
    solutions.push(reducedMatrix.matrix[i][reducedMatrix.cols - 1]);
  }

  return solutions;
};

export default gaussJordan;
