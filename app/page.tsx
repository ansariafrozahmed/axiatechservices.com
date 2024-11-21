import About from "@/components/About";
import Hero from "@/components/Hero";
import Ourservice from "@/components/Ourservice";
import Stats from "@/components/Stats";
import TextFillOnScroll from "@/components/TextFillOnScroll";
import dynamic from "next/dynamic";
import React from "react";

const DynamicPortfolio = dynamic(() => import("@/components/NewPortfolio"), {
  ssr: false,
});

const Home = () => {
  return (
    <>
      <Hero />
      <TextFillOnScroll />
      <Ourservice />
      <About />
      <DynamicPortfolio />
      <Stats />
    </>
  );
};

export default Home;
