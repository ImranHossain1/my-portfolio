import React, { useState } from "react";
import react from "../../../images/logo/react.png";
import redux from "../../../images/logo/Redux.png";
import next from "../../../images/logo/next.png";
import nextAuth from "../../../images/logo/nextAuth.png";
import firebase from "../../../images/logo/firebase.webp";
import FancyCarousel from "react-fancy-circular-carousel";
import "react-fancy-circular-carousel/FancyCarousel.css";
import "./Languages.css";

const Frontend = () => {
  const [focusElement, setFocusElement] = useState(0);
  const images = [react, next, redux, nextAuth, firebase];
  const dynamicText = ["React", "Next.js", "Redux", "NextAuth", "Firebase"];

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      className="text-gray-400 hover:bg-black shadow-xl rounded-lg py-0 md:py-8"
    >
      {" "}
      <h2 className="text-2xl font-bold font-two pt-4 text-red-500">
        Frontend Technologies
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
        <div className="dynamic-text text-center mb-5 md:mb-0 text-2xl md:text-xl">
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
        <div className="dynamic-text text-center mb-5 md:mb-0 text-2xl md:text-xl">
          <p>{dynamicText[focusElement]}</p>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
