import { AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import Header from "./components/Header";
import MainNavigation from "./components/MainNavigation";
import DesktopMenu from "./components/DesktopMenu";
import LogoAndNavLinks from "./components/LogoAndNavLinks";
import Logo from "./components/Logo";
import MainNavLinks from "./components/MainNavLinks";
import LinkItem from "./components/LinkItem";
import AuthButtons from "./components/AuthButtons";
import Hero from "./components/Hero";
import HeroContent from "./components/HeroContent";
import HeroIllustration from "./components/HeroIllustration";
import illustrationWorking from "./assets/images/illustration-working.svg";
import LinkShortner from "./components/LinkShortner";
import LinkShortnerForm from "./components/LinkShortnerForm";
import LinkShortnerItem from "./components/LinkShortnerItem";
import Statistics from "./components/Statistics";
import Features from "./components/Features";
import FeatureCard from "./components/FeatureCard";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import FooterNavigation from "./components/FooterNavigation";
import FooterColumn from "./components/FooterColumn";
import FooterNavLinks from "./components/FooterNavLinks";
import MobileMenuButton from "./components/MobileMenuButton";
import MobileMenu from "./components/MobileMenu";
import MobileNavLinkList from "./components/MobileNavLinkList";
import SocialLinks from "./components/SocialLinks";
import SocialLink from "./components/SocialLink";

import { mainNavLinks } from "./data/mainNavLinks";
import { shortnerLinks } from "./data/shortnerLinks";
import { features } from "./data/features";
import { footerNavLinks } from "./data/footerNavLinks";
import { socialLinks } from "./data/socialLinks";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <>
      <Header id="header">
        <MainNavigation label="Main navigation">
          <DesktopMenu>
            <LogoAndNavLinks>
              <Logo altText="Company logo" ariaLabel="Homepage" />
              <MainNavLinks>
                {mainNavLinks.map((link) => (
                  <LinkItem key={link.label}>
                    <a
                      href={link.href}
                      className="text-grayishViolet hover:text-veryDarkViolet transition-colors"
                    >
                      {link.label}
                    </a>
                  </LinkItem>
                ))}
              </MainNavLinks>
            </LogoAndNavLinks>
            <AuthButtons
              loginLabel="Login"
              loginLink="#"
              signUpLabel="Sign Up"
              signUpLink="#"
            />
            <MobileMenuButton
              onClick={toggleMenu}
              type="button"
              isMenuOpen={isMenuOpen}
            />
          </DesktopMenu>
          <AnimatePresence>
            {isMenuOpen && mainNavLinks?.length > 0 && (
              <MobileMenu id="mobile-menu">
                <MobileNavLinkList links={mainNavLinks} onClick={toggleMenu} />
              </MobileMenu>
            )}
          </AnimatePresence>
        </MainNavigation>
        <Hero id="hero" label="hero-heading">
          <HeroContent
            heading="More than just shorter links"
            description="Build your brand's recognition and get detailed insights on how your links are performing."
            ctaLabel="Get Started"
            ctaLink="#"
            ariaLabel="Get started with link shortening"
          />
          <HeroIllustration
            image={illustrationWorking}
            altText="Person working on a laptop with analytics and link management tools"
          />
        </Hero>
      </Header>
      <LinkShortner id="shorten" ariaLabel="Link Shortner">
        <LinkShortnerForm id="link-form" />
        {shortnerLinks.map((link) => (
          <LinkShortnerItem
            key={link.id}
            originalURL={link.originalURL}
            shortURL={link.shortURL}
          />
        ))}
      </LinkShortner>
      <Statistics
        id="stats"
        heading="Advanced Statistics"
        description="Track how your links are performing across the web with our advanced
        statistics dashboard."
        ariaLabel="stats-heading"
      />
      <Features id="features" ariaLabel="Features">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            iconAltText={feature.iconAltText}
            title={feature.title}
            description={feature.desription}
            className={feature.className}
          />
        ))}
      </Features>
      <CTA
        id="cta"
        ariaLabel="Call to action"
        heading="Boost your links today"
      />
      <Footer ariaLabel="Site footer">
        <Logo altText="Company logo" ariaLabel="Homepage" className="h-8" />
        <FooterNavigation ariaLabel="Footer Navigation">
          {footerNavLinks.map((column) => (
            <FooterColumn key={column.id} title={column.title}>
              {column.links.map((link) => (
                <FooterNavLinks
                  key={link.label}
                  label={link.label}
                  href={link.href}
                />
              ))}
            </FooterColumn>
          ))}
        </FooterNavigation>
        <SocialLinks role="navigation" ariaLabel="Social media links">
          {socialLinks.map((link) => (
            <SocialLink
              key={link.name}
              name={link.name}
              icon={link.icon}
              link={link.href}
              ariaLabel={link.ariaLabel}
            />
          ))}
        </SocialLinks>
      </Footer>
    </>
  );
}

export default App;
