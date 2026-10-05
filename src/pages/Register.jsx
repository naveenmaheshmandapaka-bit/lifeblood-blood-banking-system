import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(
      (user) => user.username === username
    );

    if (existingUser) {
      alert("Username already exists!");
      return;
    }

    const newUser = {
      name,
      email,
      username,
      password,
      role: "user"
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! Please login.");

    navigate("/login");
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>🩸 LifeBlood</h1>
        <p>Create your User Account</p>

        <form onSubmit={handleRegister}>
          <label>Full Name</label>

          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Username</label>

          <input
            type="text"
            placeholder="Create username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn">
            Register
          </button>
        </form>

        <p className="register-link">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;