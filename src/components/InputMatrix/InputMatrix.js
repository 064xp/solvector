import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import DimensionsInput from "./DimensionsInput";
import NumberInput from "./NumberInput";
import { changeMatrixDimensions } from "../../functions/helperFunctions";
import SvgPlusSolid from "../../assets/SvgPlusSolid.js";
import SvgMinusSolid from "../../assets/SvgMinusSolid.js";
import "./inputMatrix.css";

const InputMatrix = ({
  matrix, //Matrix with values to display
  index = null, //Index of the matrix in the array of matrices
  className, //CSS Class
  updateMatrix, //Function to update a value at a position in the matrix
  setDimensions, //Set the dimensions of the matrix
  setMatrix, //Set a matrix (overwrite)
  matrixAmmount, //Ammount of matrices in the matrix array (to know if current is the last)
  addMatrix, //Function to add a new matrix to the matrix array
  removeMatrix, //Function to remove matrix from matrix array at a certain index
  readOnly = false, //If the matrix is only to display results
  title, //Custom title of the matrix
  augmentedAt //If it is an augmented matrix, before which column the matrix is augmented
}) => {
  const [prevDimension, setPrevDimension] = useState({
    rows: matrix.rows,
    cols: matrix.cols
  });
  const [isFocused, setFocus] = useState(false);

  //When dimensions change, update matrix to corresponding new dimensions
  useEffect(() => {
    if (!readOnly) {
      let newMatrix = changeMatrixDimensions(
        matrix,
        prevDimension.rows,
        prevDimension.cols
      );
      if (index) {
        setMatrix(index, newMatrix);
      } else {
        //If it is an only matrix, like in gauss jordan
        setMatrix(newMatrix);
      }

      setPrevDimension({
        rows: matrix.rows,
        cols: matrix.cols
      });
    }
    //eslint-disable-next-line
  }, [matrix.rows, matrix.cols]);

  return (
    <div
      className={`input-matrix ${className}`}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
    >
      <h1 className="input-matrix_name">
        {title ? title : `Matrix ${matrix.id}`}
      </h1>
      {readOnly ? null : (
        <button
          className="matrix-view_remove-button"
          style={isFocused ? { opacity: 1 } : null}
          onClick={() => removeMatrix(index)}
        >
          <SvgMinusSolid />
        </button>
      )}
      <div className="input-matrix_table">
        <span className="input-matrix_brackets" />
        <table>
          <tbody>
            {matrix.matrix.map((row, i) => (
              <tr key={i}>
                {matrix.matrix[i].map((num, j) => {
                  let returnVal = (
                    <React.Fragment>
                      <th key={j}>
                        <NumberInput
                          value={matrix.matrix[i][j]}
                          updateMatrix={updateMatrix}
                          index={index}
                          row={i}
                          col={j}
                          readOnly={readOnly}
                        />
                        {augmentedAt - 1 === j ? (
                          <i className="input-matrix_augmented-line"></i>
                        ) : null}
                      </th>
                    </React.Fragment>
                  );
                  // if (augmentedAt === j && i === 0) {
                  //   returnVal +=
                  //     // <div className="input-matrix_augmented-line"></div>
                  //     "hello";
                  // }
                  return returnVal;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {readOnly ? null : (
        <DimensionsInput
          index={index}
          rows={matrix.rows}
          cols={matrix.cols}
          setDimensions={setDimensions}
        />
      )}
      {index === matrixAmmount - 1 && matrixAmmount < 26 ? (
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
  addMatrix: PropTypes.func,
  removeMatrix: PropTypes.func,
  setDimensions: PropTypes.func.isRequired,
  setMatrix: PropTypes.func.isRequired,
  matrix: PropTypes.object.isRequired,
  index: PropTypes.number,
  className: PropTypes.string,
  matrixAmmount: PropTypes.number.isRequired,
  readOnly: PropTypes.bool,
  title: PropTypes.string
};

export default InputMatrix;
