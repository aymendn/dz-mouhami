import lawyerImage from "../../assets/lawyer_placeholder.png";
import LocationIcon from "../../assets/location.svg";
import categoryIcon from "../../assets/category.svg";

const MainInfo = () => {
  const name = "Lawyer Name";
  const categories = ["Category 1", "Category 2", "Category 3"];
  const location = "Location";
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget fermentum aliquam, sem diam aliquet mauris, nec";

  return (
    <>
      <div className=" flex mb-10">
        {/* Image on the left */}
        <img
          src={lawyerImage}
          className="md:w-64 w-[150px] h-[280px] rounded-md mr-4 object-cover"
        />

        <div className="rounded-lg overflow-hidden">
          {/* Name */}
          <h2 className="text-2xl mt-2 mb-2 text-[#1e3d4f] font-medium ">
            {name}
          </h2>

          {/* Rating */}
          <p className="mb-2">Rating here</p>

          {/* Categories Title */}
          <p className="flex items-center  text-[#193647] ">
            <img src={categoryIcon} alt="Category Icon" className="mr-1 w-4" />
            <p className="text-base font-medium">Categories</p>
          </p>

          {/* Categories psk c un tableau asslan */}
          <p className="text-[#094b72e4]  text-[14px]">
            {categories.join(", ")}
          </p>
        </div>
      </div>
      {/* Small text */}
      <p className="text-[#708FA2] text-sm mt-2">{description}</p>
    </>
  );
};

export default MainInfo;
