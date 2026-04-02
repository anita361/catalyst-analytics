import "../../styles/about.css";
import icon from "../../assets/images/quality-icons.png";

function OurValue() {
  return (
    <section className="about-values">
      <h2>Our Value</h2>

      <div className="about-values-container">
        <div className="about-value-card">
          <img src={icon} alt="" />
          <h4>Innovation</h4>
          <p>
            Pushing boundaries in AI, blockchain, and quantitative trading
            to deliver cutting-edge solutions.
          </p>
        </div>

        <div className="about-value-card">
          <img src={icon} alt="" />
          <h4>Collaboration</h4>
          <p>
            Working closely with clients to develop tailored solutions
            that drive measurable success.
          </p>
        </div>

        <div className="about-value-card">
          <img src={icon} alt="" />
          <h4>Excellence</h4>
          <p>
            Maintaining the highest standards in code quality,
            system performance, and client outcomes.
          </p>
        </div>

        <div className="about-value-card">
          <img src={icon} alt="" />
          <h4>Integrity</h4>
          <p>
            Operating with transparency and ethical considerations
            at the forefront of all decisions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurValue;