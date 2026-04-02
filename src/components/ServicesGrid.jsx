import "../styles/servicesGrid.css";

import s1 from "../assets/images/Ai.png";
import s2 from "../assets/images/service4.png";
import s3 from "../assets/images/service5.png";
import s4 from "../assets/images/service6.png";
import s5 from "../assets/images/service7.png";
import s6 from "../assets/images/service8.png";

const services = [
  {
    title: "Machine Learning Solutions",
    img: s1,
    desc: "Custom ML models designed and optimized for your specific business challenges, leveraging cutting-edge deep learning techniques.",
    points: [
      "Deep learning model development",
      "Neural network architecture design",
      "Computer vision solutions",
      "Natural language processing",
      "Model optimization and scaling",
    ],
  },
  {
    title: "Blockchain Development",
    img: s2,
    desc: "End-to-end blockchain solutions from smart contract development to decentralized application architecture.",
    points: [
      "Smart contract development",
      "DeFi protocol design",
      "Blockchain integration",
      "Web3 development",
      "Token implementation",
    ],
  },
  {
    title: "Algorithmic Trading",
    img: s3,
    desc: "Advanced trading algorithms and systems leveraging ML for market analysis and automated execution.",
    points: [
      "Trading strategy development",
      "High-frequency trading systems",
      "Backtesting frameworks",
      "Risk management",
      "Automation systems",
    ],
  },
  {
    title: "Data Engineering",
    img: s4,
    desc: "Build robust data infrastructure that scales with your business needs using modern data engineering practices.",
    points: [
      "Data pipeline development",
      "Big data processing",
      "Data warehousing",
      "Cloud infrastructure",
      "Real-time processing",
    ],
  },
  {
    title: "Predictive Analytics",
    img: s5,
    desc: "Forecast trends using advanced analytics models to support business decision-making.",
    points: [
      "Forecasting models",
      "Data modeling",
      "Insights generation",
      "Decision support",
      "Trend analysis",
    ],
  },
  {
    title: "MLOps & Infrastructure",
    img: s6,
    desc: "Deploy, monitor, and scale ML systems efficiently with modern MLOps practices.",
    points: [
      "CI/CD pipelines",
      "Monitoring systems",
      "Model deployment",
      "Cloud integration",
      "Automation tools",
    ],
  },
];

function ServicesGrid() {
  return (
    <section className="services-grid">
      <h2>Our Services</h2>
      <p className="sub">
        Comprehensive AI, blockchain, and analytics solutions powered by deep expertise in machine learning and data engineering.
      </p>

      <div className="grid">
        {services.map((item, i) => (
          <div className={`card ${i === 0 ? "active" : ""}`} key={i}>
            
            <img src={item.img} alt="" className="icon" />

            <h3>{item.title}</h3>

            <p className="desc">{item.desc}</p>

            <div className="points">
              {item.points.map((p, idx) => (
                <span key={idx}>• {p}</span>
              ))}
            </div>

            <button className="btn">
              <span className="arrow">&rarr;</span>
              <span className="text">Book a Call</span>
            </button>

          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesGrid;