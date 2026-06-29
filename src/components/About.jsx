export default function About() {
  const disciplines = [
    { title: "Business Development", icon: "fas fa-briefcase" },
    { title: "Graphic Design", icon: "fas fa-palette" },
    { title: "Marketing Strategy", icon: "fas fa-bullhorn" },
    { title: "Photo & Video", icon: "fas fa-camera-retro" },
    { title: "Web Dev & UI/UX", icon: "fas fa-laptop-code" },
    { title: "Content Creation", icon: "fas fa-pen-fancy" }
  ];

  return (
    <section className="about-section-home">
      <div className="section-container">
        <div className="about-intro">
          <span className="section-label">Who We Are</span>
          <h2 className="section-title">A Unified Creative Collective</h2>
          <p className="about-description">
            Identity Studios is a premium creative collective bringing together elite professionals in business development, graphic design, marketing, photography, video production, web development, UI/UX, and high-impact content creation. We merge strategy with visual excellence to grow brands.
          </p>
        </div>

        <div className="disciplines-grid">
          {disciplines.map((item, index) => (
            <div key={index} className="discipline-card">
              <div className="discipline-icon-box">
                <i className={item.icon}></i>
              </div>
              <h3 className="discipline-title">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
