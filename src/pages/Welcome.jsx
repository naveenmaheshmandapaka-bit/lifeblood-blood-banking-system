import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>🩸 LifeBlood</h1>

        <p>Blood Banking System</p>

        <h2>Welcome!</h2>

        <p>
          Connect donors, hospitals and blood banks
          to help save lives.
        </p>

        <button
          className="login-btn"
          onClick={() => navigate("/login")}
        >
          Login
        </button>

        <button
          className="login-btn"
          onClick={() => navigate("/register")}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Welcome;