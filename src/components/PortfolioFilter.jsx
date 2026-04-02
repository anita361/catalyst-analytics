import "../styles/PortfolioFilter.css";
import { FaSearch, FaChevronDown } from "react-icons/fa";

function PortfolioFilter() {
  return (
    <section className="portfilt-section">

      {/* HEADER */}
      <div className="portfilt-header">
        <h2>Our Case Studies</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      {/* FILTER BAR */}
      <div className="portfilt-filters">

        {/* 🔍 SEARCH WITH ICON */}
        <div className="portfilt-search">
          <input type="text" placeholder="Search by keywords..." />
          <span className="search-icon">
            <FaSearch />
          </span>
        </div>

        {/* DROPDOWN BUTTONS */}
        <button className="portfilt-chip">
          Machine Learning <FaChevronDown />
        </button>

        <button className="portfilt-chip">
          Data Engineering <FaChevronDown />
        </button>

        <button className="portfilt-clear">Clear All</button>
      </div>

    </section>
  );
}

export default PortfolioFilter;