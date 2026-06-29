import { useState } from "react";
import Contact from "../components/Contact";

export default function ContactPage() {
  const faqs = [
    {
      q: "What is your typical project timeline?",
      a: "Depending on size and complexity, visual branding campaigns run between 4 to 6 weeks, while large scale web engineering projects require 8 to 12 weeks from initial scoping to launch."
    },
    {
      q: "How does the creative collective collaborate?",
      a: "Our members operate under a unified creative brief managed by our director. This maintains branding and messaging integrity across photography, copy, dev, and marketing channels."
    },
    {
      q: "Do you offer post-launch support?",
      a: "Yes. We offer recurring service level agreements covering technical maintenance, ad-campaign adjustments, SEO reporting, and graphic updates."
    }
  ];

  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <div className="interior-page contact-page">
      {/* Page Header */}
      <section className="page-header-section">
        <div className="section-container">
          <span className="page-label">Contact</span>
          <h1 className="page-title">Connect with Identity Studios.</h1>
        </div>
      </section>

      {/* Main Contact Form */}
      <Contact />

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-container">
          <div className="section-header center-align">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Common Inquiries</h2>
          </div>
          
          <div className="faq-accordion">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`faq-item ${activeFaq === idx ? "active" : ""}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-question">
                  <h3>{faq.q}</h3>
                  <span className="faq-icon">
                    <i className={`fas ${activeFaq === idx ? "fa-minus" : "fa-plus"}`}></i>
                  </span>
                </div>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
