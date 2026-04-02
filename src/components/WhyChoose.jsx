import "../styles/why.css";
import icon from "../assets/images/quality-icons.png"; 
function WhyChoose() {
  return (
    <section className="why">
      <h2>Why Choose Us</h2>

      <div className="why-container">
        <div className="circle">
          <img src={icon} alt="" />
          <h4>Innovation</h4>
          <p>
            Pushing boundaries in AI, blockchain, and quantitative trading
            to deliver cutting-edge solutions.
          </p>
        </div>

        <div className="circle">
          <img src={icon} alt="" />
          <h4>Collaboration</h4>
          <p>
            Working closely with clients to develop tailored solutions
            that drive measurable success.
          </p>
        </div>

        <div className="circle">
          <img src={icon} alt="" />
          <h4>Excellence</h4>
          <p>
            Maintaining the highest standards in code quality,
            system performance, and client outcomes.
          </p>
        </div>

        <div className="circle">
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

export default WhyChoose;