import About from "@/components/About";
import Hero from "@/components/Hero";
import NewPortfolio from "@/components/NewPortfolio";
import Ourservice from "@/components/Ourservice";
import Portfolio from "@/components/Portfolio";
import Stats from "@/components/Stats";
import TextFillOnScroll from "@/components/TextFillOnScroll";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <TextFillOnScroll />
      <Ourservice />
      {/* <Portfolio /> */}
      <NewPortfolio />
      <Stats />
      <About />
    </>
  );
};

export default Home;
