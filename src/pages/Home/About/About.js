import React from "react";
import myFile from "../../../images/Md_Imran_Hossain_CV.pdf";

const About = () => {
  return (
    <>
      <h2 className="text-center text-4xl text-red-500  my-8">About Me</h2>
      <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1"
      >
        <div className="flex justify-center ">
          <img
            className="lg:h-screen"
            src="https://i.ibb.co/KWdJ96w/AIUB-CS-PROM-14-1-153-of-914.jpg"
            alt=""
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="px-2 flex items-center mb-20 lg:pr-16"
        >
          <div className="text-justify">
            <h2 className="text-2xl font-bold">Name : Md Imran Hossain</h2>
            <p className="my-2 w-4/6 w-full lg:w-full ">
              I am a highly skilled MERN stack developer with a proven track
              record of four years in web development. My expertise spans across
              Node.js, Express.js, React.js, Next.js, MongoDB, and Prisma,
              allowing me to craft robust and efficient web applications. My
              commitment to writing clean, maintainable code and my strong
              problem-solving abilities have consistently contributed to
              successful project outcomes. Driven by a passion for staying ahead
              of industry trends, I am dedicated to leveraging the latest
              technologies to deliver innovative solutions. My collaborative
              approach makes me effective in team environments, and my
              continuous commitment to improvement ensures that I am a valuable
              asset in dynamic development settings. If you are looking for a
              developer who combines technical excellence with a
              forward-thinking mindset, I am confident in my ability to meet and
              exceed your project requirements.
            </p>
            <p className="my-4">
              <b className="text-red-500 ">Languages: </b>Javascript, HTML5,
              CSS3, Javascript (ES6 & ES7), TypeScript, SCSS, C# and Python.
            </p>
            <p className="my-4">
              <b className="text-red-500 ">Frontend: </b>
              NextJs (Page Router, App Router), NextAuth, Firebase, Reactjs,
              Redux.
            </p>
            <p className="my-4">
              <b className="text-red-500 ">Backend: </b>Nodejs, ExpressJs, and
              Django.
            </p>
            <p className="my-4">
              <b className="text-red-500 ">Cloud/Databases </b>MongoDb,
              PostgreSQL, Prisma, AWS, Kubernetes, Vercel.
            </p>
            <p className="my-4">
              <b className="text-red-500 ">Design Pattern: </b>ReactJs, NextJs,
              MVC, Modular, User flow, Prototyping, User Research, and
              Responsive Web.
            </p>
            <p className="my-4">
              <b className="text-red-500 ">Tools & Technologies: </b>Docker,
              Agile (Scrum), Jira, CI/CD, GIT, Slack, Microsoft 365 (Word,
              Excel, PowerPoint).
            </p>
            <p className="my-4">
              <b className="text-red-500 "> Soft Skills: </b>Problem Solving,
              Good Communication Skills, Reliable, and Consistent.
            </p>
            <div>
              <p>
                Feel free to connect with me through my LinkedIn profile or the
                contact form on this website for any relevant opportunities or
                just to connect. Thank you for visiting my website! To know more
                <a
                  href={myFile}
                  download
                  target="_blank"
                  rel="noreferrer"
                  className="mx-2 text-red-400"
                >
                  Click To See My Resume.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
