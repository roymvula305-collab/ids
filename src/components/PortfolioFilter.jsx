export default function PortfolioFilter({ activeFilter, onFilterChange }) {
  const categories = ["All", "Photography", "Branding", "Marketing", "Web", "Design"];

  return (
    <div className="portfolio-filter-container">
      {categories.map((category) => (
        <button
          key={category}
          className={`filter-btn ${activeFilter === category ? "active" : ""}`}
          onClick={() => onFilterChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
