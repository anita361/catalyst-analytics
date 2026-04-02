import "../../styles/career.css";
import { FaSearch, FaChevronDown } from "react-icons/fa";

function CareerFilter() {
  return (
    <section className="careerfilt-section">
  <div className="careerfilt-bar">

    {/* DROPDOWNS */}
    <button className="careerfilt-chip">
      Departments <FaChevronDown />
    </button>

    <button className="careerfilt-chip">
      Experience <FaChevronDown />
    </button>

    <button className="careerfilt-chip">
      Job Type <FaChevronDown />
    </button>

    <button className="careerfilt-chip">
      Workplace Type <FaChevronDown />
    </button>

    {/* SEARCH */}
    <div className="careerfilt-search">
      <input type="text" placeholder="Search by keywords..." />
      <span className="careerfilt-search-icon">
        <FaSearch />
      </span>
    </div>

  </div>
</section>
  );
}

export default CareerFilter;