import React from "react";
import whyus from "../assets/whyus.png";

const WhyUs = () => {
  return (
    <div className="mt-24 bg-[#FFFABB] h-auto sm:h-[500px] py-12 px-4 sm:px-14 lg:px-24 flex flex-col sm:flex-row gap-8 justify-between items-center">
      <div className="sm:w-[50%]">
        <p className="nunito text-3xl xs:text-4xl font-bold text-center">
          Why Us
        </p>
        <p className="nunito text-md xs:text-lg md:text-xl mt-8 text-center">
          Work Life Desks is designed around work-life balance, offering
          value-driven coworking spaces that prioritize comfort, ergonomics, and
          wellness. With green, stress-free interiors and features like
          sit-stand desks, we create workspaces that support both productivity
          and well-being.
        </p>
      </div>
      <div className="sm:w-[50%] flex justify-center">
        <img
          src={whyus}
          alt="why us"
          className="h-[300px] mt-6 sm:mt-0 md:h-[400px]"
        />
      </div>
    </div>
  );
};

export default WhyUs;
