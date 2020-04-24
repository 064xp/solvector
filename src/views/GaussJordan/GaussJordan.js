import React, { useState } from "react";
import PropTypes from "prop-types";
import "./gaussJordan.css";
import InputMatrix from "../../components/InputMatrix/InputMatrix";
import { buildMatrix, fractionToString } from "../../functions/helperFunctions";
import gaussJordan, {
  getSolutions
} from "../../functions/operations/gaussJordan";

const GaussJordan = ({ defaultMatrix }) => {
  const [matrix, setMatrix] = useState(defaultMatrix);
  const [results, setResults] = useState(null);
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
    const solutions = getSolutions(gaussJordan(matrix));
    setResults(solutions);
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
          title={"Matrix"}
        />
        <button className="GJ-btn_solve" onClick={solve}>
          Solve!
        </button>
      </div>
      {results ? (
        <div className="GJ-result">
          <h2>Result:</h2>
          {typeof results === "object" ? (
            <div className="GJ-result_values">
              {results.map((value, index) => (
                <span>
                  X<sub>{index + 1}</sub> = {fractionToString(value)}
                </span>
              ))}
            </div>
          ) : (
            <h3 className="GJ-text_result">{results}</h3>
          )}
        </div>
      ) : null}
    </React.Fragment>
  );
};

GaussJordan.propTypes = {
  defaultMatrix: PropTypes.object
};

export default GaussJordan;
