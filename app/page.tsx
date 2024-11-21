import About from "@/components/About";
import Hero from "@/components/Hero";
import Ourservice from "@/components/Ourservice";
import Portfolio from "@/components/Portfolio";
import Stats from "@/components/Stats";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <Ourservice />
      <Portfolio />
      <Stats />
      <About />
    </>
  );
};

export default Home;
