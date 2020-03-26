import React from "react";
import PropTypes from "prop-types";

const DimensionsInput = props => {
  const { rows, cols, index, setDimensions } = props;

  const onChangeHandler = (row, col) => {
    if (row < 1 || col < 1) {
      return;
    }
    setDimensions(index, row, col);
  };
  return (
    <div className="input-matrix_dimension-input">
      <input
        type="number"
        value={rows}
        onChange={e => onChangeHandler(Number(e.target.value), cols)}
        onFocus={e => e.target.select()}
      />
      <span>X</span>
      <input
        type="number"
        value={cols}
        onFocus={e => e.target.select()}
        onChange={e => onChangeHandler(rows, Number(e.target.value))}
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
