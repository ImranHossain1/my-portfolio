import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Blogs from "../Blog/Blogs";
import Certifications from "../Certifications/Certifications";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import Language from "../Language/Language";
import LibraryAndFramework from "../Language/LibraryAndFramework";
import Portfolio from "../Portfolio/Portfolio";
import FrontendLibrary from "../Language/FrontendLibrary";
import BackendDevelopment from "../Language/BackendDevelopment";

const HomeItems = () => {
  return (
    <>
      <Banner />
      <Featured />
      <Language />
      <FrontendLibrary />
      <BackendDevelopment />
      <LibraryAndFramework />
      <Portfolio />
      <Blogs />
      <Certifications></Certifications>
      <Contact />
      <Footer />
    </>
  );
};

export default HomeItems;
