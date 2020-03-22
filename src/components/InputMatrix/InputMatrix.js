import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import DimensionsInput from "./DimensionsInput";
import { changeMatrixDimensions } from "../../functions/helperFunctions";
import "./inputMatrix.css";

const InputMatrix = ({
  matrix,
  index,
  className,
  updateMatrix,
  setDimensions,
  setMatrix
}) => {
  const [prevDimension, setPrevDimension] = useState({
    rows: matrix.rows,
    cols: matrix.cols
  });

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

  return (
    <div className={`input-matrix ${className}`}>
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
                      onChange={e => updateMatrix(index, i, j, e.target.value)}
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
    </div>
  );
};

InputMatrix.propTypes = {
  updateMatrix: PropTypes.func.isRequired,
  setDimensions: PropTypes.func.isRequired,
  setMatrix: PropTypes.func.isRequired,
  matrix: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  className: PropTypes.string
};

export default InputMatrix;
