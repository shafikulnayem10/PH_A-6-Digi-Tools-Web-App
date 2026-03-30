import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="w-full bg-white py-4 px-6 md:px-12 border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
      
        <div className="flex items-center">
          <span className="text-2xl font-bold text-[#7C3AED] tracking-tight">
            DigiTools
          </span>
        </div>

       
 <div className="hidden lg:flex items-center gap-8">
  <a
    href="#products"
    className="text-gray-600 hover:text-[#7C3AED] transition-colors text-sm font-medium"
  >
    Products
  </a>

  <a
    href="#features"
    className="text-gray-600 hover:text-[#7C3AED] transition-colors text-sm font-medium"
  >
    Features
  </a>

  <a
    href="#pricing"
    className="text-gray-600 hover:text-[#7C3AED] transition-colors text-sm font-medium"
  >
    Pricing
  </a>

  <a
    href="#testimonials"
    className="text-gray-600 hover:text-[#7C3AED] transition-colors text-sm font-medium"
  >
    Testimonials
  </a>

  <a
    href="#faq"
    className="text-gray-600 hover:text-[#7C3AED] transition-colors text-sm font-medium"
  >
    FAQ
  </a>
</div>

       
        <div className="flex items-center gap-6">
        
          <button className="relative text-gray-700 hover:text-[#7C3AED] transition-colors">
            <FaShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

         
          <a href="/login" className="text-gray-700 hover:text-[#7C3AED] text-sm font-medium">
            Login
          </a>

          <button className="bg-[#7C3AED] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#6D28D9] transition-all shadow-md">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
