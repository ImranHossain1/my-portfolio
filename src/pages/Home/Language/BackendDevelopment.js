import React from "react";
import { CircleProgress } from "react-gradient-progress";
//added
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const BackendDevelopment = () => {
  return (
    <div className="relative">
      <div className="text-center text-4xl font-bold mb-8 text-red-600">
        <h2>Backend Development</h2>
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="2000"
        className="mx-0  text-center grid lg:mx-24 grid-cols-2 lg:grid-cols-8 md:grid-cols-2 z-auto"
      >
        <div className="">
          <h2>Node JS</h2>
          <CircleProgress
            primaryColor={["#eb3349", "#f45c43"]}
            percentage={80}
            strokeWidth={12}
            width={120}
          />
        </div>
        <div className="">
          <h2>Express JS</h2>
          <CircleProgress
            primaryColor={["#eb3349", "#f45c43"]}
            percentage={75}
            strokeWidth={12}
            width={120}
          />
        </div>
        <div className="">
          <h2>Mongoose</h2>
          <CircleProgress
            primaryColor={["#eb3349", "#f45c43"]}
            percentage={65}
            strokeWidth={12}
            width={120}
          />
        </div>

        <div className="">
          <h2>RESTful APIs</h2>
          <CircleProgress
            primaryColor={["#eb3349", "#f45c43"]}
            percentage={90}
            strokeWidth={12}
            width={120}
          />
        </div>
        <div className="">
          <h2>JSON Web Tokens (JWT)</h2>
          <CircleProgress
            primaryColor={["#eb3349", "#f45c43"]}
            percentage={90}
            strokeWidth={12}
            width={120}
          />
        </div>
        <div className="">
          <h2>ASP.Net Core</h2>
          <CircleProgress
            primaryColor={["#eb3349", "#f45c43"]}
            percentage={65}
            strokeWidth={12}
            width={120}
          />
        </div>
        <div className="">
          <h2>Entity Framework</h2>
          <CircleProgress
            primaryColor={["#eb3349", "#f45c43"]}
            percentage={65}
            strokeWidth={12}
            width={120}
          />
        </div>
        <div className="">
          <h2>Web APIs</h2>
          <CircleProgress
            primaryColor={["#eb3349", "#f45c43"]}
            percentage={60}
            strokeWidth={12}
            width={120}
          />
        </div>
      </div>
    </div>
  );
};

export default BackendDevelopment;
