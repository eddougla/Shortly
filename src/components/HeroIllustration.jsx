function HeroIllustration({ image, altText }) {
  return (
    <div className="mb-24 mx-auto md:w-180 lg:w-1/2 lg:mb-0">
      <img
        src={image}
        alt={altText}
        className="w-full h-auto"
        loading="eager"
      />
    </div>
  );
}
export default HeroIllustration;
