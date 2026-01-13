import Header from "./components/Header";
import MainNavigation from "./components/MainNavigation";
import DesktopMenu from "./components/DesktopMenu";
import LogoAndNavLinks from "./components/LogoAndNavLinks";
import Logo from "./components/Logo";
import MainNavLinks from "./components/MainNavLinks";
import LinkItem from "./components/LinkItem";
import AuthButtons from "./components/AuthButtons";

import { mainNavLinks } from "./data/mainNavLinks";

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
      </Header>
    </>
  );
}

export default App;
