import Image from "next/image";
import React from "react";
import ContactButton from "./ContactButton";

const Hero = () => {
  return (
    <div className="templateContainer flex flex-col lg:flex-row lg:h-[550px] gap-6 pb-6">
      <div
        data-aos="zoom-out"
        className="w-full lg:w-[63%] my-auto pt-14 lg:pt-0 space-y-4"
      >
        <span className="text-primaryGreen uppercase tracking-widest font-normal text-sm">
          Axia Tech Services
        </span>
        <div className="space-y-1 -ml-1">
          <h1 className="text-primaryDark text-[45px] leading-none lg:text-6xl tracking-wide uppercase font-extrabold">
            Empowering Your
          </h1>
          <h2 className="text-[35px] leading-none lg:text-6xl uppercase text-primaryGreen tracking-wide font-extrabold">
            Digital Journey
          </h2>
        </div>
        <p className="text-sm tracking-wide w-full lg:w-[90%] text-gray-700">
          Web Development. Digital Marketing. SEO. All-in-One Solutions to
          Elevate Your Business.
        </p>
        <ContactButton text="Get in touch" />
      </div>
      {/* ----------------- */}
      <div className="w-full lg:w-[37%] ">
        <div data-aos="zoom-out" className="h-full w-full">
          <Image
            src="https://sagarhr.com/wp-content/uploads/2024/01/office-manager-ready-to-listen-clients-friendly-p-2022-10-11-17-54-04-utc.png"
            alt=""
            className="w-full px-5 h-full object-contain object-bottom"
            height={600}
            sizes="(min-width: 1540px) 484px, (min-width: 1280px) 389px, (min-width: 1040px) 294px, (min-width: 780px) 664px, (min-width: 680px) 568px, calc(94.44vw - 55px)"
            width={500}
          />
          <div className="h-[250px] -mt-[250px] lg:h-[330px] lg:-mt-[330px] rounded-3xl w-full bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
