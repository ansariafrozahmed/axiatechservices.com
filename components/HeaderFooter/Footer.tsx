import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="templateContainer py-4 md:py-6 lg:py-10 space-y-5">
        {/* <h2 className="text-3xl text-center font-semibold tracking-widest text-primaryGreen">
          AXIA
        </h2> */}
        <div className="w-full flex items-center justify-center">
          <Image
            src="/logo/axialogowithoutbg.png"
            alt=""
            className="w-1/2 lg:w-40 object-contain"
            height={100}
            width={250}
            priority
          />
        </div>
        <p className="text-sm tracking-wide w-full text-center text-gray-700">
          At Axia Tech Services, we are passionate about driving digital
          transformation for businesses of all sizes. As a trusted provider of
          web development, digital marketing, graphic design, SEO, social media
          management, and app development services, we aim to deliver solutions
          that are not only innovative but also tailored to your unique goals.
        </p>
        <hr />
        <p className="text-center text-sm">
          Copyright 2024{" "}
          <span className="text-primaryGreen font-medium">
            Axia Tech Services
          </span>{" "}
          | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
