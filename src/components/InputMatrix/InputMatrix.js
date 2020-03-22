import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import DimensionsInput from "./DimensionsInput";
import { changeMatrixDimensions } from "../../functions/helperFunctions";
import SvgPlusSolid from "../../assets/SvgPlusSolid.js";
import SvgMinusSolid from "../../assets/SvgMinusSolid.js";
import "./inputMatrix.css";

const InputMatrix = ({
  matrix,
  index,
  className,
  updateMatrix,
  setDimensions,
  setMatrix,
  matrixAmmount,
  addMatrix,
  removeMatrix
}) => {
  const [prevDimension, setPrevDimension] = useState({
    rows: matrix.rows,
    cols: matrix.cols
  });
  const [isFocused, setFocus] = useState(false);

  //When dimensions change, update matrix to corresponding new dimensions
  useEffect(() => {
    let newMatrix = changeMatrixDimensions(
      matrix,
      prevDimension.rows,
      prevDimension.cols
    );
    setMatrix(index, newMatrix);
    setPrevDimension({
      rows: matrix.rows,
      cols: matrix.cols
    });
    //eslint-disable-next-line
  }, [matrix.rows, matrix.cols]);

  const onChangeHandler = (i, j, e) => {
    const value = e.target.value ? e.target.value : 0;
    updateMatrix(index, i, j, value);
  };

  return (
    <div
      className={`input-matrix ${className}`}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
    >
      <button
        className="matrix-view_remove-button"
        style={isFocused ? { opacity: 1 } : null}
        onClick={() => removeMatrix(index)}
      >
        <SvgMinusSolid />
      </button>
      <div className="input-matrix_table">
        <span className="input-matrix_brackets" />
        <table>
          <tbody>
            {matrix.matrix.map((row, i) => (
              <tr key={i}>
                {matrix.matrix[i].map((num, j) => (
                  <th key={j}>
                    <input
                      type="text"
                      value={matrix.matrix[i][j]}
                      onChange={onChangeHandler.bind(this, i, j)}
                      onFocus={e => e.target.select()}
                    />
                  </th>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <DimensionsInput
        index={index}
        rows={matrix.rows}
        cols={matrix.cols}
        setDimensions={setDimensions}
      />
      {index === matrixAmmount - 1 ? (
        <button
          className="matrix-view_add-btn"
          onClick={() => addMatrix(matrix.rows, matrix.cols)}
        >
          <SvgPlusSolid />
        </button>
      ) : null}
    </div>
  );
};

InputMatrix.propTypes = {
  updateMatrix: PropTypes.func.isRequired,
  addMatrix: PropTypes.func.isRequired,
  removeMatrix: PropTypes.func.isRequired,
  setDimensions: PropTypes.func.isRequired,
  setMatrix: PropTypes.func.isRequired,
  matrix: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  className: PropTypes.string,
  matrixAmmount: PropTypes.number.isRequired
};

export default InputMatrix;
