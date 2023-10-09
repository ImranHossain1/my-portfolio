import React from "react";
import { CircleProgress } from "react-gradient-progress";
//added
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Language = () => {
  return (
    <div className="relative">
      <div
        id="skills"
        className="mx-8 my-16 transition ease-in duration-700 text-center"
      >
        <h2 className="text-5xl font-two mt-4">Skills</h2>
      </div>
      <div className="text-center text-4xl font-bold mb-8 text-red-600">
        <h2>Programming Language</h2>
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="2000"
        className="mx-0  text-center grid lg:mx-24 grid-cols-2 lg:grid-cols-6 md:grid-cols-2 z-auto"
      >
        <div className="">
          <h2>HTML5</h2>
          <CircleProgress percentage={90} strokeWidth={12} width={120} />
        </div>
        <div className="">
          <h2>CSS3</h2>
          <CircleProgress percentage={85} strokeWidth={12} width={120} />
        </div>
        <div className="">
          <h2>JavaScript</h2>
          <CircleProgress percentage={85} strokeWidth={12} width={120} />
        </div>
        <div className="">
          <h2>TypeScript</h2>
          <CircleProgress percentage={65} strokeWidth={12} width={120} />
        </div>
        <div className="">
          <h2>Python</h2>
          <CircleProgress percentage={65} strokeWidth={12} width={120} />
        </div>
        <div className="">
          <h2>C#</h2>
          <CircleProgress percentage={70} strokeWidth={12} width={120} />
        </div>
      </div>
    </div>
  );
};

export default Language;
