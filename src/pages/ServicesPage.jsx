import { Link } from "react-router-dom";
import { services } from "../data/services";

export default function ServicesPage() {
  const processes = [
    {
      step: "01",
      title: "Discovery & Alignment",
      desc: "We research your business vertical, review competitors, and align on project scopes and performance indicators."
    },
    {
      step: "02",
      title: "Brand Strategy & Mapping",
      desc: "We build user stories, design visual system guidelines, mapping out exactly how consumers will interact with your identity."
    },
    {
      step: "03",
      title: "Creative Execution & Dev",
      desc: "Our collective works to script, design, film, write, and code your digital properties using high-fidelity specifications."
    },
    {
      step: "04",
      title: "Quality Review & Launch",
      desc: "We run responsiveness tests, performance optimizations, and content audits before deploying your project to the market."
    }
  ];

  return (
    <div className="interior-page services-page">
      {/* Page Header */}
      <section className="page-header-section">
        <div className="section-container">
          <span className="page-label">Capabilities</span>
          <h1 className="page-title">We engineer digital solutions for competitive industries.</h1>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="services-list-section">
        <div className="section-container">
          <div className="services-detail-grid">
            {services.map((service, idx) => (
              <div key={service.id} className="service-detail-row">
                <div className="service-detail-num">
                  <span>{String(idx + 1).padStart(2, "0")}</span>
                </div>
                <div className="service-detail-content">
                  <div className="service-detail-header">
                    <i className={service.icon}></i>
                    <h2>{service.title}</h2>
                  </div>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="process-workflow-section">
        <div className="section-container">
          <div className="section-header center-align">
            <span className="section-label">Our Process</span>
            <h2 className="section-title">From Concept to Deployment</h2>
          </div>
          <div className="process-timeline">
            {processes.map((proc, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{proc.step}</div>
                <h3>{proc.title}</h3>
                <p>{proc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Call to Action */}
      <section className="services-cta-section">
        <div className="section-container">
          <div className="services-cta-box">
            <h2>Ready to transform your brand identity?</h2>
            <p>Let's map out a solution tailored specifically to your company's growth milestones.</p>
            <Link to="/contact" className="btn btn-primary-gold">Start a Project</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
