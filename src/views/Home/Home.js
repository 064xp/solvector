import React from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";

import InputBar from "../../components/InputBar/InputBar";
import TitleCard from "../../components/TitleCard/TitleCard";
import Logo from "../../assets/solvector_logo.svg";
import "./home.css";

const Home = props => {
  const { operations, selectOperation } = props;
  let history = useHistory();

  const getSubmitValue = value => {
    let operationIndex = operations.findIndex(
      (op, index) => op.name.toUpperCase() === value.toUpperCase()
    );
    selectOperation(operationIndex);
    history.push(operations[operationIndex].route);
  };

  const onCardClick = index => {
    /*
    Current operation is the index of the corresponding operation
    in the operations array in /src/functions/opList.js
    */
    selectOperation(index);
  };

  return (
    <div>
      <div className="home_input-bar-container">
        <img className="home_input-bar_logo" src={Logo} alt="Solvector" />
        <InputBar
          list={operations}
          placeholder="What do you want to solve?"
          getSubmitValue={getSubmitValue}
        />
      </div>
      <div className="home_solve-ops-container">
        <h1 className="home_solve-subtitle">Solve:</h1>
        <div className="home_card-container">
          {operations.map((operation, index) => (
            <Link key={index} to={operation.route}>
              <TitleCard
                title={operation.name}
                symbol={operation.displaySymbol}
                className={
                  "home_card " +
                  (operation.displaySize
                    ? `home_card-${operation.displaySize}`
                    : null)
                }
                index={index}
                onCardClick={onCardClick}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  operations: PropTypes.array.isRequired,
  selectOperation: PropTypes.func.isRequired
};

export default Home;
