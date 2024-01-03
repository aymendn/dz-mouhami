import Filter from "../../assets/filter.svg";
import CloseIcon from "../../assets/close_small.svg";

const FilterSidebar = () => {
  return (
    <div className="w-1/3 h-full rounded-2xl border-2 border-slate-100 p-8 mr-5">
      <div className="flex justify-start items-center">
        <img src={Filter} className="w-5 mr-3" alt="Filter Icon" />
        <h2 className="text-[#15394E] text-2xl font-bold">Filter</h2>
      </div>
      {/* 2 buttons in a row */}
      <div className="flex justify-start items-center mt-4">
        <button className="bg-[#094B72] text-white rounded-3xl px-8 py-2 text-base hover:opacity-80 transition-all mr-2">
          <p>Apply Filters</p>
        </button>
        <button className="bg-gray-100 flex items-center text-[#103F5BE5] rounded-3xl px-8 py-2 text-base hover:opacity-80 hover:bg-gray-200 transition-all">
          <img src={CloseIcon} className="w-2 mr-2" alt="Close Icon" />
          <p>Clear</p>
        </button>
      </div>
      {/* a list of check boxes with a title, checkboxes should be in new lines*/}
      <div className="mt-8">
        <h2 className="text-[#607e8ff9] text-base font-medium">Categories</h2>
        <div className="my-3 flex items-center">
          <input
            type="checkbox"
            id="category1"
            name="category1"
            value="category1"
            //   make it a little bit bigger and the color to primary
            className="mr-2 w-4 h-4 accent-[#094B72]"
          />
          <label htmlFor="category1" className="text-base select-none">
            Category 1
          </label>
        </div>
        <div className="my-3 flex items-center">
          <input
            type="checkbox"
            id="category2"
            name="category2"
            value="category2"
            //   make it a little bit bigger and the color to primary
            className="mr-2 w-4 h-4 accent-[#094B72]"
          />
          <label htmlFor="category2" className="text-base select-none">
            Category 2
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
