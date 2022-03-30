import React from "react";
import { Link } from "react-router-dom";

import "./Header.style.css";

const mainClass = "header";

const Header = () => {
  return (
    <div className={mainClass}>
      <div className={`${mainClass}-title`}>
        <Link to="/">Todo App</Link>
      </div>
      <div className={`${mainClass}-author`}>
        <Link to="/author">Author</Link>
      </div>
    </div>
  );
};

export default Header;
