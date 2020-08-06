import React from "react";

// Components

import { ContentWidthLimiter } from "../ContentWidthLimiter";
import { AboutSlider } from "./AboutSlider";

// Styles

import "./styles.scss";

//-----------

const AboutSection = () => {
  return (
    <section id="about" className="about">
      <ContentWidthLimiter>
        <h2>Just the right food</h2>
        <AboutSlider />
      </ContentWidthLimiter>
    </section>
  );
};
export default AboutSection;
