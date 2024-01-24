const SelectField = ({
  label,
  placeholder,
  id,
  value,
  // this should be an array of objects with a value and label property
  options,
  onChange,
  htmlFor,
  divClassName,
  selectClassName,
  labelClassName,
}) => {
  return (
    <div className={divClassName}>
      <label
        htmlFor={htmlFor}
        className={"block text-sm font-medium text-gray-700 " + labelClassName}
      >
        {label}
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          name={id}
          id={id}
          className={
            "block mt-1 bg-gray-50 border border-gray-200 rounded-md w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-blue-200 active:border-blue-200 active:bg-white appearance-none pr-8" +
            selectClassName
          }
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SelectField;
