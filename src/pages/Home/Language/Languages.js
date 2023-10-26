import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Languages.css"; // Import your CSS file
import ProgrammingLanguage from "./ProgrammingLanguage";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Cloud from "./Cloud";

AOS.init();

const Languages = () => {
  return (
    <div className="relative my-8">
      <div
        id="skills"
        className="mx-0 md:mx-8 my-16 transition ease-in duration-700 text-center"
      >
        <h2 className="text-5xl font-two mt-4">Skills</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-8 mx-0 lg:mx-20">
          <ProgrammingLanguage></ProgrammingLanguage>
          <Frontend></Frontend>
          <Backend></Backend>
          <Cloud></Cloud>
        </div>
      </div>
    </div>
  );
};

export default Languages;
