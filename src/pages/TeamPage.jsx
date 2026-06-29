import Team from "../components/Team";

export default function TeamPage() {
  return (
    <div className="interior-page team-page">
      {/* Page Header */}
      <section className="page-header-section">
        <div className="section-container">
          <span className="page-label">The Collective</span>
          <h1 className="page-title">Meet the digital directors, artists, and architects.</h1>
        </div>
      </section>

      {/* Main Team Grid */}
      <Team />

      {/* Career Section */}
      <section className="careers-section">
        <div className="section-container">
          <div className="careers-box">
            <span className="section-label">Careers</span>
            <h2>Join Our Collective</h2>
            <p>
              We are constantly seeking top-tier visual storytellers, software engineers, marketing analysts, and designers. If you believe in pushing the boundaries of creative execution, reach out to us.
            </p>
            <a href="mailto:careers@identitystudios.com" className="btn btn-primary-black">Apply Now</a>
          </div>
        </div>
      </section>
    </div>
  );
}
