import React from "react";
import PropTypes from "prop-types";
import "./solveSteps.css";
import InputMatrix from "../InputMatrix/InputMatrix";

const SolveSteps = ({ steps }) => {
  return (
    <div className="solve-steps">
      {steps.map((step, i) => (
        <div className="solve-steps_step" key={i}>
          <h1>{step.text}</h1>
          <span className="solve-steps_step-number">{i + 1}</span>
          <InputMatrix
            matrix={step.matrix}
            className={"solve-steps_step-matrix"}
            readOnly={true}
          />
        </div>
      ))}
    </div>
  );
};

SolveSteps.propTypes = {
  steps: PropTypes.array.isRequired,
};

export default SolveSteps;
