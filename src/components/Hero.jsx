import { Link } from "react-router-dom";

const floatingCards = [
  { icon: "fas fa-chess-knight", label: "Brand Strategy" },
  { icon: "fas fa-pen-nib", label: "Graphic Design" },
  { icon: "fas fa-layer-group", label: "UI/UX Design" },
  { icon: "fas fa-camera", label: "Photo & Video" },
];

const stats = [
  { value: "6+", label: "Creative Talents" },
  { value: "20+", label: "Projects Delivered" },
  { value: "100%", label: "Creative Excellence" },
];

export default function Hero() {
  return (
    <section className="new-hero-section">
      {/* Background shapes / glows */}
      <div className="hero-bg-shapes" aria-hidden="true">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
        <div className="hero-noise"></div>
      </div>

      <div className="new-hero-inner">
        {/* ── LEFT COLUMN ── */}
        <div className="new-hero-left">
          <span className="hero-badge">
            CREATIVE STUDIO&nbsp;•&nbsp;BRANDING&nbsp;•&nbsp;DIGITAL EXPERIENCES
          </span>

          <h1 className="new-hero-title">
            We Build Brands<br />
            <span className="hero-title-accent">That People Remember</span>
          </h1>

          <p className="new-hero-desc">
            Identity Studios brings together strategy, branding, graphic design,
            marketing, photo&nbsp;&amp;&nbsp;video, web development, UI/UX, and
            content creation to help businesses build memorable digital experiences.
          </p>

          <div className="new-hero-ctas">
            <Link to="/portfolio" className="btn btn-primary-gold">View Our Work</Link>
            <Link to="/contact" className="btn btn-outline-black">Start a Project</Link>
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="new-hero-right">
          {/* Floating discipline cards */}
          <div className="hero-cards-grid">
            {floatingCards.map((card, i) => (
              <div
                key={card.label}
                className="hero-glass-card"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="hero-card-icon">
                  <i className={card.icon}></i>
                </div>
                <span className="hero-card-label">{card.label}</span>
              </div>
            ))}
          </div>

          {/* Stats glass card */}
          <div className="hero-stats-card">
            {stats.map((s, i) => (
              <div key={s.label} className="hero-stat-item">
                <span className="hero-stat-value">{s.value}</span>
                <span className="hero-stat-label">{s.label}</span>
                {i < stats.length - 1 && <div className="hero-stat-divider" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
