import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Blogs from "../Blog/Blogs";
import Certifications from "../Certifications/Certifications";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import Portfolio from "../Portfolio/Portfolio";

import Languages from "../Language/Languages";

const HomeItems = () => {
  return (
    <>
      <Banner />
      <Featured />
      <Languages />
      <Portfolio />
      <Blogs />
      <Certifications></Certifications>
      <Contact />
      <Footer />
    </>
  );
};

export default HomeItems;
