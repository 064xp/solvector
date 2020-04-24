import React from "react";
import PropTypes from "prop-types";
import "./titleCard.css";

const TitleCard = props => {
  const { title, symbol, className, index, onCardClick } = props;

  return (
    <div
      onClick={() => {
        onCardClick(index);
      }}
      className={`title-card ${className}`}
    >
      <h2>{title}</h2>
      <span dangerouslySetInnerHTML={{ __html: symbol }}></span>
    </div>
  );
};

TitleCard.propTypes = {
  title: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  className: PropTypes.string,
  index: PropTypes.number,
  onCardClick: PropTypes.func
};

export default TitleCard;
