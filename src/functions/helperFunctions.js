export const buildMatrix = (rows, cols) => {
  let matrix = {
    matrix: [],
    rows,
    cols
  };
  let row;
  for (let i = 0; i < rows; i++) {
    row = new Array(cols).fill(0);
    matrix.matrix.push(row);
  }
  return matrix;
};

export const changeMatrixDimensions = (matrix, prevRows, prevCols) => {
  let newMatrix = buildMatrix(matrix.rows, matrix.cols);
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
