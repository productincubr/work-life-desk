import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#ebebeb] h-[400px] md:h-[550px] mt-8 lg:p-12 px-4 flex flex-col justify-center items-center text-center ">
      <div className="sm:w-[70%]">
        <p className="recoleta-bold font-bold text-[28px] xs:text-[30px] sm:text-[48px] lg:text-[60px] leading-tight lg:leading-[1.1]">
          Fully Managed Offices, Seamlessly Delivered
        </p>
        <p className="nunito mt-6 lg:mt-16 font-normal text-[17px] xs:text-[18px] sm:text-[22px] lg:text-[28px] leading-7 lg:leading-8">
          At Work Life Desks, we take care of every detail from design and
          fit-out to daily operations so your team can move in and start working
          from day one.
        </p>
      </div>
    </div>
  );
};

export default Hero;
