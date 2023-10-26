import React, { useEffect, useState } from "react";
import Certification from "./Certification";

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);
  useEffect(() => {
    fetch("/certification.json")
      .then((res) => res.json())
      .then((data) => setCertifications(data));
  }, []);
  console.log(certifications);
  return (
    <div id="certifications" className="pt-12">
      <div className="grid justify-items-center mx-auto my-12 text-center ">
        <h2 className="text-5xl mb-5 font-bold text-gray-300 ">
          My Certificates
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-8 mx-0 md:mx-2 lg:mx-20">
          {certifications.map((certification) => (
            <Certification
              key={certification.id}
              certification={certification}
            ></Certification>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
