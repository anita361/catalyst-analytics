import { useState } from "react";
import "../styles/testimonials.css";

const data = [
  {
    text: "We saw businesses drowning in data but struggling to make sense of it. Decisions were slow, teams were overwhelmed, and insights were buried.",
    name: "John Doe",
  },
  {
    text: "That’s when we knew there had to be a better way — a smarter, faster, more intuitive solution.",
    name: "John Doe",
  },
  {
    text: "So we built a platform that empowers companies to transform raw data into real-time decisions using the power of AI.",
    name: "John Doe",
  },
];

function Testimonials() {
  const [index, setIndex] = useState(1);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="testimonials">
      <h2>Why We Started</h2>

      <div className="slider">

        {/* LEFT BUTTON */}
        <button className="nav-btn left" onClick={prev}>←</button>

        {/* SLIDES */}
        <div className="slides">
          {data.map((item, i) => {
            let position = "nextSlide";

            if (i === index) position = "activeSlide";
            if (i === index - 1 || (index === 0 && i === data.length - 1)) {
              position = "prevSlide";
            }

            return (
              <div className={`slide ${position}`} key={i}>
                <span className="quote">“</span>
                <p>{item.text}</p>
                <h4>{item.name}</h4>
                <small>Founder & CEO</small>
              </div>
            );
          })}
        </div>

        {/* RIGHT BUTTON */}
        <button className="nav-btn right" onClick={next}>→</button>
      </div>

      <button className="primary-btn">Learn More</button>
    </section>
  );
}

export default Testimonials;