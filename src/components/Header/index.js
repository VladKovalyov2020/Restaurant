import React, { useState } from "react";

// Components

import { ContentWidthLimiter } from "../ContentWidthLimiter";
import { HamburgerButton } from "./HamburgerButton";
import { Sidebar } from "./Sidebar";
import { Navbar } from "../Navbar";
import { Logo } from "../Logo";

//Constans

import { navbarList, sidebarList } from "../Constants/landingPage";

//Styles

import "./styles.scss";

// ----------------

export const Header = () => {
  const [isSidebarShow, toggleSidebarShow] = useState(false);

  function toggleHandler() {
    toggleSidebarShow(!isSidebarShow);
  }

  return (
    <>
      <header className="header">
        <ContentWidthLimiter>
          <div className="header__wrapper">
            <div className="header__content">
              <Logo />

              <div className="header__nav-wrapper">
                <Navbar list={navbarList} />
                <HamburgerButton
                  handleClick={toggleHandler}
                  isOpen={isSidebarShow}
                />
              </div>
            </div>
          </div>
        </ContentWidthLimiter>
      </header>

      <Sidebar isOpen={isSidebarShow} list={sidebarList} />
    </>
  );
};
