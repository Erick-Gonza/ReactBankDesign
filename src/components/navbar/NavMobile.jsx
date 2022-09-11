import React, { useState } from "react";
//Icons
import logo from "../../assets/logo.png";
import menuIcon from "../../assets/menu.png";
import arrowIcon from "../../assets/arrow-right.png";
import homeIcon from "../../assets/home.png";
import servicesIcon from "../../assets/services.png";
import productsIcon from "../../assets/products.png";
import aboutIcon from "../../assets/about.png";
import contactIcon from "../../assets/contact.png";
import logIcon from "../../assets/login.png";
import NavMobileItem from "./NavMobileItem";

const NavMobile = () => {
  const [menuDisplay, setMenuDisplay] = useState("none");
  const showMenu = () => {
    setMenuDisplay("flex");
  };
  const [menuHide, setMenuHide] = useState("flex");
  const hideMenu = () => {
    setMenuDisplay("none");
  };

  return (
    <nav className="header__nav-mobile">
      <img src={logo} alt="logo" className="header__logo" />
      <img
        src={menuIcon}
        alt="logo"
        className="header__menu"
        id="menuMobile"
        onClick={showMenu}
      />
      <section
        className="header__nav__menu"
        id="menuMobileItems"
        style={{ display: menuDisplay }}
      >
        <a
          href="#"
          className="header__nav-link__mobile-back"
          id="menuMobileHide"
        >
          <img
            src={arrowIcon}
            alt=""
            className="header__nav__img"
            onClick={hideMenu}
          />
        </a>
        <NavMobileItem
          path={"/"}
          className={"header__nav-link__mobile"}
          hideMenu={hideMenu}
          icon={homeIcon}
          className2={"header__nav__img"}
          linkTo="Home"
        />
        <NavMobileItem
          path={"/services"}
          className={"header__nav-link__mobile"}
          hideMenu={hideMenu}
          icon={servicesIcon}
          className2={"header__nav__img"}
          linkTo="Services"
        />
        <NavMobileItem
          path={"/products"}
          className={"header__nav-link__mobile"}
          hideMenu={hideMenu}
          icon={productsIcon}
          className2={"header__nav__img"}
          linkTo="Products"
        />
        <NavMobileItem
          path={"/about"}
          className={"header__nav-link__mobile"}
          hideMenu={hideMenu}
          icon={aboutIcon}
          className2={"header__nav__img"}
          linkTo="About"
        />
        <NavMobileItem
          path={"/contact"}
          className={"header__nav-link__mobile"}
          hideMenu={hideMenu}
          icon={contactIcon}
          className2={"header__nav__img"}
          linkTo="Contact"
        />
        <NavMobileItem
          path={"/login"}
          className={"header__nav-link__mobile"}
          hideMenu={hideMenu}
          icon={logIcon}
          className2={"header__nav__img"}
          linkTo="Login"
        />
      </section>
    </nav>
  );
};

export default NavMobile;
