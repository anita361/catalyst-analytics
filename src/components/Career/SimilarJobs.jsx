import "../../styles/career.css";
function SimilarJobs() {
  const jobs = [
    {
      title: "WEB DESIGNER",
      salary: "$45,000 - $60,000",
      experience: "1+ year",
      deadline: "30/09/2025",
      skills: "UI/UX, Photoshop, Responsive Design"
    },
    {
      title: "MOBILE APP DEVELOPER",
      salary: "$55,000 - $75,000",
      experience: "2+ years",
      deadline: "15/10/2025",
      skills: "Android, iOS, Kotlin, Swift"
    },
    {
      title: "DIGITAL MARKETING SPECIALIST",
      salary: "$50,000 - $65,000",
      experience: "3+ years",
      deadline: "20/11/2025",
      skills: "SEO, SEM, Analytics"
    },
    {
      title: "PROJECT MANAGER",
      salary: "$60,000 - $80,000",
      experience: "5+ years",
      deadline: "05/12/2025",
      skills: "Agile, Leadership"
    }
  ];

  return (
    <div className="careersimilar-container">
      <div className="careersimilar-grid">
        {jobs.map((job, index) => (
          <div className="careersimilar-card" key={index}>
            
            <h3 className="careersimilar-jobtitle">{job.title}</h3>

            <div className="careersimilar-tags">
              <span>Salary : {job.salary}</span>
              <span>Experience : {job.experience}</span>
              <span>Deadline : {job.deadline}</span>
            </div>

            <h4>SKILLS</h4>
            <p className="careersimilar-skills">{job.skills}</p>

            <button className="careersimilar-btn">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimilarJobs;