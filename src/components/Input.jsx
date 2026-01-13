function Input({ id, type, placeholder, ariaLabel, ...props }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      aria-label={ariaLabel}
      {...props}
    />
  );
}
export default Input;
