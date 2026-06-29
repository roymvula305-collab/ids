export default function PortfolioCard({ item, onClick }) {
  return (
    <div className="portfolio-card" onClick={() => onClick(item)}>
      <div className="portfolio-img-container">
        <img src={item.image} alt={item.title} loading="lazy" />
        <div className="portfolio-overlay">
          <div className="portfolio-info">
            <span className="portfolio-category">{item.category}</span>
            <h3 className="portfolio-title">{item.title}</h3>
            <p className="portfolio-desc-short">{item.description}</p>
            <span className="portfolio-zoom-hint">
              <i className="fas fa-search-plus"></i> View Project
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
