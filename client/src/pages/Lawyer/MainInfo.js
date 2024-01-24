import lawyerImage from "../../assets/lawyer_placeholder.png";
import LocationIcon from "../../assets/location.svg";
import categoryIcon from "../../assets/category.svg";
import Availability from "../../components/Availability";

const MainInfo = () => {
  const name = "Lawyer Name";
  const categories = ["Category 1", "Category 2", "Category 3"];
  const location = "Location";
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget fermentum aliquam, sem diam aliquet mauris, nec";

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center md:items-start md:justify-start mb-10">
        {/* Image on the left */}
        <img
          src={lawyerImage}
          className="w-64 h-[280px] rounded-md mr-4 object-cover"
        />

        <div className="rounded-lg overflow-hidden">
          {/* Name */}
          <h2 className="text-2xl mt-2 mb-2 text-[#1e3d4f] font-medium ">
            {name}
          </h2>

          {/* Rating */}
          <p className="mb-2">Rating here</p>

          {/* Categories Title */}
          <p className="text-lg font-bold flex items-center  text-[#193647]">
            Categories
          </p>

          {/* Categories psk c un tableau asslan */}
          <p className="text-[#094b72e4]  text-[14px]">
            {categories.join(", ")}
          </p>

          {/* Description Title */}
          <p className="text-lg font-bold flex items-center  text-[#193647] mt-4">
            Description
          </p>
          {/* Description */}
          <p className="text-[#708FA2] text-sm mt-1">{description}</p>
        </div>
      </div>
      {/* Availability Title */}
      <p className="text-lg font-bold flex items-center  text-[#193647] mt-4 mb-1">
        Availability
      </p>

      {/* Availability */}
      <Availability />
    </>
  );
};

export default MainInfo;
