import About from "@/components/About";
import Hero from "@/components/Hero";
import Ourservice from "@/components/Ourservice";
import Stats from "@/components/Stats";
import TextFillOnScroll from "@/components/TextFillOnScroll";
import dynamic from "next/dynamic";
import React from "react";

const DynamicHeader = dynamic(() => import("@/components/NewPortfolio"), {
  ssr: false,
});

const Home = () => {
  return (
    <>
      <Hero />
      <TextFillOnScroll />
      <Ourservice />
      <DynamicHeader />
      <Stats />
      <About />
    </>
  );
};

export default Home;
