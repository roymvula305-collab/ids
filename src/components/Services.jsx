import { services } from "../data/services";

export default function Services() {
  return (
    <section className="services-section-home">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">Our Capabilities</span>
          <h2 className="section-title">Engineered for Digital Growth</h2>
          <p className="section-subtitle">
            We provide comprehensive services to translate your ideas into digital experiences and commercial success.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon-wrapper">
                <i className={service.icon}></i>
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
