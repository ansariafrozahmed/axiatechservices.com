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
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }
  }, [activeTab]);

  return (
    <div className="bg-gray-100">
      <div id="portfolio" className="templateContainer py-6 lg:py-12">
        <h2
          data-aos="fade-up"
          className="text-3xl lg:text-5xl text-center text-primaryGreen font-medium"
        >
          OUR PORTFOLIO
        </h2>

        {/* Tabs */}
        <div
          className="flex overflow-x-auto sticky top-[55px] z-40 bg-gray-100 pt-4 lg:mt-6 pb-2 lg:justify-center"
          style={{ scrollbarWidth: "none" }}
        >
          {categoryNames.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`uppercase  tracking-wider text-[13px] border-b-2  px-3 py-1.5 font-normal text-primaryDark transition ${
                activeTab === category
                  ? " border-primaryGreen text-primaryGreen "
                  : "border-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Active Tab Content with GSAP Animation */}
        <div className="mt-2 lg:mt-6">
          <div
            ref={contentRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 "
          >
            {activeContent.map((item: any, index: any) => (
              <div key={index} className="aspect-[4/3.1] bg-white p-2  rounded">
                <Image
                  height={600}
                  width={600}
                  src={item.image}
                  alt={""}
                  className="w-full h-full object-contain"
                />
                <div className="px-4 py-2">
                  <h3 className="uppercase  tracking-wider text-sm text-center font-medium text-primaryGreen ">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPortfolio;
