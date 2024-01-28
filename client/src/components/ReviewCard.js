import Rating from "react-rating";
import { useTranslation } from "react-i18next";
import starFilled from "../assets/star_filled.svg";
import star from "../assets/star.svg";
import profilePlaceholder from "../assets/profileImage.jpg";

const ReviewCard = ({ created_at, rating, comment, first_name, last_name }) => {
  const { t } = useTranslation();
  const direction = t("direction");

  const fullName = first_name + " " + last_name;

  return (
    <div>
      {/* image, name, date and rating here */}
      <div className="flex items-center mb-2 gap-2">
        {/* image */}
        <img
          src={profilePlaceholder}
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        {/* name and date on top of each other */}
        <div className="flex flex-col">
          <div className="text-sm font-medium text-[#0f3146]">{fullName}</div>
          {/* TODO: add this */}
          <div className="text-xs text-[#618396]">{created_at}</div>
        </div>
        {/* Rating */}
        <div className="flex items-center gap-1 ms-auto self-start">
          <Rating
            direction={direction}
            initialRating={Math.floor(rating)}
            readonly={true}
            emptySymbol={<img src={star} className="icon" width={20} />}
            fullSymbol={<img src={starFilled} className="icon" width={20} />}
          />
        </div>
      </div>
      {/* content */}
      <p className="text-[#496C80] text-sm">{comment}</p>
    </div>
  );
};

export default ReviewCard;
