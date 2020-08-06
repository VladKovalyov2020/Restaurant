import React from "react";

// Modules

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { ReactIcon } from "../../ReactIcon";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Components

import { imageList } from "../../Constants/landingPage";
import { AboutSliderCard } from "../AboutSliderCard";

// Styles

import "./styles.scss";

// ------------------

const SampleNextArrow = (props) => {
  const { className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <ReactIcon size="xxxl">
        <BsChevronRight />
      </ReactIcon>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <ReactIcon size="xxxl">
        <BsChevronLeft />
      </ReactIcon>
    </div>
  );
};

// ---------------

export class AboutSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      arrows: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    return (
      <Slider className="about-slider" {...settings}>
        {imageList.map((item, index) => {
          return (
            <div key={item.id} className="about-slider__slide">
              <AboutSliderCard image={item.img} title={item.title} />
            </div>
          );
        })}
      </Slider>
    );
  }
}
