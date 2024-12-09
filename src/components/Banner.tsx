import React from "react";
import { HeartIcon } from "@heroicons/react/24/solid";

const Banner = () => {
  return (
    <div
      className="relative w-full h-[50vh] sm:h-[70vh] bg-center bg-cover"
      style={{
        backgroundImage: "url('/images/pandados.jpg')", // debuggeo, llega la imagen.
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
      <div className="relative z-10 h-full flex justify-between items-end px-12 sm:px-24 text-white pb-8">
        <div className="max-w-2xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
            Kung Fu Panda 4
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mt-6">
            Join Po and the Furious Five on a new epic adventure! Discover the
            power of friendship and the strength within! Get Ready to unleash
            your inner warrior!
          </p>
        </div>
        <div className="flex flex-row items-center space-x-8">
          <HeartIcon className="w-8 h-8 text-white cursor-pointer" />
          <div className="relative w-20 h-20 rounded-full border-4 border-green-400 flex items-center justify-center bg-black bg-opacity-15">
            <span className="text-white font-bold text-lg">97%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
