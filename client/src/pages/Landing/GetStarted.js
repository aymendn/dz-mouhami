import React from "react";
import JoinUsers from "./JoinUsers";

const GetStarted = () => {
  return (
    <div className="bg-[#FFC63E40] ">
      <div className="flex flex-col md:flex-row justify-between p-6 md:p-8 lg:p-16 width70">
        {/* Left Content */}
        <div className="w-full md:w-2/3 lg:w-3/4 md:p-4 lg:p-8 max-w-xl">
          <h1 className="font-['Lexend_Exa']   text-[#094B72]  font-semibold text-2xl md:text-3xl lg:text-4xl -tracking-[0.20rem] md:-tracking-[0.22rem] lg:-tracking-[0.24rem]">
            Want to excel your career as a lawyer?
          </h1>
          <p className="text-md text-[#496C80] py-4 md:w-96 lg:w-full">
            We are here to help you take care of your legality with the best
            service, especially for you.
          </p>
        </div>

        {/* Right Content */}
        <div className="py-4 md:py-16 flex flex-col justify-between items-start">
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
