import info from './Assets/info2.png'
import contact from './Assets/alternate_email2.png'
import Logo from './Assets/Group 505.png'
import pp from './Assets/ppp.png'
const NavbarProfil = () => {
    return (  <div className="bg-[#094B72]">
<nav className=" font-normal px-24 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img
          src={Logo}
          alt="Mouhami-dz"
          className="text-white text-lg font-bold"
        ></img>

        {/* Navigation Links */}
        <div className="space-x-4 flex justify-end gap-12 text-sm font-medium">
          <a href="#" className=" flex items-center gap-1 text-white">
            <img src={info}></img>
            About
          </a>
          <a href="#" className=" flex items-center gap-1 text-white">
            <img src={contact}></img>
            Contact
          </a>
         <img src={pp} className='w-8 h-8'></img>
        </div>

       
      
      </div>
    </nav>
    </div>);
}
 
export default NavbarProfil;