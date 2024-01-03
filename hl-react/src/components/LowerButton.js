import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "../styles/LowButton_style.css";

export const LowerButton = ({ states, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    states: states || "inactive",
  });

  return (
    <div
      className={`lower-button ${state.states} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="text-wrapper">Lower</div>
      <img className="arrow" alt="Arrow" src={state.states === "hover" ? "image.svg" : "arrow-1.svg"} />
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        states: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        states: "inactive",
      };
  }

  return state;
}

LowerButton.propTypes = {
  states: PropTypes.oneOf(["inactive", "hover"]),
};
