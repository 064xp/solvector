import React, { useState } from "react";
import PropTypes from "prop-types";
import "./input-bar.css";
import arrow from "../../assets/arrow-right-solid.svg";

const InputBar = props => {
  const { list, getSubmitValue, placeholder } = props;
  const [input, setInput] = useState("");

  const onChangeHandler = e => {
    setInput(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setInput("");
    getSubmitValue(input);
  };

  return (
    <form className="input-bar" onSubmit={onSubmit}>
      <input
        list="data-list"
        type="text"
        placeholder={placeholder}
        value={input}
        onChange={onChangeHandler}
      />
      {list ? (
        <datalist id="data-list">
          {list.map((item, index) => (
            <option key={index} value={item.name} />
          ))}
        </datalist>
      ) : null}
      <button>
        <img src={arrow} alt=">Go!" />
      </button>
    </form>
  );
};

InputBar.propTypes = {
  list: PropTypes.array,
  getSubmitValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default InputBar;
