import React from "react";
import "./RunButton.scss";

const RunButton = ({ onClick }) => {
  return (
    <button className="run  flex items-center justify-center" onClick={onClick}>
      Preview
    </button>
  );
};

export default RunButton;
