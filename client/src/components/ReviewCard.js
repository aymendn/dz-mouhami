import StarIcon from "../assets/reviews.svg";

const ReviewCard = ({ imageUrl, fullName, date, rating, reviewContent }) => {
  return (
    <div>
      {/* image, name, date and rating here */}
      <div className="flex items-center mb-2 gap-2">
        {/* image */}
        <img src={imageUrl} alt="Profile" className="w-10 h-10 rounded-full" />
        {/* name and date on top of each other */}
        <div className="flex flex-col">
          <div className="text-sm font-medium text-[#0f3146]">{fullName}</div>
          <div className="text-xs text-[#618396]">{date}</div>
        </div>
        {/* rating */}
        <div className="flex items-center gap-1 ms-auto self-start">
          <div className="text-sm text-[#496C80]">{rating}</div>
          <img src={StarIcon} alt="Star" className="w-4" />
        </div>
      </div>
      {/* content */}
      <p className="text-[#496C80] text-sm">{reviewContent}</p>     
    </div>
  );
};

export default ReviewCard;
