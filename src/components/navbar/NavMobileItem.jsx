import React from "react";
import { Link } from "react-router-dom";

const NavMobileItem = ({
  path,
  className,
  hideMenu,
  icon,
  className2,
  linkTo,
}) => {
  return (
    <Link to={path} className={`${className}`} onClick={hideMenu}>
      <img src={icon} className={`${className2}`} />
      {linkTo}
    </Link>
  );
};

export default NavMobileItem;
