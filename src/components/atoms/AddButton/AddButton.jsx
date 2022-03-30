import React from "react";
import "./AddButton.style.css";

export const mainClass = "add-button";

const AddButton = ({ text, onClickEvent = null, disabled = false }) => {
  return (
    <button
      className={mainClass}
      onClick={onClickEvent}
      disabled={disabled}
      data-testid={mainClass}
    >
      {text}
    </button>
  );
};

export default AddButton;
