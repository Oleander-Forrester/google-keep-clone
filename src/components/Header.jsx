import React from 'react';
import './Header.css';
import logo from '../assets/header_logo.png';

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <img
                className="header-image"
                src={logo}
                alt="keep logo"
                width="40"
                height="40"
                />
                <h1 className="header-title">Keep</h1>
            </div>
        </header>
    );
}

export default Header;