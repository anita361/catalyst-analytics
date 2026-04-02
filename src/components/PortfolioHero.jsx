import "../styles/portfolioHero.css";
import heroImg from "../assets/images/port_hero.png";

function PortfolioHero() {
  return (
    <section className="port-hero">
      <div className="port-hero-box">

        {/* LEFT TEXT */}
        <div className="port-hero-text">
          <h1>Our Work, Your Future</h1>
          <p>
            From machine learning platforms to blockchain protocols and predictive
            analytics tools, here's a selection of real-world solutions we've
            delivered for forward-thinking companies.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="port-hero-image">
          <img src={heroImg} alt="dashboard" />
        </div>

      </div>
    </section>
  );
}

export default PortfolioHero;