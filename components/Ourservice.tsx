import Image from "next/image";
import React from "react";

const Ourservice = () => {
  const data = [
    {
      image: "/coding.png",
      title: "Web Development",
      description:
        "We create responsive, user-friendly websites tailored to your business needs. Enhance your online presence with cutting-edge design and functionality.",
    },
    {
      image: "/social-media.png",
      title: "Digital Marketing",
      description:
        "Drive growth with targeted campaigns, SEO strategies, and social media engagement. Reach the right audience at the right time.",
    },
    {
      image: "/curve.png",
      title: "Graphic Designing",
      description:
        "Elevate your brand with stunning visuals and creative designs. From logos to marketing materials, we craft impactful designs that stand out.",
    },
    {
      image: "/mobile-development.png",
      title: "App Development",
      description:
        "Build innovative, user-centric mobile apps to enhance customer engagement. From concept to launch, we deliver seamless solutions.",
    },
    {
      image: "/chat.png",
      title: "Bulk SMS",
      description:
        "Connect instantly with your audience through efficient bulk messaging. Perfect for promotions, alerts, and updates.",
    },
  ];
  return (
    <div className="bg-gray-100">
      <div
        id="services"
        className="templateContainer py-8 md:py-6 lg:py-14 flex flex-col lg:flex-row gap-2 lg:gap-8"
      >
        <div className="w-full lg:w-[45%] ">
          <div data-aos="fade-up" className="h-full  w-full">
            <Image
              src="/banner02.jpg"
              alt=""
              className="w-full lg:px-5 h-full object-cover"
              height={600}
              sizes="(min-width: 1540px) 894px, (min-width: 1280px) 1200px, (min-width: 1040px) 363px, (min-width: 780px) 704px, (min-width: 680px) 608px, calc(94.44vw - 15px)"
              width={500}
            />
          </div>
        </div>
        <div className="space-y-10 w-full lg:w-[55%] py-6">
          <div className="space-y-3">
            <span
              data-aos="fade-left"
              className="text-primaryDark uppercase tracking-widest font-normal text-sm"
            >
              WHAT WE DO
            </span>
            <h2
              data-aos="fade-left"
              className="text-3xl lg:text-5xl text-primaryGreen font-medium"
            >
              OUR SERVICE
            </h2>
            <p
              data-aos="fade-left"
              className="text-[13px] tracking-wide w-full lg:w-[90%] text-gray-700"
            >
              <span className="text-primaryGreen">Axia Tech Services</span>{" "}
              offers expert web development, digital marketing, SEO, graphic
              design, social media management, and app development. We combine
              creativity and technology to elevate your brand and drive growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 lg:gap-y-14">
            {data.map((item, index) => (
              <div data-aos="fade-up" key={index} className="space-y-2">
                <div>
                  <Image
                    src={item.image}
                    alt=""
                    height={200}
                    className="h-9 w-9"
                    width={200}
                  />
                </div>
                <h3 className="text-lg lg:text-xl text-primaryDark tracking-wide uppercase">
                  {item.title}
                </h3>
                <p className="text-[13px] tracking-wide w-full  text-gray-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourservice;
