import React from "react";
import { CircleProgress } from "react-gradient-progress";
//added
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const FrontendLibrary = () => {
  return (
    <div className="relative">
      <div className="text-center text-4xl font-bold mb-8 text-red-600">
        <h2>Frontend Development</h2>
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="2000"
        className="mx-0  text-center grid lg:mx-24 grid-cols-2 lg:grid-cols-6 md:grid-cols-2 z-auto"
      >
        <div className="">
          <h2>React JS</h2>
          <CircleProgress
            primaryColor={["#56ab2f", "#a8e063"]}
            percentage={80}
            strokeWidth={12}
            width={120}
          />
        </div>
        <div className="">
          <h2>Next Js</h2>
          <CircleProgress
            primaryColor={["#56ab2f", "#a8e063"]}
            percentage={75}
            strokeWidth={12}
            width={120}
          />
        </div>
        <div className="">
          <h2>Redux</h2>
          <CircleProgress
            primaryColor={["#56ab2f", "#a8e063"]}
            percentage={65}
            strokeWidth={12}
            width={120}
          />
        </div>

        <div className="">
          <h2>Bootstrap</h2>
          <CircleProgress
            primaryColor={["#56ab2f", "#a8e063"]}
            percentage={90}
            strokeWidth={12}
            width={120}
          />
        </div>
        <div className="">
          <h2>Material UI</h2>
          <CircleProgress
            primaryColor={["#56ab2f", "#a8e063"]}
            percentage={90}
            strokeWidth={12}
            width={120}
          />
        </div>
        <div className="">
          <h2>Taillwind CSS</h2>
          <CircleProgress
            primaryColor={["#56ab2f", "#a8e063"]}
            percentage={90}
            strokeWidth={12}
            width={120}
          />
        </div>
      </div>
    </div>
  );
};

export default FrontendLibrary;
