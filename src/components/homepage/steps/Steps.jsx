import React from "react";
import { FaUserPlus, FaShoppingBag, FaRocket } from "react-icons/fa";

const Steps = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-4">

     
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

    
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="relative bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
            
       
            <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
              01
            </span>

            <div className="w-20 h-20 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-5">
              <FaUserPlus className="text-3xl text-purple-600" />
            </div>

            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Create Account
            </h3>
            <p className="text-gray-500 text-sm">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>

         
          <div className="relative bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
            
            <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
              02
            </span>

            <div className="w-20 h-20 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-5">
              <FaShoppingBag className="text-3xl text-purple-600" />
            </div>

            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Choose Products
            </h3>
            <p className="text-gray-500 text-sm">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

         
          <div className="relative bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
            
            <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
              03
            </span>

            <div className="w-20 h-20 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-5">
              <FaRocket className="text-3xl text-purple-600" />
            </div>

            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Start Creating
            </h3>
            <p className="text-gray-500 text-sm">
              Download and start using your premium tools immediately.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Steps;