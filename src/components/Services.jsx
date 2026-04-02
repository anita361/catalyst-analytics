import "../styles/services.css";

import icon1 from "../assets/images/service1.png";
import icon2 from "../assets/images/service2.png";
import icon3 from "../assets/images/service3.png";

function Services() {
  return (
    <section className="services">
      <h2>Our Ultimate Set of Services</h2>

      <div className="service-cards">
        <div className="card">
         <img src={icon1} alt="" />
          <h3>Predictive Analytics</h3>
          <p>Forecast trends and make data-driven decisions with our advanced ML models.</p>
        </div>

        <div className="card">
            <img src={icon2} alt="" />
          <h3>AI Consulting</h3>
          <p>Expert guidance on implementing AI solutions for your business needs.</p>
        </div>

        <div className="card">
            <img src={icon3} alt="" />
          <h3>Data Engineering</h3>
          <p>Build robust data pipelines and infrastructure for ML operations.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;