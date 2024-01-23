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
        className={"block text-xs font-medium text-gray-700" + labelClassName}
      >
        {label}
      </label>

      <select
        value={value}
        onChange={onChange}
        name={id}
        id={id}
        className={
          "mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm" +
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
    </div>
  );
};

export default SelectField;
