/* Header del portfolio */

import "./header.css";
import React, { useState } from "react";

const Header = ({darkMode, toggleDarkMode}) => {
  
  return (
    <header  className={`header ${darkMode ? 'header-dark' : ''}`}>
      <ul className={`header-list ${darkMode ? 'header-list__dark' : ''}`}>
        <a href="#aboutMe">
          <li className="menu-list__item-link">About Me</li>
        </a>
        <a href="#projects">
          <li className="menu-list__item-link">Projects</li>
        </a>
        <a href="#skills">
          <li className="menu-list__item-link">Skills</li>
        </a>
        <a href="#contact">
          <li className="menu-list__item-link">Contact</li>
        </a>
        <label className="switch">
          <input type="checkbox" onClick={toggleDarkMode} />
          <span className="slider"></span>
        </label>
      </ul>
    </header>
  );
};

export default Header;
