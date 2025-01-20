import React from "react";
import Logo from "../Logo";
import RedirectButton from "../RedirectButton";
import "./Header.scss";

const Header = () => {
  const navigations = [
    { label: "Discover", href: "/services" },
    { label: "Book", href: "/articles" },
    { label: "Manage", href: "/articles" },
    { label: "Help", href: "/articles" }
  ];

  return (
    <header className="background-blue">
      <div className="container header">
        <div className="navigations-wrapper">
          <nav>
            {navigations.map(({ label, href }, index) => (
              <a
                key={`${href}_${index}`}
                href={href}
                className="font-size-xlarge font-weight-medium color-light hover-effect"
              >
                {label}
              </a>
            ))}
          </nav>
          <Logo variant="british" />
        </div>
        <div className="buttons-wrapper">
          <RedirectButton className="transparent font-size-medium hover-effect">
            Login
          </RedirectButton>
          <Logo variant="oneWorldLogo"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
