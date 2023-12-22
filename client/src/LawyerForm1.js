import Footer from "./Footer";
import Navbar from "./NavbarNoAction";

import validation from "./Assets/person_check.png"
const LawyerForm1 = () => {
    return ( <div>
        <Navbar></Navbar>
        <div className="flex justify-center gap-2">
          <button className="w-32  py-3 text-[#094B72] text-normal font-medium  rounded-full border-2 border-[#094B72] hover:bg-[#FFC12CAD] hover:border-[#FFC12CAD] duration-500">
           <p className="font-medium text-xs">First step</p>
           <p className="font-normal text-sm">Fill information form</p>
          </button>
          
          <p className="font-medium text-2xl text-[#094B72] mx-2 my-8">►</p>

          <button className="w-32  py-3 text-[#094B72] text-normal font-medium  rounded-full border-2 border-[#094B72] bg-[#FFC12CAD] border-[#FFC12CAD] hover:duration-500">
           <p className="font-medium text-xs">Second step</p>
           <p className="font-normal text-sm">Upload files</p>
          </button>
        </div>
  <div className="mt-8  text-center ">
          <h1 className="text-[#0F3146] text-5xl font-semibold">
           Submit Essentials Documents
          </h1>
          <p className="p-4 text-[#496C80] text-md text-center ">
          Upload required documents to showcase your legal expertise and foster trust with potential clients on DZ-Mouhami.
          </p>
        </div>

        <form class="my-8 mx-64 flex items-center space-x-6">
        <label
                htmlFor="Lawfirm"
                className="block "
              >
                <h1 className="text-[#15394E] text-lg font-medium">Professional License</h1>
                <p className="text-sm font-normal text-[#103F5BE5]">Demonstrate your official authorization to practice law.</p>
         </label>
         <label class="block">
        
        <input type="file" className="block text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-xl file:w-full  file:h-[200px] file:border-0
        file:text-sm file:font-semibold file:border-2 
        file:bg-slate-50 file:text-[#103F5BE5]
        hover:file:bg-slate-100
        "/>
    </label>
</form>
<form class="my-8 mx-64 flex items-center space-x-6">
        <label
                htmlFor="Lawfirm"
                className="block "
              >
                <h1 className="text-[#15394E] text-lg font-medium">Photo Identification</h1>
                <p className="text-sm font-normal text-[#103F5BE5]">Provide a clear photo ID to build transparency  and surely<br></br>trust with potential clients.</p>
         </label>
         <label class="block">
        
        <input type="file" className="block text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-xl file:w-full  file:h-[200px] file:border-0
        file:text-sm file:font-semibold file:border-2 
        file:bg-slate-50 file:text-[#103F5BE5]
        hover:file:bg-slate-100
        "/>
    </label>
</form>
<div className="flex justify-end m-4">
            <button className="transition-transform transform hover:scale-105 duration-500   mx-4 border-1 bg-[#094B72] py-3 px-8 rounded-3xl text-white font-normal text-md flex gap-2">
              <img src={validation} alt="Validation" />
              Continue 
            </button>
          </div>

<Footer></Footer>
    </div> );
}
 
export default LawyerForm1;

