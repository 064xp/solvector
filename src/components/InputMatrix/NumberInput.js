import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { fractionToString, stringToFraction } from "../../functions/fractions";

const NumberInput = (props) => {
  const { value, updateMatrix, row, col, index, readOnly } = props;
  const [localValue, setLocalValue] = useState("");

  useEffect(() => {
    setLocalValue(fractionToString(value));
    //eslint-disable-next-line
  }, [value]);

  const validateAndUpdate = (e) => {
    if (!readOnly) {
      try {
        const value = stringToFraction(e.target.value);

        if (index !== null) {
          updateMatrix(index, row, col, value);
        } else {
          updateMatrix(row, col, value);
        }
      } catch (e) {
        //TODO. report error in matrix[index] at row, col
        console.log(e.message);
      }
    }
  };

  return (
    <input
      type="text"
      value={localValue}
      onChange={(e) => {
        setLocalValue(e.target.value);
      }}
      onBlur={validateAndUpdate.bind(this)}
      onFocus={(e) => e.target.select()}
      readOnly={readOnly}
    />
  );
};

NumberInput.propTypes = {
  updateMatrix: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  readOnly: PropTypes.bool,
  value: PropTypes.object.isRequired,
};

export default NumberInput;
