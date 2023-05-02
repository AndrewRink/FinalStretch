import React from "react";

const BmiButton = (props) => {
  return <button onClick={props.onClick}>{props.label}</button>;
};

export default BmiButton;