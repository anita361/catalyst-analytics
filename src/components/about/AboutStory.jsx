import "../../styles/about.css";
import globeImg from "../../assets/images/globe.png";
import targetImg from "../../assets/images/target.png";

function AboutStory() {
  return (
    <section className="about-story">

  <div className="about-story-container">

    {/* ROW 1 */}
    <div className="about-story-grid">
      
      <div className="about-story-text">
        <h3>Our Story</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
      </div>

      <div className="about-story-image">
        <img src={globeImg} alt="" />
      </div>

    </div>

    {/* ROW 2 */}
    <div className="about-story-grid">

      <div className="about-story-image">
        <img src={targetImg} alt="" />
      </div>

      <div className="about-story-text">
        <h3>Our Mission</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
      </div>

    </div>

  </div>

</section>
  );
}

export default AboutStory;