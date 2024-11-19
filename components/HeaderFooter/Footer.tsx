import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="templateContainer py-4 md:py-6 lg:py-10 space-y-5">
        <div className="w-full flex items-center justify-center">
          <Image
            src="https://sagarhr.com/wp-content/uploads/2024/01/HR-Logos8-1536x375.png"
            alt="Sagar HR Logo"
            className="w-full lg:w-60 object-contain"
            height={100}
            width={250}
            priority
          />
        </div>
        <p className="text-sm tracking-wide w-full text-center text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, id
          minima enim vitae incidunt sed pariatur iure recusandae nobis porro.
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Iste omnis odio aperiam nulla suscipit illo ex
          nesciunt quisquam similique saepe. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Facilis enim id eaque exercitationem vel
          illum?
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
