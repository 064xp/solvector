import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import InputMatrix from "../../components/InputMatrix/InputMatrix";
import { buildMatrix } from "../../functions/helperFunctions";
import "./matrix.css";

const Matrix = props => {
  const { operations, selectedOperation, selectOperation } = props;
  const [matrices, setMatrices] = useState([]);

  //When component mounts, push default matrices
  useEffect(() => {
    if (selectedOperation && matrices.length === 0) {
      operations[selectedOperation].matrices.forEach((matrix, index) => {
        pushMatrix(matrix);
      });
      selectOperation(null);
    } else {
      addMatrix(3, 3);
    }

    //When component unmounts, clear all matrices
    return function cleanup() {
      setMatrices([]);
    };
    //eslint-disable-next-line
  }, []);

  //When a matrix is added or deleted, assign letters
  useEffect(() => {
    const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    let matricesTemp = matrices.map((matrix, index) => ({
      ...matrix,
      id: alphabet[index]
    }));
    setMatrices([...matricesTemp]);
    //eslint-disable-next-line
  }, [matrices.length]);

  const pushMatrix = matrix => {
    if (matrices.length < 26) {
      //max number of matrices is 26
      let matricesTemp = matrices;
      matricesTemp.push(matrix);
      //We set the matrices to a copy so that React recongnizes a change
      //and  re-renders the component
      setMatrices([...matricesTemp]);
    }
  };

  const addMatrix = (rows, cols) => {
    const newMatrix = buildMatrix(rows, cols);
    pushMatrix(newMatrix);
  };

  const updateMatrix = (index, row, col, value) => {
    let matricesTemp = matrices;
    matricesTemp[index].matrix[row][col] = value;
    setMatrices([...matricesTemp]);
  };

  const setMatrix = (index, matrix) => {
    let matricesTemp = matrices;
    matricesTemp[index] = matrix;
    setMatrices([...matricesTemp]);
  };

  const setDimensions = (index, rows, cols) => {
    let matricesTemp = matrices;
    matrices[index].rows = rows;
    matrices[index].cols = cols;
    setMatrices([...matricesTemp]);
  };

  const removeMatrix = index => {
    if (matrices.length === 1) {
      return;
    }
    let matricesTemp = matrices.filter(
      (matrix, currentIndex) => currentIndex !== index
    );
    setMatrices([...matricesTemp]);
  };

  return (
    <div className="matrix-view">
      <div className="matrix_matrices-container">
        {matrices.map((matrix, i) => (
          <InputMatrix
            key={i}
            className="matrix_input-matrix"
            matrix={matrices[i]}
            updateMatrix={updateMatrix}
            setDimensions={setDimensions}
            setMatrix={setMatrix}
            index={i}
            matrixAmmount={matrices.length}
            addMatrix={addMatrix}
            removeMatrix={removeMatrix}
          />
        ))}
      </div>
    </div>
  );
};

Matrix.propTypes = {
  operations: PropTypes.array.isRequired,
  selectedOperation: PropTypes.number,
  selectOperation: PropTypes.func.isRequired
};

export default Matrix;
