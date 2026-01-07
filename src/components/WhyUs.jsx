import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import whyusRightImage from "../assets/whyusrightimage.png";
import whyusbg from "../assets/whyus.png";
import whyusimg2 from "../assets/whyusimg2.png";
import whyusimg3 from "../assets/whyusimg3.png";
import whyusimg4 from "../assets/whyusimg4.png";
import whyusimg5 from "../assets/whyusimg5.png";
import whyusimg6 from "../assets/whyusimg6.png";

const WhyUs = () => {
  // All images in an array
  const images = [
    whyusRightImage,
    whyusimg2,
    whyusimg3,
    whyusimg4,
    whyusimg5,
    whyusimg6
  ];

  // State to track current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // 6000ms = 6 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  // Function to manually change image when clicking dots
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section 
      className="relative mt-24 h-auto sm:h-[600px] py-16 px-4 sm:px-14 lg:px-24 flex flex-col sm:flex-row gap-8 justify-between items-center overflow-hidden"
    >
      {/* Background Image with Opacity */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${whyusbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.3  // Change this value: 0.1 (very light) to 1.0 (full opacity)
        }}
      ></div>
      
      {/* Optional: Extra overlay for more control */}
      <div className="absolute inset-0 bg-white/20 z-0"></div>

      {/* Left Side - Text Content */}
      <div className="relative z-10 sm:w-[50%] lg:w-[45%]">
        <h2 className="nunito text-4xl xs:text-5xl lg:text-6xl font-bold text-gray-900 mb-14">
          Why Us?
        </h2>
        <p className="nunito text-lg xs:text-xl lg:text-2xl leading-relaxed text-gray-800">
          Work Life Desks is designed around <span className="font-semibold">work-life balance</span>, offering
          value-driven coworking spaces that prioritize <span className="font-semibold">comfort, ergonomics, and
          wellness</span>. With green, stress-free interiors and features like
          sit-stand desks, we create workspaces that support both <span className="font-semibold">productivity
          and well-being</span>.
        </p>
      </div>

      {/* Right Side - Image Carousel */}
      <div className="relative z-10 sm:w-[50%] lg:w-[45%] flex flex-col justify-center items-center">
        {/* Image Container */}
        <div className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Work Life Desks - Workspace ${currentIndex + 1}`}
              className="h-full w-auto object-contain drop-shadow-2xl"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div className="flex gap-3 mt-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full cursor-pointer
                ${currentIndex === index 
                  ? 'w-10 h-3 bg-blue-600' 
                  : 'w-3 h-3 bg-gray-400 hover:bg-gray-600'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
