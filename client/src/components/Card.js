const Card = (props) => {
  return (
    <div className="transform hover:scale-110 transition duration-300 ease-in-out bg-white w-64 h-64 rounded-2xl  hover:shadow-sm  hover:duration-500 text-center p-4 ">
      <img
        className="mx-auto w-16 py-2"
        src={props.Logo}
        alt={props.title}
      ></img>
      <h1 className="text-[#094B72] font-medium text-xl py-2">{props.title}</h1>
      <p className="py-4 text-[#496C80] text-sm">{props.text}</p>
    </div>
  );
};

export default Card;
