import React from "react";

const TellUs = () => {
  return (
    <div className="bg-[#ebebeb] py-20 px-2 mt-20 mx-4 lg:mx-0 flex flex-col justify-center items-center">
      <p className="nunino text-2xl xs:text-3xl font-semibold">
        Tell Us What You Need
      </p>
      <p className="my-4 text-sm xs:text-lg sm:text-xl text-center">
        Choose your requirements and we’ll take it from there.
      </p>
      <div className="mx-4 flex flex-col justify-center items-center">
        <input
          type="text"
          placeholder="Full name"
          className="border-1 border-gray-400 hover:shadow-lg rounded-md py-2 px-6 bg-[#e0dede] mt-4 sm:w-[550px]"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="border-1 border-gray-400 hover:shadow-lg rounded-md py-2 px-6 bg-[#e0dede] mt-4 sm:w-[550px]"
        />
        <input
          type="text"
          placeholder="Organization name"
          className="border-1 border-gray-400 hover:shadow-lg rounded-md py-2 px-6 bg-[#e0dede] mt-4 sm:w-[550px]"
        />
        <input
          type="text"
          placeholder="Number of People"
          className="border-1 border-gray-400 hover:shadow-lg rounded-md py-2 px-6 bg-[#e0dede] mt-4 sm:w-[550px]"
        />
      </div>
    </div>
  );
};

export default TellUs;
