import Navbar from "./NavbarNoAction";
import Footer from "./Footer";
import validation from "./Assets/person_search (1).png"
import validation1 from "./Assets/person_check (1).png"
const SucceessUser = () => {
    return ( <div>
        <Navbar></Navbar>
       
      <div className="mt-8 py-4 mx-auto w-1/2 ">
      <img src={validation1} alt="validation" className="w-16 mx-auto "></img>
        <h1 className="p-4 mx-16  text-center text-[#0F3146] text-4xl font-semibold">
        Account Created Successfully!
        </h1>
        <p className="p-4 text-[#496C80] text-md font-medium text-center ">
        Thank you for joining DZ-Mouhami! Your account has been successfully created. You are now part of our community dedicated to connecting users with trusted lawyers in Algeria.
        </p>
      </div>
      <div className="flex justify-center m-4 mb-16">
          <button className="transition-transform transform hover:scale-105 duration-500  border-1 bg-[#094B72] py-3 px-8 rounded-3xl text-white font-normal text-md flex gap-2">
            <img src={validation} alt="Validation" />
            Explore Lawyers
          </button>
        </div>
      <Footer></Footer>

    </div> );
}
 
export default SucceessUser;