import React from "react";
import "./RemoveButton.style.css";

const RemoveButton = ({ onClickEvent = null, disabled = false }) => {
  return (
    <button
      className="remove-button-style"
      onClick={onClickEvent}
      disabled={disabled}
    >
      Remove
    </button>
  );
};

export default RemoveButton;
