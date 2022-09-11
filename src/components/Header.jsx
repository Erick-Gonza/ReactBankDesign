import React from "react";
import NavDesktop from "./navbar/NavDesktop.jsx";
import NavMobile from "./navbar/NavMobile.jsx";

const Header = () => {
  return (
    <header className="header">
      <NavDesktop />
      <NavMobile />
    </header>
  );
};

export default Header;
