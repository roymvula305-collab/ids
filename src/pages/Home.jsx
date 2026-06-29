import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Team from "../components/Team";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Services />
      
      {/* Featured Portfolio Section */}
      <section className="featured-portfolio-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">Selected Cases</span>
            <h2 className="section-title">Visual Excellence in Action</h2>
            <p className="section-subtitle">
              Take a look at some of our recent brand campaigns, digital builds, and visual creations.
            </p>
          </div>
          <Portfolio limit={4} />
          <div className="view-all-works-btn-box">
            <Link to="/portfolio" className="btn btn-outline-black">View All Projects</Link>
          </div>
        </div>
      </section>

      <Team />
      <Contact />
    </div>
  );
}
