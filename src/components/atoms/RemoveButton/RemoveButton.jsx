import React from "react";
import "./RemoveButton.style.css";

import { REMOVE_TEXT } from "../../../utils/constants";

export const mainClass = "remove-button";

const RemoveButton = ({ onClickEvent = null, disabled = false }) => {
  return (
    <button
      className={mainClass}
      onClick={onClickEvent}
      disabled={disabled}
      data-testid={mainClass}
    >
      {REMOVE_TEXT}
    </button>
  );
};

export default RemoveButton;
