import { Link } from "react-router-dom";
const ChoiceCards = ({ img, title, text, i, to }) => {
  return (
    <div className="transition-all duration-150 ease-in bg-[#FFFBF1] hover:bg-[#FFF4D9] border-2 hover:border-[#FFC63E] w-full max-w-xs h-96 rounded-2xl hover:shadow-sm text-center p-4">
      <img className="mx-auto w-16 py-4" src={img} alt={title} />
      <h1 className="text-[#094B72] font-medium text-3xl py-4">{title}</h1>
      <p className="m-auto my-4 text-[#496C80] text-md">{text}</p>

      <Link to={to}>
        <button className="mt-1 border-2 border-[#094B72] hover:bg-[#094B72] hover:text-white  py-2 px-12 rounded-full text-[#094B72] font-medium transition-all">
          Select
        </button>
      </Link>
    </div>
  );
};

export default ChoiceCards;
