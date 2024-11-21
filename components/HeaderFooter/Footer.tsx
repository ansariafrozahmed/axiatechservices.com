"use client";
import Image from "next/image";
import React from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const Footer = () => {
  const handleScroll = (targetId: any) => {
    const target = document.getElementById(targetId);
    if (target) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: target, offsetY: 58 }, // Offset for fixed header, if any
        ease: "power2.inOut",
      });
    }
  };
  return (
    <div className="bg-gray-100">
      <div className="templateContainer grid grid-cols-1 md:grid-cols-3 py-4 md:py-6 lg:py-10 gap-8">
        <div className="space-y-5">
          <div className="w-full">
            <Image
              src="/logo/axialogowithoutbg.png"
              alt=""
              className="w-24 lg:w-32 object-contain"
              height={100}
              width={250}
              priority
            />
          </div>
          <p className="text-sm tracking-wide w-full text-left leading-relaxed text-gray-700">
            As a trusted provider of web development, digital marketing, graphic
            design, SEO, social media management, and app development services,
            we aim to deliver solutions that are not only innovative but also
            tailored to your unique goals.
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="text-xl lg:text-2xl text-primaryGreen font-normal">
            ABOUT US
          </h2>
          <div className="h-[2px] rounded-full w-24 bg-primaryGreen"></div>
          <div className="flex flex-col gap-4 text-primaryDark text-xs tracking-widest font-medium uppercase">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("home");
              }}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("about");
              }}
            >
              About
            </a>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("portfolio");
              }}
            >
              Our Portfolio
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("services");
              }}
            >
              Services
            </a>
          </div>
        </div>
        <div className="space-y-5">
          <h2 className="text-xl lg:text-2xl uppercase text-primaryGreen font-normal">
            Contact Details
          </h2>
          <div className="h-[2px] rounded-full w-24 bg-primaryGreen"></div>
          <div className="flex flex-col gap-5 text-primaryDark text-xs tracking-widest font-medium">
            <a className="hover:text-primaryGreen" href="tel:9004045616">
              +91 9004045616
            </a>
            <a
              className="hover:text-primaryGreen"
              href="mailto:info@axiatechservices.com"
            >
              info@axiatechservices.com
            </a>
          </div>
        </div>
      </div>
      <hr />
      <p className="text-center text-sm py-4">
        Copyright 2024{" "}
        <span className="text-primaryGreen font-medium">
          Axia Tech Services
        </span>{" "}
        | All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
