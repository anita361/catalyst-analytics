function ApplyForm() {
  return (
    <div className="careerapplyform-container">
      <h3 className="careerapplyform-title">Apply Now</h3>

      <div className="careerapplyform-row">
        <input
          className="careerapplyform-input"
          type="text"
          placeholder="First Name*"
        />
        <input
          className="careerapplyform-input"
          type="text"
          placeholder="Last Name*"
        />
      </div>

      <input
        className="careerapplyform-input"
        type="email"
        placeholder="Email*"
      />

      <input
        className="careerapplyform-file"
        type="file"
      />

      <textarea
        className="careerapplyform-textarea"
        placeholder="Application Information"
      ></textarea>

      <button className="careerapplyform-btn">
        Submit Application
      </button>
    </div>
  );
}

export default ApplyForm;