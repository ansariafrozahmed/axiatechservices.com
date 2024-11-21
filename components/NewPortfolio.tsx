"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { portfolioContent } from "@/utils/PortfolioData";
import Image from "next/image";

const NewPortfolio = () => {
  const [activeTab, setActiveTab] = useState("Business");
  const contentRef = useRef(null);

  // Extract category names dynamically
  const categoryNames = portfolioContent.map((item) => Object.keys(item)[0]);

  // Find the active category's content dynamically
  const activeContent =
    portfolioContent.find((item) => item[activeTab])?.[activeTab] || [];

  // Animate content on activeTab change
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [activeTab]);

  return (
    <div id="portfolio" className="templateContainer py-6 lg:py-12">
      <h2
        data-aos="fade-up"
        className="text-3xl lg:text-5xl text-center text-primaryGreen font-medium"
      >
        OUR PORTFOLIO
      </h2>

      {/* Tabs */}
      <div
        className="flex overflow-x-auto mt-6 pb-2 lg:justify-center"
        style={{ scrollbarWidth: "none" }}
      >
        {categoryNames.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`uppercase tracking-wider text-[13px] border-b-2  px-3 py-1.5 font-normal text-primaryDark transition ${
              activeTab === category
                ? " border-primaryGreen text-primaryGreen "
                : "border-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Active Tab Content with GSAP Animation */}
      <div className="mt-8">
        <div
          ref={contentRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {activeContent.map((item: any, index: any) => (
            <div key={index} className="aspect-[4/3]">
              <Image
                height={600}
                width={600}
                src={item.image}
                alt={""}
                className="w-full h-full object-cover"
              />
              {/* <div className="p-4">
                <h3 className="text-lg font-medium">{item.title}</h3>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewPortfolio;
