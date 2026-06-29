import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailto = `mailto:identitystudios5@gmail.com?subject=${encodeURIComponent(
      `New Contact Form Submission: ${formData.subject || "No Subject"}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailto;

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section className="contact-section-home">
      <div className="section-container">
        <div className="contact-grid">
          <div className="contact-info-panel">
            <span className="section-label">Get in Touch</span>
            <h2 className="contact-title">Let's build something remarkable together.</h2>
            <p className="contact-desc">
              Have an upcoming project, brand overhaul, or visual story to tell? Reach out and our collective will align to execute your vision.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4>Email Us</h4>
                  <p>identitystudios5@gmail.com</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h4>Call Us</h4>
                  <p>+260 971111464</p>
                  <p>+260 975020028</p>

                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4>Our Location</h4>
                  <p>Lusaka, Zambia</p>
                </div>
              </div>
            </div>
          </div>

       <div className="contact-form-panel">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Brand Overhaul"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary-black">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
