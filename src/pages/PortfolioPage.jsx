import Portfolio from "../components/Portfolio";

export default function PortfolioPage() {
  return (
    <div className="interior-page portfolio-page">
      {/* Page Header */}
      <section className="page-header-section">
        <div className="section-container">
          <span className="page-label">Selected Works</span>
          <h1 className="page-title">Transformative brand cases and creative productions.</h1>
        </div>
      </section>

      {/* Main Portfolio Component */}
      <Portfolio />
    </div>
  );
}
