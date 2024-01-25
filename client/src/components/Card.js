const Card = (props) => {
  return (
    <div className="flex flex-col justify-center min-h-0 md:min-h-[340px] w-full bg-white rounded-2xl text-center p-5 pt-6 pb-10 max-w-xs border-[3px] border-transparent hover:border-[#094b7256]  transition-all duration-150">
      <img
        className="mx-auto py-2 w-24 h-24"
        src={props.Logo}
        alt={props.title}
      ></img>
      <h1 className="font-semibold text-[#094B72] text-2xl py-2 max-w-[200px] text-center mx-auto">
        {props.title}
      </h1>
      <p className="py-4 text-[#496C80] text-sm">{props.text}</p>
    </div>
  );
};

export default Card;
