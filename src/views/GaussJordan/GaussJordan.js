import React, { useState } from "react";
import PropTypes from "prop-types";
import "./gaussJordan.css";
import { buildMatrix } from "../../functions/matrixHelperFunctions";
import gaussJordan, {
  getSolutions,
} from "../../functions/operations/gaussJordan";

import InputMatrix from "../../components/InputMatrix/InputMatrix";
import GJResults from "./GJResults";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";

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
        <BackToTopButton />
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

      <GJResults
        results={results}
        showSteps={showSteps}
        setShowSteps={setShowSteps}
        steps={steps}
      />
    </React.Fragment>
  );
};

GaussJordan.propTypes = {
  defaultMatrix: PropTypes.object,
};

export default GaussJordan;
