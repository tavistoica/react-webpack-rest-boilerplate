import React from "react";
import "./AddButton.style.css";

const AddButton = ({ text, onClickEvent = null, disabled = false }) => {
  return (
    <button
      className="add-button-style"
      onClick={onClickEvent}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default AddButton;
