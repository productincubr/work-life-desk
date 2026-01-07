import React from "react";

const Rent = () => {
  return (
    <section className="mt-24 sm:mt-36 mx-2 sm:mx-12 lg:mx-48 flex flex-col justify-center items-center">
      <p className="nunito text-[30px] lg:mb-2 font-bold sm:text-[30px] lg:text-[40px] text-center">
        Rent an Office
      </p>
      <p className="nunito text-[14px] my-8 lg:mb-16 sm:text-[22px] lg:text-[20px] w-full md:w-[70%] text-center">
        Whether you’re a growing startup or an established enterprise, we
        provide spaces that scale with your business.
      </p>
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4">
        <div className="bg-[#F6F3EA] hover:shadow-2xl p-4 rounded-2xl border-2 border-black h-[150px] w-[250px]">
          <input
            type="checkbox"
            value="Managed Office"
            className="h-4 w-4 relative left-48"
          />
          <p className="nunito font-semibold text-lg mt-6">Managed Office</p>
        </div>
        <div className="bg-[#F6F3EA] hover:shadow-2xl p-4 rounded-2xl border-2 border-black h-[150px] w-[250px]">
          <input
            type="checkbox"
            value="Managed Office"
            className="h-4 w-4 relative left-48"
          />
          <p className="nunito font-semibold text-lg mt-4">
            Managed Office + Warehouse
          </p>
        </div>
        <div className="bg-[#F6F3EA] hover:shadow-2xl p-4 rounded-2xl border-2 border-black h-[150px] w-[250px]">
          <input
            type="checkbox"
            value="Managed Office"
            className="h-4 w-4 relative left-48"
          />
          <p className="nunito font-semibold text-lg mt-6">Managed Cabins</p>
        </div>
        <div className="bg-[#F6F3EA] hover:shadow-2xl p-4 rounded-2xl border-2 border-black h-[150px] w-[250px]">
          <input
            type="checkbox"
            value="Managed Office"
            className="h-4 w-4 relative left-48"
          />
          <p className="nunito font-semibold text-lg mt-6">
            Built to Brand Guidance
          </p>
        </div>
        <div className="bg-[#F6F3EA] hover:shadow-2xl p-4 rounded-2xl border-2 border-black h-[150px] w-[250px]">
          <input
            type="checkbox"
            value="Managed Office"
            className="h-4 w-4 relative left-48"
          />
          <p className="nunito font-semibold text-lg mt-6">
            Daily Conference Room
          </p>
        </div>
        <div className="bg-[#F6F3EA] hover:shadow-2xl p-4 rounded-2xl border-2 border-black h-[150px] w-[250px]">
          <input
            type="checkbox"
            value="Managed Office"
            className="h-4 w-4 relative left-48"
          />
          <p className="nunito font-semibold text-lg mt-4">
            Podcast and Shoot Studio
          </p>
        </div>
      </div>
    </section>
  );
};

export default Rent;
