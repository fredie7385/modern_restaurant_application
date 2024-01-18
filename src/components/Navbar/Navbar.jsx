import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navLinks = [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "About", href: "#about" },
    { id: 3, name: "Menu", href: "#menu" },
    { id: 4, name: "Awards", href: "#awards" },
    { id: 5, name: "Contact", href: "#contact" },
  ];
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        {navLinks.map((link) => (
          <li className="p__opensans" key={link.id}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">LogIn</a>
        <div />
        <a href="/" className="p__opensans">Register </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} onClick={() => setToggleMenu(false)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
