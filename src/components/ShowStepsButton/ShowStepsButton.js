import React from "react";
import PropTypes from "prop-types";
import "./showStepsButton.css";
import Plus from "./plus.svg";
import Minus from "./minus.svg";

const ShowStepsButton = ({ showSteps, setShowSteps }) => {
  return (
    <button
      className="btn_show-steps"
      onClick={() => {
        setShowSteps(!showSteps);
      }}
    >
      {showSteps ? (
        <React.Fragment>
          Hide Steps <img src={Minus} alt="Hide Steps" />
        </React.Fragment>
      ) : (
        <React.Fragment>
          Show Steps <img src={Plus} alt="Show Steps" />
        </React.Fragment>
      )}
    </button>
  );
};

ShowStepsButton.propTypes = {
  showSteps: PropTypes.bool.isRequired,
  setShowSteps: PropTypes.func.isRequired,
};

export default ShowStepsButton;
