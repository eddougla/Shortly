function Statistics({ id, heading, description, ariaLabel }) {
  return (
    <section id={id} className="py-24 bg-gray-100" aria-labelledby={ariaLabel}>
      <div className="container mx-auto px-3">
        <h2
          id={ariaLabel}
          className="text-4xl mb-6 font-bold text-center text-veryDarkViolet"
        >
          {heading}
        </h2>
        <p className="max-w-xs mx-auto text-center text-gray-400 md:max-w-md">
          {description}
        </p>
      </div>
    </section>
  );
}
export default Statistics;
