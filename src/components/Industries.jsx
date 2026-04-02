import "../styles/industries.css";
import i1 from "../assets/images/industry1.png";
import i2 from "../assets/images/industry2.png";
import i3 from "../assets/images/industry3.png";
import i4 from "../assets/images/industry4.png";
import i5 from "../assets/images/industry5.png";
import i6 from "../assets/images/industry6.png";

const industries = [
  {
    title: "Financial Services & Trading",
    image: i1,
    desc: "Advanced analytics and trading solutions for financial institutions.",
    points: [
      "Algorithmic trading systems",
      "Risk management",
      "Market analysis",
      "Fraud detection",
    ],
  },
  {
    title: "Blockchain & Crypto",
    image: i2,
    desc: "Cutting-edge blockchain solutions and DeFi protocol development.",
    points: [
      "DeFi protocols",
      "Smart contracts",
      "Token systems",
      "Blockchain analytics",
    ],
  },
  {
    title: "Esports & Gaming",
    image: i3,
    desc: "Data-driven solutions for esports teams, tournaments, and gaming platforms.",
    points: [
      "Player performance analytics",
      "Tournament management",
      "Team optimization",
      "Gaming platform analytics",
    ],
  },
  {
    title: "Healthcare & Life Sciences",
    image: i4,
    desc: "AI solutions for medical imaging, patient care optimization, and drug discovery.",
    points: [
      "Medical image analysis",
      "Patient outcome prediction",
      "Clinical trial optimization",
      "Drug development",
    ],
  },
  {
    title: "Manufacturing",
    image: i5,
    desc: "Smart manufacturing solutions with predictive maintenance and quality control.",
    points: [
      "Predictive maintenance",
      "Quality control automation",
      "Supply chain optimization",
      "Process optimization",
    ],
  },
  {
    title: "Retail & E-commerce",
    image: i6,
    desc: "AI-powered solutions for personalization and inventory management.",
    points: [
      "Demand forecasting",
      "Recommendation systems",
      "Inventory optimization",
      "Customer analytics",
    ],
  },
];

function Industries() {
  return (
    <section className="inds">
      <h2>Industries We Serve</h2>
      <p className="inds-sub">
        Delivering innovative solutions across diverse industries with deep domain expertise
      </p>

      <div className="inds-grid">
        {industries.map((item, i) => (
          <div className="inds-card" key={i}>
            {/* ✅ FIXED HERE */}
            <img src={item.image} alt="icon" className="inds-icon" />

            <h3>{item.title}</h3>
            <p className="inds-desc">{item.desc}</p>

            <div className="inds-points">
              {item.points.map((p, index) => (
                <span key={index}>• {p}</span>
              ))}
            </div>

            <button className="inds-btn">
              <span className="inds-arrow">→</span>
              <span className="inds-text">Book a Call</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Industries;