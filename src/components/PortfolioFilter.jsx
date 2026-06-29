export default function PortfolioFilter({ activeFilter, onFilterChange }) {
  const categories = ["All", "Community", "Photography", "Branding", "Marketing", "Web", "Design"];

  return (
    <div className="portfolio-filter-container">
      {categories.map((category) => (
        <button
          key={category}
          data-category={category}
          className={`filter-btn ${activeFilter === category ? "active" : ""}`}
          onClick={() => onFilterChange(category)}
        >
          <span>{category}</span>
        </button>
      ))}
    </div>
  );
}
