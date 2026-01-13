function Button({ type, children, arialLabel, ...props }) {
  return (
    <button type={type} aria-label={arialLabel} {...props}>
      {children}
    </button>
  );
}
export default Button;
