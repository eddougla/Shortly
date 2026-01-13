function DesktopMenu({ id, children, ...props }) {
  return (
    <div className="flex items-center justify-between" {...props}>
      {children}
    </div>
  );
}
export default DesktopMenu;
