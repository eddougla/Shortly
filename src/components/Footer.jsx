function Footer({ children, ariaLabel }) {
  return (
    <footer className="py-16 bg-veryDarkViolet" aria-label={ariaLabel}>
      <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
        {children}
      </div>
    </footer>
  );
}
export default Footer;
