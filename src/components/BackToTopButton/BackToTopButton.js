import React, { useEffect, useState } from "react";
import "./backToTop.css";
import arrowUp from "./arrowUp.svg";

const BackToTop = (props) => {
  const [showButton, setShowButton] = useState(false);
  let lastHandlerCall = null;

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, {
      passive: true,
    });

    return function cleanUp() {
      window.removeEventListener("scroll", scrollHandler, {
        passive: true,
      });
    };
  }, []);

  const scrollHandler = () => {
    const throttleDuration = 350; //delay between calls
    if (
      Date.now() - lastHandlerCall >= throttleDuration ||
      lastHandlerCall === null
    ) {
      if (window.scrollY > window.innerHeight / 4) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
      lastHandlerCall = Date.now();
    }
  };

  return (
    <button
      className={`backToTopButton + ${
        showButton ? "backToTopButton-show" : null
      }`}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <img src={arrowUp} alt="Go back to top" />
    </button>
  );
};

export default BackToTop;
