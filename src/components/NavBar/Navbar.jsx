import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cartCount }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto max-w-6xl px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/rocket.png" alt="DigiTools Logo" className="w-8 h-8" />
          <a className="text-xl font-bold text-purple-600">DigiTools</a>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a className="hover:text-purple-600 cursor-pointer font-medium">Home</a>
          <a className="hover:text-purple-600 cursor-pointer font-medium">Products</a>
          <a className="hover:text-purple-600 cursor-pointer font-medium">Pricing</a>
          <a className="hover:text-purple-600 cursor-pointer font-medium">About Us</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="indicator">
            <span className="indicator-item badge badge-sm bg-purple-600 text-white border-0">
              {cartCount}
            </span>
            <button className="btn btn-ghost btn-circle">
              <FaShoppingCart className="text-xl" />
            </button>
          </div>
          <button className="btn bg-purple-600 text-white hover:bg-purple-700 border-0 rounded-full px-6">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
