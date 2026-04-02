import "../styles/brands.css";

import spotify from "../assets/images/spotify.png";
import slack from "../assets/images/slack.png";
import amazon from "../assets/images/amazon.png";
import adobe from "../assets/images/adobe.png";
import zapier from "../assets/images/zapier.png";

function Brands() {
  return (
    <section className="brands">
      <div className="brands-container">
        <img src={spotify} alt="spotify" />
        <img src={slack} alt="slack" />
        <img src={amazon} alt="amazon" />
        <img src={adobe} alt="adobe" />
        <img src={zapier} alt="zapier" />
      </div>
    </section>
  );
}

export default Brands;