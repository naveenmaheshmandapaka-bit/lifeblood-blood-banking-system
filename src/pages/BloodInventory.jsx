import { useState } from "react";

function BloodInventory() {
  const [search, setSearch] = useState("");

  const bloodStock = [
    { group: "A+", units: 24 },
    { group: "A-", units: 8 },
    { group: "B+", units: 18 },
    { group: "B-", units: 5 },
    { group: "O+", units: 30 },
    { group: "O-", units: 6 },
    { group: "AB+", units: 12 },
    { group: "AB-", units: 3 }
  ];

  const filteredStock = bloodStock.filter((item) =>
    item.group.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="inventory-page">
      <h1>🩸 Blood Inventory</h1>
      <p>Current blood stock availability</p>

      <div className="inventory-controls">
  <input
    className="search-box"
    type="text"
    placeholder="Search blood group..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <select
    className="blood-filter"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  >
    <option value="">All Blood Groups</option>
    <option value="A+">A+</option>
    <option value="A-">A-</option>
    <option value="B+">B+</option>
    <option value="B-">B-</option>
    <option value="O+">O+</option>
    <option value="O-">O-</option>
    <option value="AB+">AB+</option>
    <option value="AB-">AB-</option>
  </select>
</div>

      <div className="inventory-grid">
        {filteredStock.map((item) => (
          <div className="blood-card" key={item.group}>
            <div className="blood-circle">{item.group}</div>

            <h2>{item.group}</h2>

            <p>
              <strong>{item.units}</strong> units available
            </p>

            <span className={item.units < 10 ? "low" : "available"}>
              {item.units < 10 ? "Low Stock" : "Available"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BloodInventory;