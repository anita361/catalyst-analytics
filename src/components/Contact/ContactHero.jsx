import "../../styles/contact.css";
import heroImg from "../../assets/images/contact_hero.png";

function Contact() {
  return (
    <section className="contact-hero">
      <div className="contact-hero-box">

        <div className="contact-hero-text">
          <h1>Contact Us</h1>
          <p>
           Get in touch with our team to discuss how we can help transform your business.
We’re here to help.
          </p>
          <button>Get In Touch Now</button>
        </div>

        <div className="contact-hero-image">
          <img src={heroImg} alt="" />
        </div>

      </div>
    </section>
  );
}

export default Contact;