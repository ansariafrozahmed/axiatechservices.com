import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="templateContainer py-4 md:py-6 lg:py-10 flex flex-col lg:flex-row  gap-10"
    >
      <div className="w-full lg:w-[40%] ">
        <div className="lg:h-[450px] w-full">
          <Image
            src="https://landing.zytheme.com/legal/assets/images/team/team-4.png"
            alt=""
            className="w-full px-5 h-full object-contain"
            height={600}
            width={500}
          />
          <div className="h-[250px] -mt-[250px] lg:h-[330px] lg:-mt-[330px] rounded-3xl w-full bg-gray-100"></div>
        </div>
      </div>
      <div className="w-full lg:w-[60%] my-auto space-y-6">
        <h2 className="text-3xl uppercase tracking-wide">About Us</h2>
        <div className="h-[2px] rounded-full w-24 bg-primaryGreen"></div>
        <p className="text-sm tracking-wider w-full lg:w-[90%] text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          dolore quam voluptate accusamus corrupti dolorem incidunt
          necessitatibus voluptatum iusto repellat ipsa quidem nam consequuntur
          culpa explicabo, alias magni vero aperiam. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Neque nesciunt harum porro illum
          deserunt facilis at expedita sint natus ullam?
        </p>
        <p className="text-sm tracking-wider w-full lg:w-[90%] text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          dolore quam voluptate accusamus corrupti dolorem incidunt
          necessitatibus voluptatum iusto repellat ipsa quidem nam consequuntur
          culpa explicabo, alias magni vero aperiam. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Neque nesciunt harum porro illum
          deserunt facilis at expedita sint natus ullam?
        </p>
      </div>
    </div>
  );
};

export default About;
