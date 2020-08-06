import React from "react";

// Styles

import "./styles.scss";

//-------------

export const Navbar = (props) => {
  const { list } = props;

  return (
    <nav className="navbar">
      {list.map((item, index) => {
        return (
          <div key = {index} className="navbar__item-wrapper">
            <a  href={`#${item.to}`} className="navbar__item">
              {item.name}
            </a>
          </div>
        );
      })}
    </nav>
  );
};
