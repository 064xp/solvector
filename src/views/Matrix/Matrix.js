import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import InputMatrix from "../../components/InputMatrix/InputMatrix";
import { buildMatrix, fractionToString } from "../../functions/helperFunctions";
import opList from "../../functions/opList";
import InputBar from "../../components/InputBar/InputBar";
import { infixToPostfix, constructTree } from "../../functions/expressionTree";
import solveMatrixExpression from "../../functions/operations/matrixOperations";
import "./matrix.css";

const Matrix = ({ defaultState = null }) => {
  const [matrices, setMatrices] = useState(
    defaultState ? defaultState.matrices : [buildMatrix(3, 3)]
  );
  const [clickedOp, setClickedOp] = useState(null);
  const [result, setResult] = useState(null);
  const inputRef = useRef(null);

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

  const onInputSubmit = input => {
    if (input === "") {
      //Input is empty show error message
    } else {
      input = infixToPostfix(input);
      const expressionTree = constructTree(input);
      const result = solveMatrixExpression(expressionTree, matrices);
      console.log(result);
      setResult(result);
    }
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
      <div className="matrix-view_input-container">
        <div className="matrix-view_input-buttons">
          {opList.map(op =>
            op.route === "/matrix" ? (
              <button
                className={
                  op.displaySize
                    ? `matrix-view_input-buttons-${op.displaySize}`
                    : null
                }
                dangerouslySetInnerHTML={{ __html: op.displaySymbol }}
                onClick={() => {
                  setClickedOp(op.symbol);
                  /*We have to focus here on the onClick, because
                    iOS Safari only supports focus() as a result of
                    an event trigger (like click)
                   */
                  inputRef.current.focus();
                }}
              ></button>
            ) : null
          )}
        </div>
        <InputBar
          getSubmitValue={onInputSubmit}
          symbolToCat={clickedOp}
          setSymbolToCat={setClickedOp}
          initialValue={defaultState ? defaultState.opString : null}
          className={"matrix-view_input-bar"}
          ref={inputRef}
        />
      </div>
      {result ? (
        <div className="matrix-view_result">
          {result.denominator !== undefined || typeof result === "number" ? (
            <h2 className="matrix-view_scalar-result">
              <span>Result:</span> {fractionToString(result)}
            </h2>
          ) : (
            <InputMatrix
              matrix={result}
              readOnly={true}
              className={"matrix-view_result-matrix"}
              title={"Result"}
            />
          )}
        </div>
      ) : null}
    </div>
  );
};

Matrix.propTypes = {
  operations: PropTypes.array.isRequired,
  selectedOperation: PropTypes.number,
  selectOperation: PropTypes.func.isRequired
};

export default Matrix;
