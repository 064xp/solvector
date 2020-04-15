import React, { useState } from "react";
import PropTypes from "prop-types";
import "./gaussJordan.css";
import InputMatrix from "../../components/InputMatrix/InputMatrix";
import { buildMatrix, fractionToString } from "../../functions/helperFunctions";

import { Fraction } from "../../functions/fractions";

const GaussJordan = props => {
  const [matrix, setMatrix] = useState(buildMatrix(3, 3));
  const [results, setResults] = useState([
    new Fraction(1),
    new Fraction(2),
    new Fraction(3)
  ]);

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

  const solve = () => {
    //solve
  };

  return (
    <React.Fragment>
      <div className="GJ-input_container">
        <InputMatrix
          matrix={matrix}
          setMatrix={setMatrix}
          setDimensions={setDimensions}
          updateMatrix={updateMatrix}
          removeMatrix={clearMatrix}
          className={"GJ-input_matrix"}
          augmentedAt={matrix.cols - 1}
        />
        <button className="GJ-btn_solve" onClick={solve}>
          Solve!
        </button>
      </div>
      {1 ? (
        <div className="GJ-result">
          <h2>Result:</h2>
          <div className="GJ-result_values">
            {results.map((value, index) => (
              <span>
                X<sub>{index + 1}</sub> = {fractionToString(value)}
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default GaussJordan;
