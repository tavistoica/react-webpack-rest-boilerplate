import React from "react";

import "./TextField.style.css";

const TextField = ({ onChange, value }) => {
  return (
    <input
      className="search"
      placeholder="Write todo..."
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};

export default TextField;
