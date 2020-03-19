import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import InputBar from "../../components/InputBar/InputBar";
import TitleCard from "../../components/TitleCard/TitleCard";
import Operations from "../../functions/opList.js";
import Logo from "../../assets/solvector_logo.svg";
import { setCurrentOperation } from "../../features/operations/operationsSlice";
import "./home.css";

const Home = props => {
  const dispatch = useDispatch();

  const getSubmitValue = value => {
    console.log(`value ${value}`);
  };

  const onCardClick = index => {
    /*
    Current operation is the index of the corresponding operation
    in the operations array in /src/functions/opList.js
    */
    dispatch(setCurrentOperation(index));
  };

  return (
    <div>
      <div className="home_input-bar-container">
        <img className="home_input-bar_logo" src={Logo} alt="Solvector" />
        <InputBar
          list={Operations}
          placeholder="What do you want to solve?"
          getSubmitValue={getSubmitValue}
        />
      </div>
      <div className="home_solve-ops-container">
        <h1 className="home_solve-subtitle">Solve:</h1>
        <div className="home_card-container">
          {Operations.map((operation, index) => (
            <Link to={operation.route}>
              <TitleCard
                key={index}
                title={operation.name}
                symbol={operation.symbol}
                className="home_card"
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

export default Home;
