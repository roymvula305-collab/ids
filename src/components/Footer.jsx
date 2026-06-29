import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top-container">
        <div className="footer-column brand-column">
          <Link to="/" className="footer-logo">
            Identity<span>Studios</span>
          </Link>
          <p className="footer-about-text">
            A premium digital agency engineering experiences that merge strategy with visual storytelling to scale brands and secure market presence.
          </p>
          <div className="footer-social-icons">
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Capabilities</Link></li>
            <li><Link to="/portfolio">Selected Works</Link></li>
            <li><Link to="/team">The Collective</Link></li>
            <li><Link to="/contact">Get in Touch</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Capabilities</h3>
          <ul className="footer-links">
            <li><Link to="/services">Business Development</Link></li>
            <li><Link to="/services">Graphic Design</Link></li>
            <li><Link to="/services">Marketing Strategy</Link></li>
            <li><Link to="/services">Photo & Video Production</Link></li>
            <li><Link to="/services">Web Dev & UI/UX</Link></li>
            <li><Link to="/services">Content Creation</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact Info</h3>
          <ul className="footer-contact-details">
            <li>
              <i className="fas fa-envelope"></i>
              <span>identitystudios5@gmail.com</span>
            </li>
            <li>
              <i className="fas fa-phone-alt"></i>
              <span>(260) 971111464</span>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Lusaka, Zambia</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom-container">
        <p>&copy; {new Date().getFullYear()} Identity Studios. All rights reserved.</p>
        <div className="footer-policies">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
