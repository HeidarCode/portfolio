import React from "react";
import "./../../styles/Header.css";
import CodeNegar from "../../assets/images/b142dfeb-bcf2-467e-821b-c0e3a2c54de9.avif"

const Header = () => {
  return (
    <header className="header">
      <nav className="nav" dir="rtl">
        <div className="brand">
          <img src={CodeNegar} alt="Codenegar" />
        </div>
        <ul className="nav-links">
          <li><a href="#about">درباره ما</a></li>
          <li><a href="#skills">مهارت‌ها</a></li>
          <li><a href="#projects">پروژه‌ها</a></li>
          <li><a href="#contact">ارتباط با ما</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;




