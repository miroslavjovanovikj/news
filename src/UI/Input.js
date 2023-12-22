const Input = ({
  elementType,
  onChange,
  value,
  placeholder,
  data,
  name,
  inputMargin,
  ...rest
}) => {
  const border = `border  border-solid border-neutral-300 rounded w-11/12 p-3 ${inputMargin} `;
  // const valBorder = "border  border-solid border-red-600 rounded w-full p-3";
   
  switch (elementType) {
    case "input":
      return (
        <input
          className={border}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
          {...rest}
        />
      );
    case "text-area":
      return (
        <textarea
          className={border}
          value={value}
          rows="10"
          cols="40"
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          {...rest}
        />
      );
    case "file":
      return (
        <input
          className="w-full"
          value={value}
          onChange={onChange}
          name={name}
          {...rest}
        />
      );
    case "select":
      return (
        <div>
          <select
            className={border}
            id={name}
            onChange={onChange}
            value={value}
            name={name}
          >
            <option value="">Select an category</option>
            {data.map((option) => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      );
    default:
      return <div>Null</div>;
  }
};
export default Input;
