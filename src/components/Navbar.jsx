import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav-container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          Identity<span>Studios</span>
        </Link>

        {/* Navigation Links */}
        <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/" end onClick={closeMobileMenu}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMobileMenu}>About</NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={closeMobileMenu}>Services</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" onClick={closeMobileMenu}>Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/team" onClick={closeMobileMenu}>Team</NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMobileMenu}>Contact</NavLink>
          </li>
        </ul>

        {/* Right Nav Actions */}
        <div className="nav-right">
          <ThemeToggle />
          <button 
            className={`hamburger ${mobileMenuOpen ? "open" : ""}`} 
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
