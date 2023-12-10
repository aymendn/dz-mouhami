import CardLawyer from "./CardLawyer";

const TopRated = () => {
    return ( <div>
        <div className=" flex justify-between py-8 px-24">
        <h1 className='text-[#094B72] text-4xl font-medium'>Top Rated Lawyers</h1>
        <button className="bg-[#094E771A] font-medium text-[#094B72E5] rounded-full px-6 py-2 hover:bg-blue-100 hover:duration-500 hover:shadow-md focus:outline-none">
          See All
        </button>
        </div>

        
        <div className=" px-24 pb-8 grid grid-cols-2  sm:grid-cols"> 
        <CardLawyer></CardLawyer>
        <CardLawyer></CardLawyer>
        <CardLawyer></CardLawyer>
        <CardLawyer></CardLawyer>
        </div>

    </div> );
}
 
export default TopRated;