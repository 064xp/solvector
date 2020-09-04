import React from "react";
import PropTypes from "prop-types";
import { fractionToString } from "../../functions/fractions";
import ShowStepsButton from "../../components/ShowStepsButton/ShowStepsButton";
import SolveSteps from "../../components/SolveSteps/SolveSteps";

const GJResults = ({ results, showSteps, setShowSteps, steps }) => {
  return (
    <React.Fragment>
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

          {showSteps ? <SolveSteps steps={steps} /> : null}
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

GJResults.propTypes = {
  results: PropTypes.array,
  showSteps: PropTypes.bool.isRequired,
  setShowSteps: PropTypes.func.isRequired,
  steps: PropTypes.array,
};

export default GJResults;
