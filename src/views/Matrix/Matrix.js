import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import InputMatrix from "../../components/InputMatrix/InputMatrix";
import {
  selectMatrices,
  push,
  empty,
  addMatrix
} from "../../features/matrices/matricesSlice";
import {
  selectCurrentOperation,
  setCurrentOperation
} from "../../features/operation/operationSlice";
import "./matrix.css";

const Matrix = props => {
  const { operations } = props;
  const dispatch = useDispatch();
  const matrices = useSelector(selectMatrices);
  const currentOperation = useSelector(selectCurrentOperation);

  useEffect(() => {
    if (currentOperation && matrices.length === 0) {
      operations[currentOperation].matrices.forEach((matrix, index) => {
        dispatch(push(matrix));
      });
      dispatch(setCurrentOperation(null));
    } else if (matrices.length === 0) {
      dispatch(addMatrix({ rows: 3, cols: 3 }));
    }

    //When component unmounts, clear all matrices
    return function cleanup() {
      dispatch(empty());
    };
    //eslint-disable-next-line
  }, [1]);

  return (
    <div>
      <div className="matrix_matrices-container">
        {matrices.map((matrix, i) => (
          <InputMatrix key={i} matrix={matrices[i]} index={i} />
        ))}
      </div>
    </div>
  );
};

Matrix.propTypes = {
  operations: PropTypes.array.isRequired
};

export default Matrix;
