import React from "react";

// Modules

import logo from "../../assets/images/logo.png";

// Styles

import "./styles.scss";

// ----------------

export const Logo = () => {
  return <img className="header__logo" src={logo} alt="logo" />;
};
