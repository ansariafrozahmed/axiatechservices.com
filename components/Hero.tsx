import Image from "next/image";
import React from "react";
import ContactButton from "./ContactButton";

const Hero = () => {
  return (
    <div className="templateContainer flex flex-col lg:flex-row lg:h-[550px] gap-10 pb-6">
      <div className="w-full lg:w-[60%] my-auto pt-10 lg:pt-0 space-y-4">
        <span className="text-primaryGreen uppercase tracking-widest font-normal text-sm">
          Axia Tech Services
        </span>
        <div className="space-y-0">
          <h1 className="text-primaryDark text-5xl lg:text-6xl uppercase font-semibold">
            WE PROVIDE SERVICE
          </h1>
          <h2 className="text-5xl lg:text-7xl text-primaryGreen font-bold">
            THAT HELPS
          </h2>
        </div>
        <p className="text-sm tracking-wide w-full lg:w-[90%] text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, id
          minima enim vitae incidunt sed pariatur iure recusandae nobis porro.
          Lorem ipsum dolor sit amet.
        </p>
        <ContactButton />
      </div>
      {/* ----------------- */}
      <div className="w-full lg:w-[40%] ">
        <div className="h-full w-full">
          <Image
            src="https://sagarhr.com/wp-content/uploads/2024/01/office-manager-ready-to-listen-clients-friendly-p-2022-10-11-17-54-04-utc.png"
            alt=""
            className="w-full px-5 h-full object-contain"
            height={600}
            width={500}
          />
          <div className="h-[250px] -mt-[250px] lg:h-[380px] lg:-mt-[380px] rounded-3xl w-full bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
