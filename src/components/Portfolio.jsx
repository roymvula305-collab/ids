import { useState } from "react";
import { portfolio } from "../data/portfolio";
import PortfolioCard from "./PortfolioCard";
import PortfolioFilter from "./PortfolioFilter";

export default function Portfolio({ limit }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxItem, setLightboxItem] = useState(null);

  const filteredItems = activeFilter === "All"
    ? portfolio
    : portfolio.filter((item) => item.category.toLowerCase() === activeFilter.toLowerCase());

  const itemsToDisplay = limit ? filteredItems.slice(0, limit) : filteredItems;

  const handleOpenLightbox = (item) => {
    setLightboxItem(item);
    document.body.style.overflow = "hidden"; // Disable background scrolling
  };

  const handleCloseLightbox = () => {
    setLightboxItem(null);
    document.body.style.overflow = "unset"; // Restore background scrolling
  };

  return (
    <section className="portfolio-section-home">
      <div className="section-container">
        {!limit && (
          <div className="section-header">
            <span className="section-label">Our Works</span>
            <h2 className="section-title">Selected Case Studies</h2>
            <p className="section-subtitle">
              Explore how we translate creative direction and technical execution into business outcomes.
            </p>
          </div>
        )}

        {/* Portfolio Filter */}
        {!limit && (
          <PortfolioFilter 
            activeFilter={activeFilter} 
            onFilterChange={setActiveFilter} 
          />
        )}

        {/* Gallery Grid */}
        <div className="portfolio-grid animate-fade-in">
          {itemsToDisplay.map((item) => (
            <PortfolioCard 
              key={item.id} 
              item={item} 
              onClick={handleOpenLightbox} 
            />
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxItem && (
          <div className="lightbox-overlay" onClick={handleCloseLightbox}>
            <button className="lightbox-close" onClick={handleCloseLightbox} aria-label="Close Lightbox">
              <i className="fas fa-times"></i>
            </button>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <div className="lightbox-img-box">
                <img src={lightboxItem.image} alt={lightboxItem.title} />
              </div>
              <div className="lightbox-info-box">
                <span className="lightbox-category">{lightboxItem.category}</span>
                <h3 className="lightbox-title">{lightboxItem.title}</h3>
                <p className="lightbox-desc">{lightboxItem.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
