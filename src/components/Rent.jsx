import React, { useState } from "react";
import rentMaskImage from "../assets/rentSection.png"; // THIS IMAGE ONLY

const options = [
  "Managed Office",
  "Managed Office + Warehouse",
  "Managed Cabins",
  "Built to Brand Guidance",
  "Daily Conference Room",
  "Podcast and Shoot Studio",
];

const Rent = () => {
  const [selected, setSelected] = useState([]);

  const toggleOption = (item) => {
    setSelected((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  return (
    <section className="relative mt-32 overflow-hidden bg-[#F0F8F7]">

      {/* ================= TOP CONTENT ================= */}
      <div className="relative z-10 pt-20 pb-64 text-center">
        <div className="max-w-4xl mx-auto px-4">

          <h2 className="nunito font-bold text-[60px]">
            Rent an Office
          </h2>

          <p className="nunito mt-4 text-[25px] max-w-3xl mx-auto text-gray-600">
            Whether you're a{" "}
            <span className="bg-blue-100 text-blue-700 px-2 rounded">
              growing startup
            </span>{" "}
            or an{" "}
            <span className="bg-blue-100 text-blue-700 px-2 rounded">
              established enterprise
            </span>
            , we provide spaces that scale with your business.
          </p>

          {/* CARDS */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-7xl mx-auto mb-[-100px]">
            {options.map((item) => {
              const active = selected.includes(item);

              return (
                <div
                  key={item}
                  onClick={() => toggleOption(item)}
                  className={`relative cursor-pointer rounded-3xl  px-8 py-20  text-left transition-all
                    ${active
                      ? "bg-blue-50 border-blue-500"
                      : "bg-white border-blue-300"
                    }
                    border hover:shadow-lg`}
                >
                  <span
                    className={`absolute top-4 right-4 h-5 w-5 rounded-full border
                      ${active
                        ? "bg-blue-600 border-blue-600"
                        : "border-blue-400"
                      }`}
                  />

                  <p className="nunito font-semibold text-[23px]">
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= MASKED IMAGE BACKGROUND ================= */}
      <div
        className="absolute bottom-10 left-0 w-full h-[679px] opacity-60 object-scale-down "
        style={{
          backgroundImage: `url(${rentMaskImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          WebkitMaskImage: `url(${rentMaskImage})`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "cover",
          WebkitMaskPosition: "top",
          maskImage: `url(${rentMaskImage})`,
          maskRepeat: "no-repeat",
          maskSize: "cover",
          maskPosition: "top",
        }}
      />

      {/* ================= BLUE TINT ================= */}
      <div className="absolute bottom-0 left-0 w-full h-[520px]" />

      {/* ================= FORM ================= */}
      <div className="relative z-20 h-[520px] flex items-start justify-center text-white">
        <div className="w-full max-w-xl px-4 text-center">

          <h3 className="nunito font-bold text-[35px] text-black">
            Tell Us What You Need
          </h3>

          <p className="text-xl  text-neutral-800 mt-1">
            Choose your requirements and we’ll take it from there.
          </p>

          <form className="mt-8 space-y-4">
            <input className=" w-full
    px-4 py-3
    rounded-md
    bg-white/95
    text-black
    placeholder-gray-500
    border border-gray-300
    shadow-sm
    focus:outline-none
    focus:border-blue-500
    focus:ring-2
    focus:ring-blue-500/40
    focus:shadow-md
    transition-all duration-200" placeholder="Full Name" />
            <input className=" w-full
    px-4 py-3
    rounded-md
    bg-white/95
    text-black
    placeholder-gray-500
    border border-gray-300
    shadow-sm
    focus:outline-none
    focus:border-blue-500
    focus:ring-2
    focus:ring-blue-500/40
    focus:shadow-md
    transition-all duration-200" placeholder="Phone Number" />
            <input className=" w-full
    px-4 py-3
    rounded-md
    bg-white/95
    text-black
    placeholder-gray-500
    border border-gray-300
    shadow-sm
    focus:outline-none
    focus:border-blue-500
    focus:ring-2
    focus:ring-blue-500/40
    focus:shadow-md
    transition-all duration-200" placeholder="Organization Name" />
            <input className=" w-full
    px-4 py-3
    rounded-md
    bg-white/95
    text-black
    placeholder-gray-500
    border border-gray-300
    shadow-sm
    focus:outline-none
    focus:border-blue-500
    focus:ring-2
    focus:ring-blue-500/40
    focus:shadow-md

    transition-all duration-200" placeholder="Number of People" />
            <button className="mt-4 px-12 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded">
              Submit
            </button>
          </form>

        </div>
      </div>

    </section>
  );
};

export default Rent;
