import React from "react";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

const NavDesktop = () => {
  return (
    <nav className="header__nav-desktop">
      <img src={logo} alt="logo" className="header__navLogo" />
      <Link to="/" className="header__nav-link">
        Home
      </Link>
      <Link to="/services" className="header__nav-link">
        Services
      </Link>
      <Link to="/products" className="header__nav-link">
        Products
      </Link>
      <Link to="/about" className="header__nav-link">
        About
      </Link>
      <Link to="/contact" className="header__nav-link">
        Contact
      </Link>
      <Link to="/login" className="header__nav-link-btn">
        Log in
      </Link>
    </nav>
  );
};

export default NavDesktop;
