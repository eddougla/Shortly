function FooterColumn({ children, title }) {
  return (
    <div className="flex flex-col items-center w-full md:items-start">
      <h3 className="mb-5 font-bold text-white capitalize">{title}</h3>
      <ul className="flex flex-col items-center space-y-3 md:items-start">
        {children}
      </ul>
    </div>
  );
}
export default FooterColumn;
