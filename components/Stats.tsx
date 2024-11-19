import React from "react";

const Stats = () => {
  const data = [
    {
      number: "452",
      text: "Website Launched",
    },
    {
      number: "1,250",
      text: "Working Hours",
    },
    {
      number: "524",
      text: "Satisfied Clients",
    },
  ];
  return (
    <div className="templateContainer py-4 md:py-6 lg:py-10 flex items-center justify-start flex-col lg:flex-row  gap-10 lg:gap-16">
      <div className="text-center lg:text-left space-y-2">
        <span className="pl-1 text-primaryGreen uppercase tracking-widest font-normal text-sm">
          OUR APPROACH
        </span>
        <h2 className="text-6xl lg:text-6xl uppercase text-primaryGreen font-semibold">
          Design
        </h2>
        <h2 className="text-6xl lg:text-6xl uppercase text-primaryGreen font-semibold">
          Develop
        </h2>
        <h2 className="text-6xl lg:text-6xl uppercase text-primaryGreen font-semibold">
          Deploy
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 justify-center items-center"
          >
            <span className="text-primaryGreen text-5xl lg:text-6xl uppercase font-light">
              {item.number}
            </span>
            <h2 className="uppercase tracking-wider font-medium text-primaryDark">
              {item.text}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
