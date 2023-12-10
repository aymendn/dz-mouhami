import Navbar from "./Navbar";
import Footer from "./Footer";
import validation1 from "./Assets/hourglass.png"
import validation from "./Assets/home.png"

const SuccessLawyer = () => {
    return ( <div>
        <Navbar></Navbar>
      <div className="mt-8 py-4 mx-auto w-1/2 ">
      <img src={validation1} alt="validation" className="w-16 mx-auto "></img>
        <h1 className="p-4 mx-16  text-center text-[#0F3146] text-4xl font-semibold">
        Account Pending Approval!
        </h1>
        <p className="p-4 text-[#496C80] text-md font-medium text-center ">
        Thank you for registering with DZ-Mouhami! We're currently reviewing your account information to ensure the highest quality of legal professionals on our platform. Your account is currently pending approval.</p>
      </div>
      <div className="flex justify-center  mb-16">
          <button className= "border-1 bg-[#094B72] py-3 px-6 rounded-3xl text-white font-normal text-md flex gap-2">
            <img src={validation} alt="Validation" />
             Home Page
          </button>
        </div>
      <Footer></Footer>

    </div> );
}
 
export default SuccessLawyer;