import {
  buildMatrix,
  cloneMatrix,
  changeMatrixDimensions
} from "../helperFunctions";
import { gaussJordan } from "./gaussJordan";
import { isFunction, isOperator } from "../expressionTree";
import {
  addFractions,
  subtractFractions,
  multiplyFractions,
  divideFractions,
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
  }, //end matrix multiplication
  //Calculate matrix determinant
  det: matrix => {
    let determinant = matrix.matrix[0][0];
    let upperTriangular = makeUpperTriangular(matrix);

    for (let i = 1; i < matrix.rows; i++) {
      determinant = multiplyFractions(
        determinant,
        upperTriangular.matrix[i][i]
      );
    }

    return determinant;
  },
  //Calculate inverse matrix
  inv: matrix => {
    let augmentedMatrix = cloneMatrix(matrix);
    let inverse = buildMatrix(matrix.rows, matrix.cols);
    let determinant = operations.det(matrix);

    if (determinant.numerator === 0) {
      throw new Error("Matrix has no Inverse");
    }

    augmentedMatrix.cols = matrix.cols * 2;
    augmentedMatrix = changeMatrixDimensions(
      augmentedMatrix,
      matrix.rows,
      matrix.cols
    );

    for (let i = 0; i < matrix.rows; i++) {
      for (let j = matrix.rows; j < matrix.cols * 2; j++) {
        if (j - i === matrix.rows) {
          augmentedMatrix.matrix[i][j] = new Fraction(1);
        }
      }
    }
    augmentedMatrix = gaussJordan(augmentedMatrix);

    for (let i = 0; i < matrix.rows; i++) {
      for (let j = 0; j < matrix.cols; j++) {
        inverse.matrix[i][j] = augmentedMatrix.matrix[i][j + matrix.cols];
      }
    }
    return inverse;
  },
  //Calculate matrix trace
  tr: matrix => {
    let trace = new Fraction(0);

    for (let i = 0; i < matrix.rows; i++) {
      trace = addFractions(trace, matrix.matrix[i][i]);
    }
    return trace;
  },

  //Scalar-Matrix operations
  scalar: {
    //Scalar-matrix multiplication (or scalar-scalar multiplication)
    "*": (scalar, matrix) => {
      if (matrix.numerator) {
        //if its 2 scalars
        return multiplyFractions(scalar, matrix);
      }

      let resMatrix = buildMatrix(matrix.rows, matrix.cols);

      for (let i = 0; i < matrix.rows; i++) {
        for (let j = 0; j < matrix.cols; j++) {
          resMatrix.matrix[i][j] = multiplyFractions(
            matrix.matrix[i][j],
            scalar
          );
        }
      }

      return resMatrix;
    }, //end matrix scalar multiplication
    //Scalar division
    "/": (scalar, scalar2) => {
      if (scalar2.rows) {
        //if its a matrix
        throw new Error("Cannot divide matrices");
      }
      return divideFractions(scalar, scalar2);
    } //end scalar division
  }
};

/*
  To solve the tree we do a Post Order tree traversal, evaluating
  subtrees first, then applying the current node's operation
*/
const solveMatrixExpression = (root, matrices) => {
  if (root === null) {
    return null;
  } else if (root === undefined) {
    throw new Error("The expression is invalid.");
  } else if (isFunction(root.value) || isOperator(root.value)) {
    const left = solveMatrixExpression(root.left, matrices);
    const right = solveMatrixExpression(root.right, matrices);
    let result;

    //Do corresponding operation on the result of the sub trees
    //If one of the values is a scalar
    if (
      (left !== null && left.numerator) ||
      (right !== null && right.numerator)
    ) {
      let scalar, matrix;
      if (left.numerator) {
        scalar = left;
        matrix = right;
      } else {
        scalar = right;
        matrix = left;
      }
      result = operations.scalar[root.value].call(null, scalar, matrix);
    } else {
      result = operations[root.value].call(null, left, right);
    }
    return result;
  } else if (!isNaN(root.value)) {
    //if node is a number
    return new Fraction(root.value);
  } else {
    //If node is a matrix ID
    let correspondingMatrix = matrices[root.value.charCodeAt(0) - 65];
    if (correspondingMatrix === undefined) {
      throw new Error(`'${root.value[0]}' is not a valid matrix.`);
    }
    return correspondingMatrix;
  }
};

// Helper matrix functions

const makeZeroBelow = (matrix, pivot) => {
  let modifier = new Fraction();

  if (pivot !== matrix.rows - 1) {
    for (let i = pivot + 1; i < matrix.rows; i++) {
      modifier = multiplyFractions(
        new Fraction(-1),
        divideFractions(matrix.matrix[i][pivot], matrix.matrix[pivot][pivot])
      );
      for (let j = 0; j < matrix.cols; j++) {
        matrix.matrix[i][j] = addFractions(
          matrix.matrix[i][j],
          multiplyFractions(modifier, matrix.matrix[pivot][j])
        );
      }
    }
  }

  return matrix;
};

const makeUpperTriangular = matrix => {
  let temp = cloneMatrix(matrix);
  for (let i = 0; i < matrix.rows; i++) {
    temp = makeZeroBelow(temp, i);
  }
  return temp;
};

export default solveMatrixExpression;
