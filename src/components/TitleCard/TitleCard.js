import React from "react";
import PropTypes from "prop-types";
import "./titleCard.css";

const TitleCard = props => {
  const { title, symbol, className } = props;
  return (
    <div className={`title-card ${className}`}>
      <h2>{title}</h2>
      <span>{symbol}</span>
    </div>
  );
};

TitleCard.propTypes = {
  title: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

export default TitleCard;
