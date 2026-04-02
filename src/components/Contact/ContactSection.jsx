import "../../styles/contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function ContactSection() {
  return (
    <section className="contactsec">

      <div className="contactsec-container">

        {/* LEFT - FORM */}
        <div className="contactsec-form">

          <h3>Send Us a Message</h3>

          <div className="row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>

          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Company" />

          <div className="phone-row">
            <span className="flag">+1</span>
            <input type="text" placeholder="Phone Number" />
          </div>

          <textarea placeholder="Message"></textarea>

          <button className="send-btn">Send ✈</button>
        </div>

        {/* RIGHT */}
        <div className="contactsec-right">

          {/* CONTACT INFO */}
          <div className="contact-card">
            <h4>Contact Information</h4>

            <p><FaEnvelope /> contact@catalystanalytics.io</p>
            <p><FaPhone /> (469) 712-4672</p>
            <p><FaMapMarkerAlt /> 5511 Parkcrest Dr, Suite 103<br />Austin, TX 78731</p>
          </div>

          {/* MEETING CARD */}
          <div className="contact-card">
            <h4>Contact Information</h4>
            <p>
              Want to discuss your project in detail? Schedule a free 30-minute consultation with our team of experts.
            </p>

            <button className="meet-btn">Book a Meeting</button>
          </div>

        </div>

      </div>

    </section>
  );
}

export default ContactSection;