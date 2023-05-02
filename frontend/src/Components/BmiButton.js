import React from "react";

const BmiButton = (props) => {
  return <button className="bmibutton" onClick={props.onClick}>{props.label}</button>;
};

export default BmiButton;