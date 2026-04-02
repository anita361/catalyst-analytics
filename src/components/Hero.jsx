import "../styles/hero.css";
import robot from "../assets/robot.png";
import avatar1 from "../assets/images/avatar1.png";
import avatar2 from "../assets/images/avatar2.png";
import avatar3 from "../assets/images/avatar3.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Transforming Data <br />
          into <span>Decisions</span>
        </h1>

        <p>
          Leverage the power of machine learning and AI to unlock insights
          and drive business growth
        </p>

        <button className="primary-btn">Book a Meeting</button>

        <div className="clients">
          <div className="avatars">
            <img src={avatar1} alt="" />
            <img src={avatar2} alt="" />
            <img src={avatar3} alt="" />
          </div>
          <p>Over 100+ clients have worked with us</p>
        </div>
      </div>

      <div className="hero-right">
        <img src={robot} alt="robot" />
      </div>
    </section>
  );
}

export default Hero;