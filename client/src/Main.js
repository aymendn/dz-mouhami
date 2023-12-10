import Marteau from './Assets/Frame 30.png'
import places from './Assets/Group 497.png'
import categories from './Assets/Main Categories.png'
import location from './Assets/location_on_FILL0_wght400_GRAD0_opsz24 1.png'
import search from './Assets/Vector (11).png'
const Main = () => {
    return ( <div className='mx-auto text-center'>
    <h1 className="flex text-center items-center mx-64 py-8 text-5xl text-[#0F3146] font-semibold ">
      Your Gateway to Expert Legal Assistance.
      <img src={Marteau} className=" w-8" alt="Legal Hammer" />
    </h1>
    
    <p className= 'text-xl text-center text-[#708FA2] pb-8 '>
      We are here to help you take care of your legality with the best service, especially for you.
    </p>
    <div className="flex items-center justify-center">
      {/* First Search Bar */}
      <div className=" flex items-center border-1 shadow-sm rounded-2xl overflow-hidden mr-4 bg-slate-50">
          <img src={search} className='px-1' ></img>
        <input
          type="text"
          className="p-2 bg-slate-50 w-64 outline-none"
          placeholder="search by categorie"
        ></input>
      </div>

      {/* Second Search Bar */}
      <div className=" flex items-center border-1 shadow-sm rounded-2xl overflow-hidden mr-4 bg-slate-50">
          <img src={location} className='px-1' ></img>
        <input
          type="text"
          className="p-2 bg-slate-50 w-64 outline-none"
          placeholder="location"
        ></input>
      </div>

      {/* Get Started Button */}
      <button className="bg-[#094B72] font-normal text-white rounded-full px-4 py-2 hover:bg-blue-100 hover:duration-500 hover:shadow-md focus:outline-none">
          Get Started
        </button>
    </div>
    

    <div className='flex justify-evenly mr-32 py-4'>
        
        <div>
        <p className="flex items-center text-sm mb-2 text-[#708FA2] ">
        <img src={places} className="mr-2" />
        </p>
        <div className='flex justify-between gap-2 '>
      <div className="text-[#496C80] border-2 border-yellow-400 rounded-3xl  w-24 text-xs p-1 text-center "><p className='font-semibold'> places</p></div>
      <div className="text-[#496C80] border-2 border-yellow-400 rounded-3xl  w-24 text-xs p-1 text-center "><p className='font-semibold'> places</p></div>
      </div>
        </div>
        <div>
        <p className="flex items-center text-sm mb-2 text-[#708FA2] ">
        <img src={categories} className="mr-2" />
        </p>
        <div className='flex jutsify-between gap-2'>
      <div className="text-[#496C80] border-2 border-yellow-400 rounded-3xl  w-24 text-xs p-1 text-center "><p className='font-semibold'> categories</p></div>
      <div className="text-[#496C80] border-2 border-yellow-400 rounded-3xl  w-24 text-xs p-1 text-center "><p className='font-semibold'> categories</p></div>
      </div>
        </div>
    </div>
  </div>
   );
}
 
export default Main;