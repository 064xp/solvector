import React, { useState, useEffect, forwardRef } from "react";
import PropTypes from "prop-types";
import "./input-bar.css";
import arrow from "../../assets/arrow-right-solid.svg";

const InputBar = forwardRef((props, ref) => {
  const {
    list,
    getSubmitValue,
    placeholder,
    className,
    symbolToCat,
    setSymbolToCat,
    initialValue
  } = props;
  const [input, setInput] = useState("");

  useEffect(() => {
    if (initialValue) {
      setInput(initialValue);
    }
    //eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (!symbolToCat) {
      return;
    }
    setInput(input + symbolToCat);
    setSymbolToCat(null);
    //eslint-disable-next-line
  }, [symbolToCat]);

  const onChangeHandler = e => {
    setInput(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    getSubmitValue(input);
  };

  return (
    <form className={`input-bar ${className}`} onSubmit={onSubmit}>
      <input
        list="data-list"
        type="text"
        placeholder={placeholder}
        value={input}
        onChange={onChangeHandler}
        onPaste={onChangeHandler}
        ref={ref}
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
});

InputBar.propTypes = {
  list: PropTypes.array,
  getSubmitValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  symbolToCat: PropTypes.string,
  setSymbolToCat: PropTypes.func,
  initialValue: PropTypes.string
};

export default InputBar;
