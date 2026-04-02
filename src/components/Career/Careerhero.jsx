import "../../styles/career.css";
import heroImg from "../../assets/images/career_hero.png";

function CareerHero() {
  return (
    <section className="career-hero">
      <div className="career-hero-box">

        <div className="career-hero-text">
          <h1>Build the Future with Us</h1>
          <p>
            We’re a team of builders, thinkers, and explorers using AI, machine learning, and blockchain to solve meaningful problems.
          </p>
          <button>Explore Open Positions</button>
        </div>

        <div className="career-hero-image">
          <img src={heroImg} alt="" />
        </div>

      </div>
    </section>
  );
}

export default CareerHero;