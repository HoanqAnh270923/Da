import React from "react";
import "./RunButton.scss";

const RunButton = () => {
  const runFunction = () => {
    // Logic cho hành động "RUN"
    console.log("RUN button clicked");
  };

  return (
    <button
      className="run  flex items-center justify-center"
      onClick={runFunction}
    >
      RUN
    </button>
  );
};

export default RunButton;
