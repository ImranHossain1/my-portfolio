import React from "react";
import Typical from "react-typical";
import banner from "../../../images/banner.png";
import myFile from "../../../images/Md_Imran_Hossain_CV.pdf";
import "./Banner.css";

const Banner = () => {
  return (
    <div id="home">
      <div className="grid grid-cols-1  lg:grid-cols-2 md:grid-cols-2  pt-8">
        <div className="pl-8 order-last lg:order-1">
          <div className="some-text ">
            <h4 className="text-xl pt-16 ">Welcome To My World</h4>
            <h2 className="text-3xl lg:text-5xl py-4 font-two  ">
              Hi, I'm <br />{" "}
              <span style={{ color: "#ff014f" }}>Md IMRAN HOSSAIN</span>
            </h2>

            <h2 className=" text-3xl lg:text-4xl  font-bold py-4">
              <span className="pr-4">A</span>
              <Typical
                className=" text-3xl lg:text-4xl  font-bold"
                steps={[
                  "Fast Lerner.",
                  4000,
                  "Full Stack Developer.",
                  4000,
                  "Cloud Developer.",
                  4000,
                ]}
                loop={Infinity}
                wrapper="b"
              />
            </h2>
            <p className="text-xl">
              Self-driven, quick learner, passionate programmer with a curious
              mind who enjoys solving a complex and challenging real-world
              problems.."{" "}
            </p>
          </div>

          <a href={myFile} download target="_blank" rel="noreferrer">
            <button className="px-6 py-3 rounded-lg shadow-lg mt-4 bg-purple-700">
              Download Resume
            </button>
          </a>

          <div className="mt-8">
            <div>
              <p className="uppercase text-md  text-gray-400">Find Me Here</p>
            </div>
            <div className="flex mt-2">
              <a
                href="https://www.linkedin.com/in/md-imran-hossain-281490119/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="m-1 px-6 py-4 custom-bg hover:bg-blue-700 rounded-lg shadow-xl">
                  <i className="fab fa-linkedin-in"></i>
                </div>
              </a>

              <a
                href="https://www.facebook.com/imran1402/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="m-1 px-6 py-4 custom-bg hover:bg-blue-600 rounded-lg shadow-xl">
                  <i class="fa-brands fa-facebook"></i>
                </div>
              </a>
              <a
                href="https://github.com/ImranHossain1"
                target="_blank"
                rel="noreferrer"
              >
                <div className="m-1 px-6 py-4 custom-bg hover:bg-black rounded-lg shadow-xl">
                  <i class="fa-brands fa-github"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center order-1">
          <div className="mt-2 flex items-center">
            <div className=" inner-shadow rounded-full p-3 headerImage">
              <img
                className=" outer-shadow-0  rounded-full "
                src={banner}
                alt=""
                style={{
                  width: "280px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
