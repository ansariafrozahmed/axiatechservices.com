"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";

const Portfolio = () => {
  const data = [
    {
      img: "https://sagartech.co.in/image/homepage/MithiyajMockup.webp",
      type: "Business Website",
      title: "Mithiyaj",
      desc: "At Mithiyaj, we understand the universal craving for the finer things in life. With an unwavering commitment to quality, creativity, and affordability, we have curated a menu that spans a spectrum of delectable treats. From sumptuous cakes and pastries to timeless Indian sweets, delicate Baklavas, and luxurious gift hampers, we are here to transform your moments of indulgence into everlasting memories.",
    },
    {
      img: "https://sagartech.co.in/image/homepage/BSAuto.webp",
      type: "Ecommerce Website",
      title: "BS Auto Accessories",
      desc: "When it comes to e-commerce website its user interface is a big challenge we have some best Wordpress Developers who can make your websites user friendly, easy to navigate product for customers with the help of latest technology no matter how many products are listed on your website it won't create a bad user experience.",
    },
    {
      img: "https://sagartech.co.in/image/homepage/ASAudio.webp",
      type: "Catalogue Website",
      title: "AS Audio",
      desc: "Amaze Sound Audio Private Limited is a professional large-scale importer/manufacturer of Power Amplifiers, Professional Speakers, HF, Live Mixers, DJ Mixers, Microphones, Digital Processors, Manual Processors and Speaker Cabinets. AS Audio is driven by our Dedication to quality and most important Reliability.",
    },
    {
      img: "https://sagartech.co.in/image/homepage/folksco.webp",
      type: "Builder Website",
      title: "Folksco",
      desc: "At Folksco, our team works with you to create spaces for Best Interior Designer in Mumbai that are truly special. Our team is the pillars of our projects; they run our studio with passion, vision, and energy. As a team, we have made Eye for Detail, Value Engineering,",
    },
    {
      img: "https://sagartech.co.in/image/homepage/amarClearing.webp",
      type: "Logistics Website",
      title: "Amar Clearing",
      desc: "We are a Servicing Enterprise that handles varied activities in the sphere of Imports and Exports. Currently we are one of the leading Customs House Agents and Freight Forwarding Companies, rapidly moving towards the goal of emerging as one of the largest company dealing with Custom clearance, freight forwarding and logistics management.",
    },
  ];
  return (
    <div id="portfolio" className="templateContainer py-4 md:py-6 lg:py-14">
      <h2 className="text-3xl lg:text-4xl text-primaryGreen font-bold text-center uppercase">
        Our Portfolio
      </h2>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {data.map((item, i) => (
          <SwiperSlide>
            <div className="flex flex-col lg:flex-row lg:h-[500px] items-center gap-0 lg:gap-10">
              <div className="w-full lg:w-1/2">
                <div className="lg:h-[450px] py-8 lg:py-0">
                  <Image
                    src={item.img}
                    alt=""
                    className="h-full w-full !object-contain"
                    height={800}
                    width={800}
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="space-y-3 text-left">
                  <span className="text-primaryDark uppercase tracking-widest font-normal text-sm">
                    {item.type}
                  </span>
                  <h2 className="text-3xl lg:text-5xl text-primaryGreen font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-sm tracking-wide w-full lg:w-[90%] text-gray-700">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;
