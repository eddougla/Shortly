function FooterNavLinks({ label, href }) {
  return (
    <li>
      <a
        href={href}
        className="capitalize text-grayishViolet hover:text-cyan transition-colors"
      >
        {label}
      </a>
    </li>
  );
}
export default FooterNavLinks;
