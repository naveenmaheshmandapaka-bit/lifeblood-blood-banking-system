import { useState } from "react";

function DonorRegistration() {
const [name, setName] = useState("");
const [bloodGroup, setBloodGroup] = useState("");
const [phone, setPhone] = useState("");
const [age, setAge] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const donor = {
      name,
      bloodGroup,
      age,
      phone
    };

    const donors = JSON.parse(localStorage.getItem("donors")) || [];
    donors.push(donor);
    localStorage.setItem("donors", JSON.stringify(donors));

    alert("Donor registered successfully!");

    setName("");
    setBloodGroup("");
    setAge("");
    setPhone("");
  }

  return (
    <div className="form-page">
      <div className="form-card">
        <h1>🩸 Donate Blood</h1>
        <p>Become a donor and help save lives.</p>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Blood Group</label>
          <select
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            required
          >
            <option value="">Select Blood Group</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>O+</option>
            <option>O-</option>
            <option>AB+</option>
            <option>AB-</option>
          </select>
<label>Age</label>
<input
  type="number"
  placeholder="Enter your age"
  value={age}
  onChange={(e) => setAge(e.target.value)}
  min="18"
  max="65"
  required
/>
          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <button type="submit">Register as Donor</button>
        </form>
      </div>
    </div>
  );
}

export default DonorRegistration;