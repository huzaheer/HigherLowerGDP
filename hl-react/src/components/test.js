import React from "react";
import { HigherButton } from "./HigherButton";
import { LowerButton } from "./LowerButton";
import "../styles/test.css";

const Frame = () => {
  return (
    <div className="frame">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="country-b">
            Country B<br />
            <br />
            $4,000,000,000
          </div>
          <div className="text-wrapper-2">Country A</div>
          <div className="overlap">
            <div className="text-wrapper-3">Higher Lower GDP</div>
            <img className="logo-arrow" alt="Logo arrow" src="logo-arrow-2.svg" />
            <img className="logo-arrow-2" alt="Logo arrow" src="logo-arrow-1.svg" />
          </div>
          <HigherButton
            arrow="arrow-1-4.svg"
            arrowClassName="design-component-instance-node"
            className="higher-button-instance"
            states="inactive"
          />
          <LowerButton arrow="arrow-1-5.svg" className="lower-button-instance" states="inactive" />
          <div className="text-wrapper-4">Score: 0</div>
        </div>
      </div>
    </div>
  )
}

export default Frame;