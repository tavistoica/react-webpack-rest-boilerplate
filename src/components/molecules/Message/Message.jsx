import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Message.style.css";

const Message = ({ message, type }) => {
  const [visible, setVisible] = useState(true);

  return visible ? (
    <div className={`message-container ${type}`}>
      <div>{message}</div>
    </div>
  ) : null;
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Message;
