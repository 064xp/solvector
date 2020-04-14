export const buildMatrix = (rows, cols) => {
  let matrix = {
    matrix: [],
    rows,
    cols,
    id: ""
  };
  const zeroFraction = {
    numerator: 0,
    denominator: 1
  };

  let row;
  for (let i = 0; i < rows; i++) {
    row = new Array(cols).fill({ ...zeroFraction });
    matrix.matrix.push(row);
  }
  return matrix;
};

export const changeMatrixDimensions = (matrix, prevRows, prevCols) => {
  let newMatrix = buildMatrix(matrix.rows, matrix.cols);
  newMatrix.id = matrix.id;
  //if the new size is larger
  if (matrix.rows > prevRows || matrix.cols > prevCols) {
    for (let i = 0; i < prevRows; i++) {
      for (let j = 0; j < prevCols; j++) {
        newMatrix.matrix[i][j] = matrix.matrix[i][j];
      }
    }
  } else {
    //if the new size smaller
    for (let i = 0; i < matrix.rows; i++) {
      for (let j = 0; j < matrix.cols; j++) {
        newMatrix.matrix[i][j] = matrix.matrix[i][j];
      }
    }
  }
  return newMatrix;
};

export const fractionToString = fraction => {
  let str = String(fraction.numerator);
  if (fraction.denominator !== 1) {
    str += "/" + fraction.denominator;
  }
  return str;
};

export const stringToFraction = str => {
  const split = str.split("/");
  let value = {
    numerator: 0,
    denominator: 1
  };

  value.numerator = str ? Number(split[0]) : 0;
  value.denominator = split.length < 2 ? 1 : Number(split[1]);

  //If nested fraction is input for ex. 2/3/5
  if (split.length > 2) {
    throw new Error("Nested fractions are not supported.");
  }

  if (value.denominator === 0) {
    throw new Error("Denominator cannot be 0.");
  }

  return value;
};
