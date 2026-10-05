import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [role, setRole] = useState("user");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    if (role === "admin") {
      if (username === "rocklee" && password === "rocklee27") {
        localStorage.setItem("role", "admin");
        navigate("/dashboard");
      } else {
        alert("Invalid admin username or password!");
      }
    } else {
      if (username && password) {
        localStorage.setItem("role", "user");
        localStorage.setItem("username", username);
        navigate("/home");
      } else {
        alert("Please enter username and password!");
      }
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>🩸 LifeBlood</h1>
        <p>Login to continue</p>

        <div className="role-buttons">
          <button
            type="button"
            className={role === "user" ? "role-active" : ""}
            onClick={() => setRole("user")}
          >
            👤 User
          </button>

          <button
            type="button"
            className={role === "admin" ? "role-active" : ""}
            onClick={() => setRole("admin")}
          >
            🛡️ Admin
          </button>
        </div>

        <form onSubmit={handleLogin}>
          <label>Username</label>

          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        
      </div>
    </div>
  );
}

export default Login;