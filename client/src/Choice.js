import Footer from "./Footer";
import  Navbar from './NavbarNoAction'
import balance from './Assets/balance.png';
import search from './Assets/person_search.png'
const Choice = () => {
    return ( <div>
        <Navbar></Navbar>
        <div className=" mt-8 text-center"> 
        <h1 className='text-[#0F3146] text-5xl font-semibold'>Choose your role</h1>
        <p className='p-4  text-[#496C80] text-md'>Let's tailor your experience.</p>
        
        </div>

        <div className="flex items-center justify-center py-12 gap-12">
        <div className="p-8 bg-[#FFFBF1] hover:bg-[#FFF4D9] hover:border-[1.5px] hover:border-[#FFC63E] w-64 h-96 rounded-2xl  hover:shadow-sm  hover:duration-500 text-center p-4 ">
      <img className="mx-auto w-16 py-4"
          src={balance} 
        ></img>
        <h1 className="text-[#094B72] font-medium text-3xl py-4">I am a Lawyer</h1>
        <p className="py-4 text-[#496C80] text-md">Join our legal community to showcase your expertise and connect with clients.</p>
        <button className=" my-2 border-2 border-[#094B72] hover:bg-[#094B72] hover:text-white hover:duration-500 py-2 px-12 rounded-2xl text-[#094B72] font-medium text-sm  ">Select</button>
    </div> 

    <div className="p-8 bg-[#FFFBF1] hover:bg-[#FFF4D9] hover:border-[1.5px] hover:border-[#FFC63E] w-64 h-96 rounded-2xl  hover:shadow-sm  hover:duration-500 text-center p-4 ">
      <img className="mx-auto w-16 py-4"
          src={search}
        ></img>
        <h1 className="text-[#094B72] font-medium text-3xl py-2">Seeking Legal Assistance</h1>
        <p className="py-4 text-[#496C80] text-md">Find trusted lawyers in Algeria. Let us guide you.</p>
        <button className=" my-2 border-2 border-[#094B72] hover:bg-[#094B72] hover:text-white hover:duration-500 py-2 px-12 rounded-2xl text-[#094B72] font-medium text-sm  ">Select</button>
    </div> 
        </div>

        <div className="mb-12 text-center">

        <button className="  border-1 bg-[#094B72] py-2 px-12 rounded-3xl text-white font-normal text-sm  ">Continue</button>
        
        <p className='p-2 text-[#496C80] text-md'>By continuing, you agree to our Terms of Service and Privacy Policy.</p>
        </div>
        <Footer></Footer>
    </div> );
}
 
export default Choice;