import React from "react";
import JoinUsers from "./JoinUsers";

const GetStarted = () => {
  return (
    <div className="bg-[#FFC63E40] ">
      <div className="flex flex-col md:flex-row justify-between p-4 md:p-8 lg:p-16 width70">
        {/* Left Content */}
        <div className="w-full md:w-2/3 lg:w-3/4 md:p-4 lg:p-8 max-w-xl">
          <h1 className="font-['Lexend_Exa']  -tracking-[0.24rem] text-[#094B72] text-4xl font-semibold">
            Want to excel your career as a lawyer?
          </h1>
          <p className="text-md text-[#496C80] py-4 md:w-96 lg:w-full">
            We are here to help you take care of your legality with the best
            service, especially for you.
          </p>
        </div>

        {/* Right Content */}
        <div className="py-4 md:py-16">
          <button className="transition duration-100 bg-[#094B72] font-medium text-white rounded-full px-8 py-3 mb-2 hover:opacity-90">
            Get Started
          </button>
          <JoinUsers />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
