import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    localStorage.removeItem("name");
    navigate("/");
  }

  if (!role) {
    return null;
  }

  return (
    <nav>
      <h2>🩸 LifeBlood</h2>

      <div>
        {role === "user" && (
          <>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/donor">Donate Blood</NavLink>
            <NavLink to="/inventory">Inventory</NavLink>
            <NavLink to="/request">Request Blood</NavLink>
            <NavLink to="/requests">My Requests</NavLink>
          </>
        )}

        {role === "admin" && (
          <>
            <NavLink to="/dashboard">Admin Dashboard</NavLink>
            <NavLink to="/inventory">Inventory</NavLink>
            <NavLink to="/requests">Blood Requests</NavLink>
          </>
        )}

        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;