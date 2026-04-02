import "../../styles/career.css";
import { Link } from "react-router-dom";

const jobs = [
  {
    title: "WEB DESIGNER",
    salary: "$45,000 - $60,000 per year",
    exp: "1+ year",
    deadline: "30/09/2025",
    skills:
      "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.",
  },
  {
    title: "MOBILE APP DEVELOPER",
    salary: "$55,000 - $75,000 per year",
    exp: "2+ years",
    deadline: "15/10/2025",
    skills:
      "Proficiency in iOS or Android development (Swift, Kotlin), knowledge of mobile app design patterns, experience with mobile testing and debugging.",
  },
  {
    title: "DIGITAL MARKETING SPECIALIST",
    salary: "$50,000 - $65,000 per year",
    exp: "3+ years",
    deadline: "20/11/2025",
    skills:
      "Proficiency in SEO, SEM, and social media marketing, experience with analytics tools (Google Analytics, etc.), content marketing expertise.",
  },
  {
    title: "PROJECT MANAGER",
    salary: "$60,000 - $80,000 per year",
    exp: "5+ years",
    deadline: "05/12/2025",
    skills:
      "Strong organizational and communication skills, ability to manage project timelines and resources, experience in Agile project management methodologies.",
  },
];

function CareerJobs() {
  return (
    <section className="careerjobs">
      <h2>Open Positions</h2>

      <div className="careerjobs-grid">
        {jobs.map((job, i) => (
          <div key={i} className="careerjobs-card">

            <h3>{job.title}</h3>

            <p className="salary">Salary • {job.salary}</p>

            <div className="meta">
              <span>Experience • {job.exp}</span>
              <span>Deadline • {job.deadline}</span>
            </div>

            <h4>SKILLS</h4>
            <p className="skills">{job.skills}</p>

            <Link to="/Careerdetails" onClick={() => setOpen(false)}>
  <button>Apply Now</button>
</Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CareerJobs;