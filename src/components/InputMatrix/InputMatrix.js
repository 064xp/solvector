import React from "react";
import PropTypes from "prop-types";
import { updateMatrix } from "../../features/matrices/matricesSlice";
import { useDispatch } from "react-redux";

import "./inputMatrix.css";

const InputMatrix = ({ matrix, index }) => {
  const dispatch = useDispatch();

  let rows = [];
  for (let i = 0; i < matrix.rows; i++) {
    let row = [];
    for (let j = 0; j < matrix.cols; j++) {
      row[j] = matrix.matrix[i][j];
    }
    rows.push(row);
  }

  const onMatrixChangeHandler = (i, j, e) => {
    dispatch(
      updateMatrix({
        row: i,
        col: j,
        value: e.target.value,
        index
      })
    );
  };

  return (
    <table>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {rows[i].map((num, j) => (
              <th key={j}>
                <input
                  type="text"
                  value={matrix.matrix[i][j]}
                  onChange={onMatrixChangeHandler.bind(this, i, j)}
                  onFocus={e => e.target.select()}
                />
              </th>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

InputMatrix.propTypes = {
  initialValue: PropTypes.object,
  matrix: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export default InputMatrix;
