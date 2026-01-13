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

import { mainNavLinks } from "./data/mainNavLinks";
import { shortnerLinks } from "./data/shortnerLinks";
import { features } from "./data/features";

function App() {
  return (
    <>
      <Header id="header">
        <MainNavigation label="Main navigation">
          <DesktopMenu>
            <LogoAndNavLinks>
              <Logo altText="Company logo" />
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
          </DesktopMenu>
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
    </>
  );
}

export default App;
