function SocialLinks({ children, role, ariaLabel }) {
  return (
    <div className="flex items-center space-x-6" role={role} aria-label={ariaLabel}>
      {children}
    </div>
  );
}
export default SocialLinks;
