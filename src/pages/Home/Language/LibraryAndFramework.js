import React from "react";
import { CircleProgress } from "react-gradient-progress";
//added
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const LibraryAndFramework = () => {
  return (
    <div className="relative">
      <div className="text-center text-4xl font-bold mb-8 text-red-600">
        <h2>Database</h2>
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="2000"
        className="mx-0  text-center grid lg:mx-24 grid-cols-2 lg:grid-cols-4 md:grid-cols-2 z-auto"
      >
        <div className="">
          <h2>MongoDb</h2>
          <CircleProgress
            primaryColor={["#06beb6", "#48b1bf"]}
            percentage={85}
            strokeWidth={12}
            width={120}
          />
        </div>
        <div className="">
          <h2>SQL Server</h2>
          <CircleProgress
            primaryColor={["#06beb6", "#48b1bf"]}
            percentage={70}
            strokeWidth={12}
            width={120}
          />
        </div>
        <div className="">
          <h2>MySql</h2>
          <CircleProgress
            primaryColor={["#06beb6", "#48b1bf"]}
            percentage={75}
            strokeWidth={12}
            width={120}
          />
        </div>
        <div className="">
          <h2>PostgreSQL</h2>
          <CircleProgress
            primaryColor={["#06beb6", "#48b1bf"]}
            percentage={65}
            strokeWidth={12}
            width={120}
          />
        </div>
      </div>
    </div>
  );
};

export default LibraryAndFramework;
