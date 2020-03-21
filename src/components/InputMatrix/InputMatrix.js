import React from "react";
import PropTypes from "prop-types";

import "./inputMatrix.css";

const InputMatrix = ({ matrix, index, className, updateMatrix }) => {
  return (
    <div className={`input-matrix ${className}`}>
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
  );
};

InputMatrix.propTypes = {
  updateMatrix: PropTypes.func.isRequired,
  matrix: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  className: PropTypes.string
};

export default InputMatrix;
