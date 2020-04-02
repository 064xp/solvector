const operations = {
  matrix: {
    //Matrix Addition
    "+": (m1, m2) => (m1, m2) => {
      let i, j;
      let result = {
        rows: m1.rows,
        cols: m1.cols,
        matrix: []
      };
      if (m1.row !== m2.rows || m1.cols !== m2.cols) {
        return 1;
      }
      for (i = 0; i < m1.rows; i++) {
        for (j = 0; j < m1.cols; j++) {
          result.matrix[i][j] = m1.matrix[i][j] + m2.matrix[i][j];
        }
      }
      return 0;
    }
  }
};

export default operations;
