"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

// Register ScrollTrigger plugin for GSAP
gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation: React.FC = () => {
  useEffect(() => {
    // Select all elements with the class 'reveal-type'
    const splitTypes = document.querySelectorAll<HTMLElement>(".reveal-type");

    splitTypes.forEach((char) => {
      // Access background and foreground color from data attributes
      const bg = char.getAttribute("data-bg-color") || "#ffffff"; // Default to white
      const fg = char.getAttribute("data-fg-color") || "#000000"; // Default to black

      // Split the text into characters using SplitType
      const text = new SplitType(char, { types: "chars" });

      // Animate character colors with GSAP
      gsap.fromTo(
        text.chars,
        { color: bg }, // Initial color
        {
          color: fg, // Target color
          duration: 0.3,
          stagger: 0.02,
          scrollTrigger: {
            trigger: char,
            start: "top 80%",
            end: "top 0%",
            scrub: true,
            markers: false,
            toggleActions: "play play reverse reverse",
          },
        }
      );
    });

    // Cleanup function to kill ScrollTriggers when the component is unmounted
    return () => {
      // Kill all ScrollTriggers
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="templateContainer hidden lg:block py-8 md:py-6 lg:py-16">
      <p
        className="reveal-type text-[18px] lg:text-[52px] text-left text-primaryDark uppercase tracking-wide font-medium leading-tight"
        data-bg-color="#cccccc"
        data-fg-color="teal"
      >
        We believe in building long-lasting <br />
        relationships with our clients by <br /> focusing on their success.
      </p>
    </div>
  );
};

export default ScrollAnimation;
