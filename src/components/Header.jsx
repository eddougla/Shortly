function Header({ id, children, ...props }) {
  return (
    <header id={id} {...props}>
      {children}
    </header>
  );
}
export default Header;
