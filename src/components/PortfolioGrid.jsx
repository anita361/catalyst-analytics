import "../styles/PortfolioGrid.css";
import img1 from "../assets/images/portgrid1.png";
import img2 from "../assets/images/portgrid2.png";
import img3 from "../assets/images/portgrid3.png";
import img4 from "../assets/images/portgrid4.png";
import img5 from "../assets/images/portgrid5.png";
import img6 from "../assets/images/portgrid6.png";
import { FaArrowUp } from "react-icons/fa";

const projects = [
  { title: "MachineLearningProject", img: img1, desc: "..." },
  { title: "ProjectLoremIpsum", img: img2, desc: "..." },
  { title: "ProjectLoremIpsum", img: img3, desc: "..." },
  { title: "ProjectLoremIpsum", img: img4, desc: "..." },
  { title: "ProjectLoremIpsum", img: img5, desc: "..." },
  { title: "ProjectLoremIpsum", img: img6, desc: "..." },
];

function PortfolioGrid() {
  return (
    <section className="portgrid-section">
      <div className="portgrid-container">
        {projects.map((item, index) => (
          <div className="portgrid-card" key={index}>

              {/* IMAGE */}
              <div className="portgrid-image">
                <img src={item.img} alt={item.title} />
              </div>

              {/* CONTENT */}
              <div className="portgrid-content">

                {/* 1️⃣ TOP */}
                <div className="portgrid-top">
                  <h3>{item.title}</h3>
                  <button className="portgrid-arrow">
                    <FaArrowUp />
                  </button>
                </div>

                {/* 2️⃣ DESC */}
                <p className="portgrid-desc">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since
                </p>

                {/* 3️⃣ LIST */}
                <ul className="portgrid-list">
                  <li>Lorem Ipsum is simply dummy text</li>
                  <li>Lorem Ipsum is simply dummy text</li>
                  <li>Lorem Ipsum is simply dummy text</li>
                  <li>Lorem Ipsum is simply dummy text</li>
                  <li>Lorem Ipsum is simply dummy text</li>
                  <li>Lorem Ipsum is simply dummy text</li>
                </ul>

              </div>
            </div>
        ))}
      </div>
    </section>
  );
}

export default PortfolioGrid;