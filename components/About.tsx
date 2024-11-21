import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="">
      <div
        id="about"
        className="templateContainer py-8 md:py-6 lg:py-10 flex flex-col lg:flex-row  gap-10"
      >
        <div className="w-full lg:w-[40%] ">
          <div data-aos="zoom-in" className="lg:h-[450px] w-full">
            <Image
              src="https://landing.zytheme.com/legal/assets/images/team/team-4.png"
              alt=""
              className="w-full px-5 h-full object-contain"
              height={600}
              sizes="(min-width: 1540px) 600px, (min-width: 1280px) 418px, (min-width: 1040px) 315px, (min-width: 780px) 664px, (min-width: 680px) 568px, calc(94.44vw - 55px)"
              width={500}
            />
            <div className="h-[250px] -mt-[250px] lg:h-[330px] lg:-mt-[330px] rounded-3xl w-full bg-gray-100"></div>
          </div>
        </div>
        <div className="w-full lg:w-[60%] my-auto space-y-6">
          <div className="space-y-2">
            <span
              data-aos="fade-up"
              className="text-primaryDark uppercase tracking-widest font-normal text-sm"
            >
              WHO WE ARE
            </span>
            <h2
              data-aos="fade-up"
              className="text-3xl lg:text-5xl text-primaryGreen font-bold"
            >
              ABOUT US
            </h2>
          </div>
          {/* <div className="h-[2px] rounded-full w-24 bg-primaryGreen"></div> */}
          <p
            data-aos="fade-up"
            className="text-sm tracking-wider w-full lg:w-[90%] text-gray-700 leading-relaxed"
          >
            At Axia Tech Services, we are passionate about driving digital
            transformation for businesses of all sizes. As a trusted provider of
            web development, digital marketing, graphic design, SEO, social
            media management, and app development services, we aim to deliver
            solutions that are not only innovative but also tailored to your
            unique goals. Our team combines technical expertise with creativity
            to help your brand stand out in today’s competitive landscape.
          </p>
          <p
            data-aos="fade-up"
            className="text-sm tracking-wider w-full lg:w-[90%] text-gray-700 leading-relaxed"
          >
            We believe in building long-lasting relationships with our clients
            by focusing on their success. Whether you need a sleek website,
            impactful marketing strategies, or cutting-edge app development,
            Axia Tech Services is your one-stop partner for all things digital.
            Let us help you achieve measurable results and take your business to
            new heights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
