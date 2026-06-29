import Team from "../components/Team";

export default function AboutPage() {
  const values = [
    {
      title: "Strategic Foundation",
      description: "We believe in starting with a deep understanding of business goals, market trends, and audiences. Design without strategy is just decoration.",
      icon: "fas fa-brain"
    },
    {
      title: "Uncompromising Design",
      description: "Visual excellence is in our DNA. We sweat every pixel, frame, and type curve to produce work that commands attention.",
      icon: "fas fa-gem"
    },
    {
      title: "Technical Sophistication",
      description: "We construct reliable, high-performance digital engines. Our clean code practices ensure speed, longevity, and exceptional user interactions.",
      icon: "fas fa-microchip"
    }
  ];

  return (
    <div className="interior-page about-page">
      {/* Page Header */}
      <section className="page-header-section">
        <div className="section-container">
          <span className="page-label">About Us</span>
          <h1 className="page-title">We craft brand identities and high-impact digital experiences.</h1>
        </div>
      </section>

      {/* Intro Grid */}
      <section className="about-intro-section">
        <div className="section-container">
          <div className="about-intro-grid">
            <div className="intro-text-block">
              <h2>The Identity Studios Vision</h2>
              <p>
                Founded on the principle of creative convergence, Identity Studios was established to break down silos between disciplines. By housing brand consultants, visual designers, marketing experts, cinematic photographers, and web engineers under one digital roof, we ensure cohesive and impactful brand deployment.
              </p>
              <p>
                We do not build generic templates or standard corporate layouts. We deliver bespoke, forward-thinking solutions tailored to elevate your business above the noise.
              </p>
            </div>
            <div className="intro-img-block">
              <img src="/uploads/68e91931c9dd4.jpg" alt="Identity Studios Collective" className="about-featured-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values-section">
        <div className="section-container">
          <div className="section-header center-align">
            <span className="section-label">Core Values</span>
            <h2 className="section-title">Our Creative Compass</h2>
          </div>
          <div className="values-grid">
            {values.map((val, idx) => (
              <div key={idx} className="value-card">
                <div className="value-icon">
                  <i className={val.icon}></i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="section-container">
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-num">50+</span>
              <span className="stat-lbl">Brands Scaled</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">12M+</span>
              <span className="stat-lbl">Campaign Reach</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">6</span>
              <span className="stat-lbl">Active Specialists</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">100%</span>
              <span className="stat-lbl">Client Retention</span>
            </div>
          </div>
        </div>
      </section>

      {/* Team Component */}
      <Team />
    </div>
  );
}
