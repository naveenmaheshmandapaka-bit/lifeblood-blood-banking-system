import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div>
          <p className="tagline">🩸 EVERY DROP COUNTS</p>

          <h1>
            Donate Blood.
            <br />
            Save Lives.
          </h1>

          <p>
            LifeBlood connects blood donors, hospitals and blood banks
            to make blood available when it is needed most.
          </p>

          <div className="hero-buttons">
            <Link to="/donor">Donate Blood</Link>
            <Link to="/request">Request Blood</Link>
          </div>
        </div>

        <div className="blood-icon">🩸</div>
      </section>

      <section className="stats">
        <div>
          <h2>8</h2>
          <p>Blood Groups</p>
        </div>

        <div>
          <h2>24/7</h2>
          <p>Emergency Support</p>
        </div>

        <div>
          <h2>100%</h2>
          <p>Life Saving Mission</p>
        </div>
      </section>

      <section className="about">
        <h2>How LifeBlood Helps</h2>

        <div className="cards">
          <div className="card">
            <h3>🩸 Blood Donation</h3>
            <p>
              Register yourself as a donor and help someone in need.
            </p>
          </div>

          <div className="card">
            <h3>🏥 Blood Requests</h3>
            <p>
              Hospitals can request the required blood group and units.
            </p>
          </div>

          <div className="card">
            <h3>📦 Blood Inventory</h3>
            <p>
              Check available blood stock across different blood groups.
            </p>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose LifeBlood?</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>⚡ Fast Requests</h3>
            <p>
              Submit and manage blood requests quickly during emergencies.
            </p>
          </div>

          <div className="feature-card">
            <h3>🔒 Simple Management</h3>
            <p>
              Manage donors, blood stock and hospital requests in one place.
            </p>
          </div>

          <div className="feature-card">
            <h3>❤️ Save Lives</h3>
            <p>
              Connect blood donors and hospitals to help patients in need.
            </p>
          </div>
        </div>
      </section>

      <section className="emergency">
        <div>
          <h2>🚨 Need Blood Urgently?</h2>

          <p>
            Submit an emergency blood request and help connect patients
            with available blood resources.
          </p>
        </div>

        <Link to="/request">Request Blood Now</Link>
      </section>
    </div>
  );
}

export default Home;