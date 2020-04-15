import React, { useState } from "react";
import PropTypes from "prop-types";
import "./gaussJordan.css";
import InputMatrix from "../../components/InputMatrix/InputMatrix";
import { buildMatrix } from "../../functions/helperFunctions";

const GaussJordan = props => {
  const [matrix, setMatrix] = useState(buildMatrix(3, 3));

  const setDimensions = (rows, cols) => {
    setMatrix({ ...matrix, rows, cols });
  };

  const updateMatrix = (row, col, value) => {
    let matrixTemp = { ...matrix };
    matrixTemp.matrix[row][col] = value;
    setMatrix(matrixTemp);
  };

  const clearMatrix = () => {
    setMatrix(buildMatrix(matrix.rows, matrix.cols));
  };

  return (
    <div>
      <InputMatrix
        matrix={matrix}
        setMatrix={setMatrix}
        setDimensions={setDimensions}
        updateMatrix={updateMatrix}
        removeMatrix={clearMatrix}
        className={"gauss-jordan_input-matrix"}
        augmentedAt={matrix.cols - 1}
      />
    </div>
  );
};

export default GaussJordan;
