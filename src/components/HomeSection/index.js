import React from "react";

//Components

import { ContentWidthLimiter } from "../../components/ContentWidthLimiter";
import { Button } from "../Button";
import picture from "../../assets/images/home_decoration.png";

//Styles

import "./styles.scss";

// ----------------

export const HomeSection = () => {
  return (
    <section id="home" className="home">
      <ContentWidthLimiter>
        <div>
          <h1>the right ingredients for the right food</h1>

          <div className="home__picture-wrapper">
            <img src={picture} alt="decoration" />
          </div>

          <Button className="home__btn">Book a table</Button>
        </div>
      </ContentWidthLimiter>
    </section>
  );
};
