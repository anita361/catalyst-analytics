import "../../styles/about.css";

function TrackRecord() {
  return (
    <section className="track">

      {/* TOP */}
      <h2>Our Track Record</h2>

      <div className="track-grid">
        <div className="track-card">
          <h3>12+</h3>
          <h4>Years AI & ML Development</h4>
          <p>Building and deploying production-grade ML systems and AI solutions</p>
        </div>

        <div className="track-card">
          <h3>$2B+</h3>
          <h4>Trading Volume Tested</h4>
          <p>Through our battle-tested algorithmic trading systems</p>
        </div>

        <div className="track-card">
          <h3>100+</h3>
          <h4>Blockchain Projects Audited</h4>
          <p>Including DeFi protocols and smart contracts</p>
        </div>

        <div className="track-card">
          <h3>25+</h3>
          <h4>Esports Teams Audited</h4>
          <p>With data-driven performance optimization</p>
        </div>
      </div>

      {/* BOTTOM */}
      <h2 className="mt">Operational Impact</h2>

      <div className="track-grid">
        <div className="track-card">
          <h3>99.99%</h3>
          <h4>System Uptime</h4>
          <p>For critical ML and trading infrastructure</p>
        </div>

        <div className="track-card">
          <h3>60%</h3>
          <h4>Cost Reduction</h4>
          <p>Average operational cost savings for clients</p>
        </div>

        <div className="track-card">
          <h3>85%</h3>
          <h4>Automation Rate</h4>
          <p>In client workflow optimization</p>
        </div>

        <div className="track-card">
          <h3>3x</h3>
          <h4>Performance Gain</h4>
          <p>Average improvement in system efficiency</p>
        </div>
      </div>

    </section>
  );
}

export default TrackRecord;