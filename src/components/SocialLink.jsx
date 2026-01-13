function SocialLink({ name, icon, link, ariaLabel }) {
  return (
    <a href={link} aria-label={ariaLabel}>
      <img
        src={icon}
        alt={name}
        className="ficon hover:opacity-80 transition-opacity w-6 h-6"
      />
    </a>
  );
}
export default SocialLink;
