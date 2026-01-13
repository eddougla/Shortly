function MainNavigation({ label, children }) {
  return (
    <nav className="relative container mx-auto p-6" aria-label={label}>
      {children}
    </nav>
  );
}
export default MainNavigation;
