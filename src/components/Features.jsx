function Features({ id, ariaLabel, children, ...props }) {
  return (
    <section
      id={id}
      className="pb-32 bg-gray-100"
      aria-label={ariaLabel}
      {...props}
    >
      <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
        <div
          className="hidden absolute w-10/12 top-24 left-16 h-3 bg-cyan md:block"
          aria-hidden="true"
        ></div>
        <div
          className="absolute w-2 h-full -ml-1 bg-cyan md:hidden left-1/2"
          aria-hidden="true"
        ></div>
        {children}
      </div>
    </section>
  );
}
export default Features;
