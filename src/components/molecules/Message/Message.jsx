import React, { useState } from "react";

import "./Message.style.css";

const Message = ({ message, type }) => {
  const [visible, setVisible] = useState(true);

  return visible ? (
    <div className={`message-container ${type}`}>
      <div>{message}</div>
    </div>
  ) : null;
};

export default Message;
