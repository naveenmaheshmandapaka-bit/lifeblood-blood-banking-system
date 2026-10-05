import { useState } from "react";

function BloodRequest() {
  const [hospital, setHospital] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [units, setUnits] = useState("");
  const [urgency, setUrgency] = useState("Normal");

  function handleSubmit(e) {
    e.preventDefault();

    const request = {
  hospital,
  bloodGroup,
  units,
  urgency,
  status: "Pending"
};

    const requests = JSON.parse(localStorage.getItem("requests")) || [];
    requests.push(request);
    localStorage.setItem("requests", JSON.stringify(requests));

    alert("Blood request submitted successfully!");

    setHospital("");
    setBloodGroup("");
    setUnits("");
    setUrgency("Normal");
  }

  return (
    <div className="form-page">
      <div className="form-card">
        <h1>🚑 Request Blood</h1>
        <p>Submit a blood request for a hospital or patient.</p>

        <form onSubmit={handleSubmit}>
          <label>Hospital Name</label>
          <input
            type="text"
            placeholder="Enter hospital name"
            value={hospital}
            onChange={(e) => setHospital(e.target.value)}
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

          <label>Required Units</label>
          <input
            type="number"
            placeholder="Enter number of units"
            value={units}
            onChange={(e) => setUnits(e.target.value)}
            min="1"
            required
          />
          <label>Urgency Level</label>

<select
  value={urgency}
  onChange={(e) => setUrgency(e.target.value)}
  required
>
  <option value="Normal">🟢 Normal</option>
  <option value="Urgent">🟠 Urgent</option>
  <option value="Emergency">🔴 Emergency</option>
</select>

          <button type="submit">Submit Blood Request</button>
        </form>
      </div>
    </div>
  );
}

export default BloodRequest;