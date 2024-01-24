import { Link } from "react-router-dom";
const ChoiceCards = (props) => {
    return (  <div className="transform hover:scale-105 transition duration-300 ease-in p-8 bg-[#FFFBF1] hover:bg-[#FFF4D9] hover:border-[1.5px] hover:border-[#FFC63E] w-full sm:w-64 h-96 rounded-2xl hover:shadow-sm hover:duration-500 text-center p-4">
    <img className="mx-auto w-16 py-4" src={props.img} alt={props.title} />
    <h1 className="text-[#094B72] font-medium text-3xl py-4">
     {props.title}
    </h1>
    <p className="m-auto my-4 text-[#496C80] text-md">
      {props.text}
    </p>
    {console.log(props.i)}
    {props.i === 1 ? (
        <Link to="/lawyer-registrationStep1">
          <button className="mt-1 border-2 border-[#094B72] hover:bg-[#094B72] hover:text-white hover:duration-500 py-2 px-12 rounded-2xl text-[#094B72] font-medium text-sm">
            Select
          </button>
        </Link>
      ) : (
        <Link to="/user-registration">
          <button className="mt-1 border-2 border-[#094B72] hover:bg-[#094B72] hover:text-white hover:duration-500 py-2 px-12 rounded-2xl text-[#094B72] font-medium text-sm">
            Select
          </button>
        </Link>
      )}
    
  </div> );
}
 
export default ChoiceCards;