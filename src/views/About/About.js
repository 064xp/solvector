import React from "react";
import GhLogo from "../../assets/gh.png";
import "./about.css";

const About = props => {
  return (
    <div className="about-container">
      <h2>About Solvector</h2>
      <p>
        Solvector is a linear algebra toolkit made with ease of use in mind.
      </p>
      <p>
        This is a colaborative effort by: <br />
        <a href="https://github.com/064xp">Paulo Zamora</a>,{" "}
        <a href="https://github.com/eojedagalavan">Eduardo Ojeda</a> and Gerardo
        Castruita. All algorithms were written by us and the UI was built using
        React.
      </p>
      <p>
        Special thanks to our linear algebra professor Javier Abraham Gomez
        Pelayo
      </p>
      <br />
      <h2>Contributing</h2>
      <p>
        Solvector is an open source project, contributions are welcome! You can
        check out the github repo below
      </p>
      <a
        href="https://github.com/064xp/solvector"
        target="_blank"
        rel="noopener noreferrer"
        className="about_contribute-link"
      >
        <img src={GhLogo} alt="Github" />
        <span>Contribute</span>
      </a>
    </div>
  );
};

export default About;
