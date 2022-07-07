import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Message.style.css";

export const mainClass = "message-container";

const Message = ({ message, type }) => {
  const [visible, setVisible] = useState(true);

  return (
    visible && (
      <div className={`${mainClass} ${type}`}>
        <div className={`${mainClass}__message`}>{message}</div>
        <button
          className={`${mainClass}__close`}
          onClick={() => setVisible(false)}
        >
          X
        </button>
      </div>
    )
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Message;
