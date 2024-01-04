import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "../styles/Higher.css";

export const HigherButton = ({ states, className, onClick }) => {
  const [state, dispatch] = useReducer(reducer, {
    states: states || "inactive",
  });

  return (
    <div
      className={`higher-button ${state.states} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={onClick}  // Add the onClick event here
    >
      <div className="text-wrapper">Higher</div>
      <img className="arrow" alt="Arrow" src={state.states === "hover" ? "./Arrow_up.svg" : "./Arrow_up.svg"} />
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

HigherButton.propTypes = {
    states: PropTypes.oneOf(["inactive", "hover"]),
    onClick: PropTypes.func,  // Add this line
  };
