import React from "react";

const Stats = () => {
  return (
    <div className="bg-purple-600 py-8">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row justify-center items-center divide-y md:divide-y-0 md:divide-x divide-purple-400 gap-4 md:gap-0">
          <div className="text-center text-white px-12 py-4">
            <h2 className="text-3xl font-bold">50K+</h2>
            <p className="text-purple-200 text-sm mt-1">Active Users</p>
          </div>
          <div className="text-center text-white px-12 py-4">
            <h2 className="text-3xl font-bold">200+</h2>
            <p className="text-purple-200 text-sm mt-1">Premium Tools</p>
          </div>
          <div className="text-center text-white px-12 py-4">
            <h2 className="text-3xl font-bold">4.9</h2>
            <p className="text-purple-200 text-sm mt-1"> Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;