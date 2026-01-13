function Hero({ id, children, label, ...props }) {
  return (
    <div id={id} className="py-12 lg:py-20" aria-labelledby={label} {...props}>
      <div className="container flex flex-col-reverse mx-auto px-6 lg:flex-row lg:items-center lg:gap-12">
        {children}
      </div>
    </div>
  );
}
export default Hero;
