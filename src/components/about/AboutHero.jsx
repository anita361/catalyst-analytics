import "../../styles/about.css";
import heroImg from "../../assets/images/about_hero.png";

function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-box">

        <div className="about-hero-text">
          <h1>We’re Engineers of Intelligent Change</h1>
          <p>
            Pioneering the intersection of AI, blockchain, and quantitative finance
            to deliver innovative solutions that drive business transformation
          </p>
          <button>Get In Touch</button>
        </div>

        <div className="about-hero-image">
          <img src={heroImg} alt="" />
        </div>

      </div>
    </section>
  );
}

export default AboutHero;