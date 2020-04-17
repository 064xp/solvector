import React from "react";
import PropTypes from "prop-types";

const DimensionsInput = props => {
  const { rows, cols, index, setDimensions } = props;

  const onChangeHandler = (row, col) => {
    if (row < 0 || col < 0) {
      return;
    }
    if (index != null) {
      setDimensions(index, row, col);
    } else {
      setDimensions(row, col);
    }
  };
  return (
    <div className="input-matrix_dimension-input">
      <input
        type="number"
        value={String(rows)}
        onChange={e => onChangeHandler(Number(e.target.value), cols)}
        onFocus={e => e.target.select()}
        inputMode="numeric"
      />
      <span>X</span>
      <input
        type="number"
        value={String(cols)}
        onChange={e => onChangeHandler(rows, Number(e.target.value))}
        onFocus={e => e.target.select()}
        inputMode="numeric"
      />
    </div>
  );
};

DimensionsInput.propTypes = {
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  setDimensions: PropTypes.func.isRequired
};

export default DimensionsInput;
