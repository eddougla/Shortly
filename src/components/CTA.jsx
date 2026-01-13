function CTA({ id, heading, ariaLabel }) {
  return (
    <section id={id} className="py-24 bg-darkViolet" aria-label={ariaLabel}>
      <div className="flex flex-col p-2 space-y-6">
        <h2 className="mx-auto space-y-10 text-4xl font-bold text-center text-white">
          {heading}
        </h2>
        <a
          href="#get-started"
          className="inline-block px-10 py-5 mx-auto text-2xl font-bold text-white rounded-full bg-cyan hover:bg-cyanLight focus:outline-none focus:ring-4 focus:ring-cyan focus:ring-offset-2 transition-colors md:text-base md:py-3"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
export default CTA;
