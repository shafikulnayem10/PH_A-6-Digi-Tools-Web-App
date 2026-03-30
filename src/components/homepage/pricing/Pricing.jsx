import React from "react";
import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">

     
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 text-sm">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        
          <div className="bg-white border border-gray-100 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="font-bold text-xl text-black">Starter</h3>
            <p className="text-sm text-gray-500 mt-1">
              Perfect for individuals just getting started
            </p>

            <div className="flex items-end gap-1 mt-4">
              <span className="text-4xl font-bold text-purple-600">$0</span>
              <span className="text-sm text-gray-400 mb-1">/month</span>
            </div>

            <div className="border-t my-5"></div>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <FaCheck className="text-purple-500" />
                <span className="text-gray-600">Access to 3 tools</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-purple-500" />
                <span className="text-gray-600">Basic templates included</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-purple-500" />
                <span className="text-gray-600">5GB cloud storage</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-purple-500" />
                <span className="text-gray-600">Standard email support</span>
              </li>
            </ul>

            <button className="mt-6 w-full bg-purple-600 text-white rounded-full py-2 hover:bg-purple-700 transition">
              Get Started Free
            </button>
          </div>

          <div className="bg-purple-600 text-white rounded-2xl shadow-xl p-6 scale-105 relative">
            
          
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-100 text-orange-700 text-xs px-3 py-1 rounded-full font-semibold shadow">
              Most Popular
            </span>

            <h3 className="font-bold text-xl">Pro</h3>
            <p className="text-sm text-purple-200 mt-1">
              Ideal for growing creators and freelancers
            </p>

            <div className="flex items-end gap-1 mt-4">
              <span className="text-4xl font-bold">$29</span>
              <span className="text-sm text-purple-200 mb-1">/month</span>
            </div>

            <div className="border-t border-purple-400 my-5"></div>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <FaCheck />
                <span className="text-purple-100">Unlimited tool access</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck />
                <span className="text-purple-100">Premium templates</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck />
                <span className="text-purple-100">50GB cloud storage</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck />
                <span className="text-purple-100">Priority customer support</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck />
                <span className="text-purple-100">Advanced analytics dashboard</span>
              </li>
            </ul>

            <button className="mt-6 w-full bg-white text-purple-600 rounded-full py-2 hover:bg-purple-50 transition">
              Start Pro Plan
            </button>
          </div>

       
          <div className="bg-white border border-gray-100 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="font-bold text-xl text-black">Enterprise</h3>
            <p className="text-sm text-gray-500 mt-1">
              For teams and businesses needing more power
            </p>

            <div className="flex items-end gap-1 mt-4">
              <span className="text-4xl font-bold text-purple-600">$99</span>
              <span className="text-sm text-gray-400 mb-1">/month</span>
            </div>

            <div className="border-t my-5"></div>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <FaCheck className="text-purple-500" />
                <span className="text-gray-600">All Pro features included</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-purple-500" />
                <span className="text-gray-600">Team collaboration tools</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-purple-500" />
                <span className="text-gray-600">Unlimited cloud storage</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-purple-500" />
                <span className="text-gray-600">Dedicated account manager</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-purple-500" />
                <span className="text-gray-600">Custom integrations</span>
              </li>
            </ul>

            <button className="mt-6 w-full bg-purple-600 text-white rounded-full py-2 hover:bg-purple-700 transition">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pricing;
