import React from "react";

const CTA = () => {
  return (
    <div className="bg-purple-600 py-16">
      <div className="container mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-purple-200 mb-8 max-w-2xl mx-auto">
          Join thousands of professionals who are already using Digitools to work smarter.
          <br />
          Start your free trial today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn bg-white text-purple-600 hover:bg-purple-50 border-0 rounded-full px-8">
           Explore Products
          </button>
          <button className="btn btn-outline text-white border-white hover:bg-purple-500 hover:border-white rounded-full px-8">
            View Pricing
          </button>
        </div>
        <p className="text-purple-300 text-sm mt-6">
         14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default CTA;