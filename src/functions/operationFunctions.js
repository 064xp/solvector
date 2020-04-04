import { buildMatrix } from "./helperFunctions";

const operations = {
  matrix: {
    //Matrix Addition
    "+": (m1, m2) => {
      let result = buildMatrix(m1.rows, m1.cols);
      if (m1.rows !== m2.rows || m1.cols !== m2.cols) {
        throw new Error("Added matrices are of different dimensions");
      }
      for (let i = 0; i < m1.rows; i++) {
        for (let j = 0; j < m1.cols; j++) {
          result.matrix[i][j] = m1.matrix[i][j] + m2.matrix[i][j];
        }
      }
      return result;
    }
  }
};

export default operations;
