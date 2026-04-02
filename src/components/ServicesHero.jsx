import "../styles/servicesHero.css";
import heroImg from "../assets/images/hero2.png";

function ServicesHero() {
  return (
    <section className="services-hero">
      <div className="hero-box">

        {/* LEFT */}
        <div className="hero-text">
          <h2>
            Our Comprehensive <span>Digital Solutions</span>
          </h2>

          <p>
            At Catalyst Analytics, we offer a comprehensive suite of digital
            solutions designed to propel your business to new heights in the
            digital realm. With a team of skilled professionals, cutting-edge
            technologies, and a passion for innovation, we are committed to
            delivering exceptional results for every project we undertake.
          </p>
        </div>

        {/* RIGHT */}
        <div className="hero-image">
          <img src={heroImg} alt="hero" />
        </div>

      </div>
    </section>
  );
}

export default ServicesHero;