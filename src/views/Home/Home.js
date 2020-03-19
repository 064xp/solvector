import React from "react";
import InputBar from "../../components/InputBar/InputBar";
import TitleCard from "../../components/TitleCard/TitleCard";
import Operations from "../../functions/opList.js";
import Logo from "../../assets/solvector_logo.svg";
import "./home.css";

const Home = props => {
  const getSubmitValue = value => {
    console.log(`value ${value}`);
  };
  return (
    <div>
      <div className="home_input-bar-container">
        <img className="home_input-bar_logo" src={Logo} alt="Solvector" />
        <InputBar
          list={Operations}
          placeholder="What do you want to solve?"
          getSubmitValue={getSubmitValue}
        ></InputBar>
      </div>
      <div className="home_solve-ops-container">
        <h1 className="home_solve-subtitle">Solve:</h1>
        <div className="home_card-container">
          {Operations.map((operation, index) => (
            <TitleCard
              key={index}
              title={operation.name}
              symbol={operation.symbol}
              className="home_card"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
