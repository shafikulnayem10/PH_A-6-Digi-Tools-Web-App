import React from "react";
import { FaPlay } from "react-icons/fa";
import { BsRocketTakeoff } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-white py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left  */}
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block bg-purple-100 text-purple-600 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              <img src="/group-5.png" alt="Round Icon" className="w-4 h-4 inline-block mr-2" />
              New: AI-Powered Tools Available
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Supercharge Your{" "}
              <span className="text-purple-600">Digital Workflow</span>
            </h1>
            <p className="text-gray-500 text-lg mb-8 max-w-md">
              Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.

            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="btn bg-purple-600 text-white hover:bg-purple-700 border-0 rounded-full px-8">
                Explore Products
              </button>
              <button className="btn btn-outline border-purple-600 text-purple-600 hover:bg-purple-50 hover:border-purple-600 rounded-full px-8 gap-2">
               <img src="/Play.png" alt="Play Icon" className="w-4 h-4" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-purple-100 rounded-full absolute -z-10 top-4 left-4"></div>
              <img
                src="/banner.png"
                alt="Digital Workflow"
                className="w-72 md:w-96 relative z-10 drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
