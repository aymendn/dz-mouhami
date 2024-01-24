const TextField = ({
  label,
  placeholder,
  type,
  id,
  value,
  onChange,
  htmlFor,
  divClassName,
  fieldClassName,
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

      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={
          "mt-1 bg-gray-50 appearance-none border border-gray-200 rounded-xl  w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-200 active:border-blue-200 active:bg-white md:w-96 " +
          fieldClassName
        }
      />
    </div>
  );
};

export default TextField;
