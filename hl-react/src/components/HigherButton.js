import PropTypes from "prop-types";
import activeArrow from './arrow_down.svg';
import inactiveArrow from './arrow_up.svg';
import React, { useReducer } from "react"; // Import useReducer here directly
import "../styles/HighButton_style.css";

// Define your actions as constants
const MOUSE_ENTER = "mouse_enter";
const MOUSE_LEAVE = "mouse_leave";

export const HigherButton = ({ initialStates, className }) => {
  // Define the initial state based on the props
  const initialState = {
    states: initialStates || "inactive",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // Correct the paths to your images
  // Assuming that 'image.svg' and 'arrow-1.svg' are in the public folder
  const arrowImage = state.states === "hover" ? activeArrow : inactiveArrow;

  return (
    <div
      className={`higher-button ${state.states} ${className}`}
      onMouseEnter={() => dispatch({ type: MOUSE_ENTER })}
      onMouseLeave={() => dispatch({ type: MOUSE_LEAVE })}
    >
      <div className="text-wrapper">Higher</div>
      <img className="arrow" alt="Arrow" src={arrowImage} />
    </div>
  );
};

function reducer(state, action) {
  switch (action.type) { // Use action.type here
    case MOUSE_ENTER:
      return { ...state, states: "hover" };
    case MOUSE_LEAVE:
      return { ...state, states: "inactive" };
    default:
      return state;
  }
}

HigherButton.propTypes = {
  initialStates: PropTypes.oneOf(["inactive", "hover"]),
  className: PropTypes.string,
};

HigherButton.defaultProps = {
  initialStates: "inactive", // Default props for states
  className: "", // Default props for className
};
