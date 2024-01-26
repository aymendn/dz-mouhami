import lawyerImage from "../../assets/lawyer_placeholder.png";
import LocationIcon from "../../assets/location.svg";
import categoryIcon from "../../assets/category.svg";
import Availability from "../../components/Availability";
import Rating from "react-rating";
import starFilled from "../../assets/star_filled.svg";
import star from "../../assets/star.svg";
import { useTranslation } from "react-i18next";
import { Image } from "react-img-placeholder";

const MainInfo = ({ lawyerData }) => {
  const { t } = useTranslation();
  const direction = t("direction");

  const name = lawyerData.first_name + " " + lawyerData.last_name;
  const categories = [lawyerData.specialization];
  const location = lawyerData.location;
  const description = lawyerData.bio;
  const rating = lawyerData.rating;
  // get the first image from images
  const getImage = () => {
    try {
      return lawyerData.images[0].image || "placeholder";
    } catch (error) {
      return "placeholder";
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center md:items-start md:justify-start mb-10">
        {/* Image on the left */}
        <Image
          src={getImage()}
          alt="Picture of the author"
          width={220}
          height={280}
          placeholderColor="#dde7ee"
          className="w-64 h-[280px] rounded-md me-4 object-cover"
        />

        <div className="rounded-lg overflow-hidden">
          {/* Name */}
          <h2 className="text-2xl mt-2 mb-2 text-[#1e3d4f] font-medium ">
            {name}
          </h2>

          {/* Rating */}
          <Rating
            className="mb-1"
            direction={direction}
            initialRating={rating || 0}
            readonly={true}
            emptySymbol={<img src={star} className="icon" width={30} />}
            fullSymbol={<img src={starFilled} className="icon" width={30} />}
          />

          {/* Categories Title */}
          <p className="text-lg font-bold flex items-center  text-[#193647]">
            {t("categories")}
          </p>

          {/* Categories psk c un tableau asslan */}
          <p className="text-[#094b72e4]  text-[14px]">
            {categories.join(", ")}
          </p>

          {/* Description Title */}
          <p className="text-lg font-bold flex items-center  text-[#193647] mt-4">
            {t("description")}
          </p>
          {/* Description */}
          <p className="text-[#708FA2] text-sm mt-1">{description}</p>
        </div>
      </div>
      {/* Availability Title */}
      <p className="text-lg font-bold flex items-center  text-[#193647] mt-4 mb-1">
        {t("availability")}
      </p>

      {/* Availability */}
      <Availability />
    </>
  );
};

export default MainInfo;
