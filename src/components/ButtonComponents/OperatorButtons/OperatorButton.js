import React from "react";

const OperatorButton = numbers => {
  return (
    <>
      {
        <button
          className="operator-button"
          onClick={() => numbers.handleInput(numbers.operator)}
        >
          {numbers.char}
        </button>
      }
    </>
  );
};

export default OperatorButton;