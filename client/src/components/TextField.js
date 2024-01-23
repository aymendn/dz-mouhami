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
        className={"block text-xs font-medium text-gray-700 " + labelClassName}
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
          "mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm" +
          fieldClassName
        }
      />
    </div>
  );
};

export default TextField;
