import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-[#0B1220] text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-8">
      
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
        
          <div className="md:col-span-4">
            <h2 className="text-white text-3xl font-bold mb-6">
              DigiTools
            </h2>
            <p className="text-md leading-relaxed max-w-xs">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>

         
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4 text-md">
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Templates</li>
              <li className="hover:text-white cursor-pointer">Integrations</li>
            </ul>
          </div>

      
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-md">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Press</li>
            </ul>
          </div>

       
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-4 text-md">
              <li className="hover:text-white cursor-pointer">Documentation</li>
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Community</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

       
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-6">Social Links</h4>
            <div className="flex gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-gray-200 transition-colors cursor-pointer">
                <FaInstagram className="text-black text-lg" />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-gray-200 transition-colors cursor-pointer">
                <FaFacebookF className="text-black text-lg" />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-gray-200 transition-colors cursor-pointer">
                <FaXTwitter className="text-black text-lg" />
              </div>
            </div>
          </div>
        </div>

    
<div className="border-t border-gray-800/50 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center text-[13px] text-gray-500">
  

  <div>
    <p>&copy; 2026 Digitools. All rights reserved.</p>
  </div>

 
  <div className="flex gap-8 mt-4 md:mt-0">
    <span className="hover:text-white cursor-pointer transition-colors duration-200">
      Privacy Policy
    </span>
    <span className="hover:text-white cursor-pointer transition-colors duration-200">
      Terms of Service
    </span>
    <span className="hover:text-white cursor-pointer transition-colors duration-200">
      Cookies
    </span>
  </div>

</div>
      </div>
    </footer>
  );
};

export default Footer;