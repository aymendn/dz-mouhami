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
  name
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
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={
          "mt-1 bg-gray-50 appearance-none border border-gray-200 rounded-md  w-full py-2 px-4 text-gray-700  focus:outline-none focus:bg-white focus:border-blue-200 active:border-blue-200 active:bg-white" +
          fieldClassName
        }
      />
    </div>
  );
};

export default TextField;
