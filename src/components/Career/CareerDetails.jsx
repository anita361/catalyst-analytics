import "../../styles/career.css";
import heroImg from "../../assets/images/career_section.png";
import ApplyForm from "./ApplyForm";
import JobSidebar from "./JobSidebar";

function CareerDetails() {
  return (
    <div className="careerdetails-container">

      {/* HERO */}
      <div className="careerdetails-hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <h1>WEB DESIGNER</h1>
        <button>Apply Now</button>
      </div>

      <div className="careerdetails-content">

        {/* LEFT SIDE */}
        <div className="careerdetails-left">

          <section className="careerdetails-section">
            <h3>ABOUT THIS POSITION</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quas, illum.
            </p>
          </section>

          <section className="careerdetails-section">
            <h3>RESPONSIBILITIES</h3>
            <ul>
              <li>Design modern UI</li>
              <li>Work with React</li>
              <li>Collaborate with team</li>
            </ul>
          </section>

          <section className="careerdetails-section">
            <h3>REQUIREMENTS</h3>
            <ul>
              <li>2+ years experience</li>
              <li>HTML, CSS, JS</li>
              <li>React knowledge</li>
            </ul>
          </section>

          <section className="careerdetails-section">
            <h3>BENEFITS</h3>
            <p>Flexible working hours, remote options, growth opportunities.</p>
          </section>

          <ApplyForm />

        </div>

        {/* RIGHT SIDE */}
        <JobSidebar />

      </div>
    </div>
  );
}

export default CareerDetails;