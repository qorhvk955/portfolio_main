import React from 'react';
import './Header.scss';
import Logo from '../../assets/images/logo_black.svg';



const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="Logo" />
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item"><a href="/">Home</a></li>
          <li className="header__nav-item"><a href="/about">About</a></li>
          <li className="header__nav-item"><a href="/services">Services</a></li>
          <li className="header__nav-item"><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;