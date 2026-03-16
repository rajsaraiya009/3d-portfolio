import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Data Scientist</h4>
                <h5>Mandrill Tech</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              I am leading AI transformation for a $2B conglomerate. I developed scalable ML systems,
              real-time dashboards with Snowflake/Streamlit, and license plate detection systems for JPJ.
              I specialize in customer segmentation and financial behavior profiling.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Scientist / Analyst</h4>
                <h5>Acuity Tech</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              I developed high-precision eKYC and Face Mask detection systems achieving 98% accuracy.
              I led EDA on COVID-19 datasets to support strategic policymaking.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Development Executive</h4>
                <h5>Swan Solution & Services</h5>
              </div>
              <h3>2016 - 2018</h3>
            </div>
            <p>
              I drove a 25% improvement in customer retention through data-driven relationship management.
              I negotiated and closed high-value enterprise deals across the Western region.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
