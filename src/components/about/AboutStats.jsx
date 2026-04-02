function AboutStats() {
  const stats = [
    { label: "CLIENTS", value: "200+" },
    { label: "PROJECTS", value: "280+" },
    { label: "HAPPY CLIENTS", value: "100%" },
    { label: "FOLLOWER", value: "420K" },
    { label: "Years Of Experience", value: "10+" },
  ];

  return (
    <section className="about-stats">
      {stats.map((item, i) => (
        <div className="about-stat-card" key={i}>
          <p>{item.label}</p>
          <h3>{item.value}</h3>
        </div>
      ))}
    </section>
  );
}
export default AboutStats;