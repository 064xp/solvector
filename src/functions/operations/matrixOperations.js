import { buildMatrix } from "../helperFunctions";
import { isFunction, isOperator } from "../expressionTree";
import {
  addFractions,
  subtractFractions,
  multiplyFractions,
  Fraction
} from "../fractions";

const operations = {
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
};

/*
  To solve the tree we do a Post Order tree traversal, evaluating
  subtrees first, then applying the current node's operation
*/
const solveMatrixExpression = (root, matrices) => {
  if (isFunction(root.value) || isOperator(root.value)) {
    const left = solveMatrixExpression(root.left, matrices);
    const right = solveMatrixExpression(root.right, matrices);
    //Do corresponding operation on the result of the sub trees
    const result = operations[root.value].call(null, left, right);
    return result;
  } else if (!isNaN(root.value)) {
    //if node is a number
    return root.value;
  } else {
    //If node is a matrix ID
    return matrices[root.value.charCodeAt(0) - 65];
  }
};

export default solveMatrixExpression;
