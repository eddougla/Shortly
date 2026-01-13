function FeatureCard({
  icon,
  iconAltText,
  title,
  description,
  className = "",
}) {
  return (
    <div
      className={`relative flex flex-col p-6 space-y-6 bg-white rounded-lg shadow-sm md:w-1/3 ${className}`}
    >
      <div className="absolute -ml-10 -top-10 md:left-16 left-1/2">
        <div class="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
          <img src={icon} alt={iconAltText} />
        </div>
      </div>
      <h3 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
        {title}
      </h3>

      <p className="text-center text-gray-400 md:text-left">{description}</p>
    </div>
  );
}
export default FeatureCard;
