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
    },
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
    },
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
    }
  } //end matrix operations
};

export default operations;
