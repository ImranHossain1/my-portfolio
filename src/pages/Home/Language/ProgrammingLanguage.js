import React, { useState } from "react";
import html from "../../../images/logo/html.png";
import css from "../../../images/logo/css.png";
import python from "../../../images/logo/python.jpg";
import js from "../../../images/logo/js.png";
import ts from "../../../images/logo/ts.png";
import FancyCarousel from "react-fancy-circular-carousel";
import "react-fancy-circular-carousel/FancyCarousel.css";
import "./Languages.css";

const ProgrammingLanguage = () => {
  const [focusElement, setFocusElement] = useState(0);
  const images = [html, css, python, js, ts];
  const dynamicText = ["HTML5", "CSS3", "PYTHON", "JAVASCRIPT", "TYPESCRIPT"];

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      className="text-gray-400 hover:bg-black shadow-xl rounded-lg py-0 md:py-8"
    >
      {" "}
      <h2 className="text-2xl font-bold font-two pt-4 text-red-500">
        Programming Languages
      </h2>
      <div className="carousel-container mt-20">
        <div className="carousel">
          <FancyCarousel
            images={images}
            setFocusElement={setFocusElement}
            carouselRadius={200}
            peripheralImageRadius={50}
            centralImageRadius={50}
            focusElementStyling={{ border: "2px solid #ba4949" }}
            autoRotateTime={2}
            borderWidth={4}
            borderHexColor={"1c364f"}
          />
        </div>
        <div className="dynamic-text text-center my-40 text-2xl md:text-xl">
          <p>{dynamicText[focusElement]}</p>
        </div>
      </div>
      <div className="carousel-container2 ">
        {/* Hidden on smaller screens */}
        <div className="carousel">
          <FancyCarousel
            images={images}
            setFocusElement={setFocusElement}
            carouselRadius={100}
            peripheralImageRadius={30}
            centralImageRadius={30}
            focusElementStyling={{ border: "2px solid #ba4949" }}
            autoRotateTime={2}
            borderWidth={4}
            borderHexColor={"1c364f"}
          />
        </div>
        <div className="dynamic-text text-center my-10 text-2xl">
          <p>{dynamicText[focusElement]}</p>
        </div>
      </div>
    </div>
  );
};

export default ProgrammingLanguage;
