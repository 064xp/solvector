import React, { useState } from "react";
import PropTypes from "prop-types";
import "./gaussJordan.css";
import { fractionToString } from "../../functions/fractions";
import { buildMatrix } from "../../functions/helperFunctions";
import gaussJordan, {
  getSolutions,
} from "../../functions/operations/gaussJordan";

import InputMatrix from "../../components/InputMatrix/InputMatrix";
import ShowStepsButton from "../../components/ShowStepsButton/ShowStepsButton";

const GaussJordan = ({ defaultMatrix }) => {
  const [matrix, setMatrix] = useState(defaultMatrix);
  const [results, setResults] = useState(null);
  const [steps, setSteps] = useState(null);
  const [showSteps, setShowSteps] = useState(false);
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
    const result = gaussJordan(matrix);
    const solutions = getSolutions(result.result);
    setSteps(result.steps);
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
        <React.Fragment>
          <div className="GJ-result_wrapper">
            <div className="GJ-result_container">
              <h2>Result:</h2>
              {typeof results === "object" ? (
                <div className="GJ-result_values">
                  {results.map((value, index) => (
                    <span key={index}>
                      X<sub>{index + 1}</sub> = {fractionToString(value)}
                    </span>
                  ))}
                </div>
              ) : (
                <h3 className="GJ-text_result">{results}</h3>
              )}
            </div>
            <ShowStepsButton
              showSteps={showSteps}
              setShowSteps={setShowSteps}
            />
          </div>

          {showSteps ? (
            <div className="GJ-solve-steps">
              {steps.map((step, i) => (
                <div className="GJ-solve-steps_step" key={i}>
                  <h1>{step.text}</h1>
                  <span className="GJ-solve-steps_step-number">{i + 1}</span>
                  <InputMatrix
                    matrix={step.matrix}
                    className={"GJ-solve-steps_step-matrix"}
                    readOnly={true}
                  />
                </div>
              ))}
            </div>
          ) : null}
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

GaussJordan.propTypes = {
  defaultMatrix: PropTypes.object,
};

export default GaussJordan;
