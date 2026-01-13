function FooterNavigation({ children, ariaLabel }) {
  return (
    <nav
      className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0"
      aria-label={ariaLabel}
    >
      {children}
    </nav>
  );
}
export default FooterNavigation;
