function HeroContent({ heading, description, ctaLabel, ctaLink, ariaLabel }) {
  return (
    <div className="flex flex-col space-y-10 mb-44 lg:mt-0 lg:mb-0 lg:w-1/2 xl:space-y-12">
      <h1
        id="hero-heading"
        className="text-5xl font-bold text-center text-veryDarkViolet lg:text-6xl lg:max-w-md lg:text-left"
      >
        {heading}
      </h1>
      <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left lg:text-4xl">
        {description}
      </p>
      <div className="mx-auto lg:mx-0">
        <a
          href={ctaLink}
          className="inline-block py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full hover:opacity-70 transition-opacity focus:outline-none focus:ring-4 focus:ring-cyan focus:ring-offset-2 lg:py-4 lg:text-xl"
          aria-label={ariaLabel}
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}
export default HeroContent;
