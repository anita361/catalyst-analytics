import "../../styles/about.css";
import aiImg from "../../assets/images/experties1.png";
import blockchainImg from "../../assets/images/experties2.png";
import tradingImg from "../../assets/images/experties3.png";
import esportsImg from "../../assets/images/experties4.png";

function Expertise() {
  return (
    <section className="expertise">

      <h2>Core Expertise</h2>

      <div className="expertise-grid">

        <div className="expertise-card">
          <span>AI & Machine Learning</span>
          <img src={aiImg} alt="" />
          <p>
            Expert development of neural networks, computer vision systems,
            and NLP solutions with proven production deployment experience.
          </p>
        </div>

        <div className="expertise-card">
          <span>Blockchain</span>
          <img src={blockchainImg} alt="" />
          <p>
            Extensive experience in DeFi protocol development, smart contracts,
            and Web3 infrastructure implementation.
          </p>
        </div>

        <div className="expertise-card">
          <span>Algorithmic Trading</span>
          <img src={tradingImg} alt="" />
          <p>
            Specialized in high-frequency trading systems and ML-powered
            market analysis algorithms.
          </p>
        </div>

        <div className="expertise-card">
          <span>Esports Management</span>
          <img src={esportsImg} alt="" />
          <p>
            Pioneering data-driven approaches to team optimization and
            tournament management in competitive gaming.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Expertise;