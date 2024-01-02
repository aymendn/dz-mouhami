import Marteau from './Assets/Frame 30.png';
import places from './Assets/Group 497.png';
import categories from './Assets/Main Categories.png';
import location from './Assets/location.png';
import search from './Assets/Vector (11).png';

const Main = () => {
  return (
    <div className='mx-auto text-center'>

      {/* Heading */}
      <h1 className="flex text-center items-center mx-4 sm:mx-16 md:mx-32 lg:mx-64 py-8 text-5xl text-[#0F3146] font-semibold">
        Your Gateway to Expert Legal Assistance.
        <img src={Marteau} className="w-8" alt="Legal Hammer" />
      </h1>

      {/* Subheading */}
      <p className='text-xl text-center text-[#708FA2] pb-8'>
        We are here to help you take care of your legality with the best service, especially for you.
      </p>

      {/* Search Bar Section */}
      <div className="flex flex-col items-center sm:flex-row justify-center">
        
        {/* First Search Bar */}
        <div className="mb-4 sm:mb-0 flex items-center border-1 shadow-sm rounded-2xl overflow-hidden mr-0 sm:mr-4 bg-slate-50">
          <img src={search} className='px-1' alt="Search Icon" />
          <input
            name="category"
            type="text"
            className="p-2 bg-slate-50 w-full sm:w-64 outline-none"
            placeholder="Search by category"
          ></input>
        </div>

        {/* Second Search Bar */}
        <div className="mb-4 sm:mb-0 flex items-center border-1 shadow-sm rounded-2xl overflow-hidden mr-0 sm:mr-4 bg-slate-50">
          <img src={location} className='px-1' alt="Location Icon" />
          <input
            name="location"
            type="text"
            className="p-2 bg-slate-50 w-full sm:w-64 outline-none"
            placeholder="Location"
          ></input>
        </div>

        {/* Get Started Button */}
        <button className="transition-transform transform hover:scale-105 duration-500 bg-[#094B72] font-normal text-white rounded-full px-6 py-2 hover:bg-blue-100 hover:text-[#094B72] hover:duration-500 hover:shadow-md focus:outline-none">
          Get Started
        </button>
      </div>

      {/* Categories Section */}
      <div className='flex flex-col sm:flex-row justify-evenly sm:mr-32 py-4'>
        
        <div className="mb-4 sm:mb-0">
          <p className="flex items-center text-sm mb-2 text-[#708FA2]">
            <img src={places} className="mr-2" alt="Places Icon" />
          </p>
          <div className='flex justify-between gap-2'>
            <div className="text-[#496C80] border-2 border-yellow-400 rounded-3xl w-24 sm:w-32 text-xs p-1 text-center">
              <p className='font-semibold'>Places</p>
            </div>
            <div className="text-[#496C80] border-2 border-yellow-400 rounded-3xl w-24 sm:w-32 text-xs p-1 text-center">
              <p className='font-semibold'>Places</p>
            </div>
          </div>
        </div>

        <div>
          <p className="flex items-center text-sm mb-2 text-[#708FA2]">
            <img src={categories} className="mr-2" alt="Categories Icon" />
          </p>
          <div className='flex justify-between gap-2'>
            <div className="text-[#496C80] border-2 border-yellow-400 rounded-3xl w-24 sm:w-32 text-xs p-1 text-center">
              <p className='font-semibold'>Categories</p>
            </div>
            <div className="text-[#496C80] border-2 border-yellow-400 rounded-3xl w-24 sm:w-32 text-xs p-1 text-center">
              <p className='font-semibold'>Categories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
