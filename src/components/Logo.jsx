import logo from "../assets/images/logo.svg";

function Logo({ altText, ariaLabel, ...props }) {
  return (
    <a href="" aria-label={ariaLabel}>
      <img src={logo} alt={altText} {...props} />
    </a>
  );
}
export default Logo;
