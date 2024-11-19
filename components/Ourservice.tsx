import Image from "next/image";
import React from "react";

const Ourservice = () => {
  const data = [
    {
      image: "/desktop.png",
      title: "Web Development",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: "/desktop.png",
      title: "Digital Marketing",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: "/desktop.png",
      title: "Graphic Designing",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: "/desktop.png",
      title: "App Development",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: "/desktop.png",
      title: "Bulk SMS",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <div
      id="services"
      className="templateContainer py-4 md:py-6 lg:py-10 flex flex-col lg:flex-row gap-2 lg:gap-8"
    >
      <div className="w-full lg:w-[45%] ">
        <div className="h-full w-full">
          <Image
            src="/banner02.jpg"
            alt=""
            className="w-full lg:px-5 h-full object-cover"
            height={600}
            sizes="100vw"
            width={500}
          />
        </div>
      </div>
      <div className="space-y-10 w-full lg:w-[55%] py-6">
        <div className="space-y-3">
          <span className="text-primaryDark uppercase tracking-widest font-normal text-sm">
            WHAT WE DO
          </span>
          <h2 className="text-3xl lg:text-5xl text-primaryGreen font-bold">
            OUR SERVICE
          </h2>
          <p className="text-sm tracking-wide w-full lg:w-[90%] text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, id
            minima enim vitae incidunt sed pariatur iure recusandae nobis porro.
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 lg:gap-y-14">
          {data.map((item, index) => (
            <div key={index} className="space-y-2">
              <div>
                <Image
                  src={item.image}
                  alt=""
                  height={100}
                  className="h-8 w-8"
                  width={100}
                />
              </div>
              <h3 className="text-lg lg:text-xl text-primaryDark tracking-wide uppercase">
                {item.title}
              </h3>
              <p className="text-sm tracking-wide w-full  text-gray-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ourservice;
