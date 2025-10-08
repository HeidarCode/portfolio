import React, { useState } from 'react';
import '../../styles/Header.css';
import logo from '../../assets/images/b142dfeb-bcf2-467e-821b-c0e3a2c54de9.avif'; // لوگوی امضایی نئونی

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <header className="header">
            <nav className="nav">
                {/* لوگو سمت راست در حالت RTL */}
                <div className="brand">
                    <img src={logo} alt="CodeNegar Logo" />
                </div>

                {/* دکمه همبرگری */}
                <div
                    className={`hamburger ${isActive ? 'active' : ''}`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* لینک‌ها */}
                <ul className={`nav-links ${isActive ? 'active' : ''}`}>
                  
                    <li><a href="#about" onClick={toggleMenu}>درباره ما</a></li>
                    <li><a href="#skills" onClick={toggleMenu}>مهارت‌ها</a></li>
                    <li><a href="#projects" onClick={toggleMenu}>پروژه‌ها</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>تماس</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
