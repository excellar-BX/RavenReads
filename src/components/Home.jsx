import React from "react";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero/>
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
