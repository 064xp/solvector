import React, { useEffect } from "react";
import { throttle } from "../../functions/helperFunctions";
import "./backToTop.css";
import arrowUp from "./arrowUp.svg";

const BackToTop = (props) => {
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        throttle(scrollHandler(), 600);
      },
      { passive: true }
    );
  }, []);

  const scrollHandler = () => {};
  return (
    <button
      className="backToTopButton"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <img src={arrowUp} alt="Go back to top" />
    </button>
  );
};

export default BackToTop;
