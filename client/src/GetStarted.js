import React from 'react';

const GetStarted = () => {
  return (
    <div className="bg-[#FFC63E40] flex flex-col md:flex-row justify-between p-4 md:p-8 lg:p-16">

      {/* Left Content */}
      <div className="w-full md:w-2/3 lg:w-3/4 md:p-4 lg:p-8">
        <h1 className='text-[#094B72] text-3xl font-medium'>Want to excel your career as a lawyer?</h1>
        <p className="text-md text-[#496C80] py-4 md:w-96 lg:w-full">
          We are here to help you take care of your legality with the best service, especially for you.
        </p>
      </div>

      {/* Right Content */}
      <div className="py-4 md:py-16">
        <button className="transition-transform transform hover:scale-105 duration-500 bg-[#094B72] font-medium text-white rounded-full px-6 py-2 hover:bg-blue-100 hover:text-[#094B72] hover:duration-500 hover:shadow-md focus:outline-none">
          Get Started
        </button>
      </div>

    </div>
  );
};

export default GetStarted;
