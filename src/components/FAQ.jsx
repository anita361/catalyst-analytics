import { useState } from "react";
import "../styles/faq.css";

function FAQ() {
  const [open, setOpen] = useState(0);

  const data = [
    {
      q: "What services does Catalyst Analytics provide?",
      a: "Catalyst Analytics offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
    },
    {
      q: "Lorem Ipsum is simply dummy text of the printing",
      a: "Answer for question 2",
    },
    {
      q: "Lorem Ipsum is simply dummy text of the printing",
      a: "Answer for question 3",
    },
    {
      q: "Lorem Ipsum is simply dummy text of the printing",
      a: "Answer for question 4",
    },
    {
      q: "Lorem Ipsum is simply dummy text of the printing",
      a: "Answer for question 5",
    },
  ];

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>

      <div className="faq-container">
        {data.map((item, i) => (
          <div
            key={i}
            className={`faq-item ${open === i ? "active" : ""}`}
            onClick={() => setOpen(open === i ? null : i)}
          >
            {/* LEFT NUMBER */}
            <div className="faq-number">
              {String(i + 1).padStart(2, "0")}
            </div>

            {/* CONTENT */}
            <div className="faq-content">
              <h4>{item.q}</h4>
              {open === i && <p>{item.a}</p>}
            </div>

            {/* RIGHT ICON */}
            <div className="faq-icon">
              {open === i ? "×" : "+"}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;