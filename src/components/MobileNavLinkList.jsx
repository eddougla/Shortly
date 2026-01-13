import { memo } from "react";
import MobileMenuLink from "./MobileMenuLink";

const MobileNavLinkList = memo(({ links, onClick }) => {
  return (
    <>
      {links.map((link, index) => (
        <MobileMenuLink key={link.label} index={index}>
          <a
            href={link.href}
            className="block text-center hover:text-cyan transition-colors"
            onClick={onClick}
          >
            {link.label}
          </a>
        </MobileMenuLink>
      ))}
    </>
  );
});

MobileNavLinkList.displayName = "MobileNavLinkList";

export default MobileNavLinkList;
