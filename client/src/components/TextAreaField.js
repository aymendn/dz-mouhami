const TextAreaField = ({
  placeholder,
  id,
  value,
  label,
  onChange,
  htmlFor,
  divClassName,
  labelClassName,
  name
}) => {
  return (
    <div className={divClassName}>
      <label
        htmlFor={htmlFor}
        className={"block text-xs font-medium text-gray-700 " + labelClassName}
      >
        {label}
      </label>
      <textarea
        className="min-h-[120px] block mt-1 bg-gray-50  border border-gray-200 rounded-md w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-blue-200 active:border-blue-200 active:bg-white appearance-none pe-8"
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        id={id}
      ></textarea>
    </div>
  );
};

export default TextAreaField;
