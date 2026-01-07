
import React from "react";
import heroBackground from "../assets/heroBackground.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[520px] lg:h-[620px] overflow-hidden">
      
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('" + heroBackground + "')",
        }}
      />

      {/* Wrapper */}
      <div className="relative h-full max-w-7xl mx-auto px-4 lg:px-12 flex items-center justify-center lg:justify-end">
        
        {/* RIGHT BOX */}
        <div className="bg-white w-full max-w-[560px] px-6 py-12 sm:px-10 sm:py-10 lg:px-12 lg:py-16 rounded-2xl border border-[#E6E6E6] shadow-[0_10px_30px_rgba(0,0,0,0.08)] text-center">
          
          {/* Heading */}
          <h1 className="recoleta-bold text-[25px] sm:text-[34px] lg:text-[50px] leading-[1.15] text-black">
            Fully{" "}
            <span className="text-[#2F6BFF]">Managed</span>{" "}
            <br />
            Offices, Seamlessly{" "}
            <br />
            <span className="text-[#2F6BFF]">Delivered</span>
          </h1>

          {/* Description */}
          <p className="nunito mt-5 text-[15px] sm:text-[17px] lg:text-[18px] leading-[1.75] text-[#4B5563]">
            At Work Life Desks, we take care of every detail from
            design and fit-out to daily operations so your team can
            move in and start working from day one.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Hero;

