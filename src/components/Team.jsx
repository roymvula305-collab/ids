import { team } from "../data/team";

export default function Team() {
  return (
    <section className="team-section-home">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">The Team</span>
          <h2 className="section-title">Creative Minds & Innovators</h2>
          <p className="section-subtitle">
            A collaborative collective of specialists working across strategy, design, technology, and branding.
          </p>
        </div>

        <div className="team-grid">
          {team.map((member) => (
            <div key={member.id} className="team-member-card">
              <div className="team-member-img-box">
                <img src={member.image} alt={member.name} />
              </div>
              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-role">{member.role}</p>
              
              <div className="team-member-socials">
                <a href={member.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href={member.socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href={member.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
