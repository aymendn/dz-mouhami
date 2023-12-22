import Lawyer from './Assets/image 4.png'
import location from './Assets/location_on_FILL0_wght400_GRAD0_opsz24 1.png'
const CardLawyer = () => {
    return (<div className="transform hover:scale-110 transition duration-300 ease-in-out w-[506px] h-[234px] bg-white p-4 rounded-lg shadow-md p-4 m-4 flex">
    {/* Image on the left */}
    <img src={Lawyer}  className="w-64 h-[200px] rounded-md mr-4" />

    <div className="rounded-lg overflow-hidden">
      {/* Name */}
      <h2 className="text-xl text-[#094B72] font-medium mb-2">Mohamed Amine</h2>
      
      {/* Localization */}
      <p className="flex items-center font-medium mb-2 text-[#094B72] ">
  <img src={location} alt="Location" className="mr-2 " />
  Algiers, Algeria
</p>
      {/* Categories */}
      <div className='flex jutsify-between gap-2'>
      <div className="text-[#094B72] border-2 border-yellow-400 rounded-3xl  w-24 p-1 text-center "><p className='text-sm font-semibold'> categories</p></div>
      <div className="text-[#094B72] border-2 border-yellow-400 rounded-3xl  w-24 p-1 text-center "><p className='text-sm font-semibold'> categories</p></div>
      </div>
      {/* Small text */}
    <p className="text-[#708FA2] text-sm mt-2">What is important for you in the UI card design? I’d like to share with you the best practices that
    What </p>
    </div>

    
  </div>
);
};

 
export default CardLawyer;