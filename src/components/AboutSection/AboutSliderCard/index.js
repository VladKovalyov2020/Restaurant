import React from "react";

// Styles

import "./style.scss";

// ----------------

export const AboutSliderCard = (props) => {
  const { image, title } = props;

  return (
    <div className="about-image-card">
      <img
        className="about-image-card__img-wrapper"
        src={image}
        alt={`about-image-${title}`}
      />
    </div>
  );
};
