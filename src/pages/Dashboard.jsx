function Dashboard() {
  function clearData() {
    const confirmClear = window.confirm(
      "Are you sure you want to clear all demo data?"
    );

    if (confirmClear) {
      localStorage.removeItem("donors");
      localStorage.removeItem("requests");
      window.location.reload();
    }
  }

  const donors = JSON.parse(localStorage.getItem("donors")) || [];
  const requests = JSON.parse(localStorage.getItem("requests")) || [];

  const pending = requests.filter(
    (request) => request.status === "Pending"
  ).length;

  const approved = requests.filter(
    (request) => request.status === "Approved"
  ).length;
const donorGroups = {};

donors.forEach((donor) => {
  donorGroups[donor.bloodGroup] =
    (donorGroups[donor.bloodGroup] || 0) + 1;
});
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

  return (
    <div className="dashboard">
      <h1>📊 Dashboard</h1>
      <p>LifeBlood Blood Banking System Overview</p>

      <div className="dashboard-stats">
        <div className="dashboard-card">
          <h2>{donors.length}</h2>
          <p>Registered Donors</p>
        </div>

        <div className="dashboard-card">
          <h2>{requests.length}</h2>
          <p>Total Requests</p>
        </div>

        <div className="dashboard-card">
          <h2>{pending}</h2>
          <p>Pending Requests</p>
        </div>

        <div className="dashboard-card">
          <h2>{approved}</h2>
          <p>Approved Requests</p>
        </div>
      </div>

      <h2 className="stock-title">Blood Stock Overview</h2>

      <div className="dashboard-stock">
        {bloodStock.map((item) => (
          <div className="stock-item" key={item.group}>
            <div className="stock-group">{item.group}</div>

            <div>
              <strong>{item.units}</strong>
              <span> units</span>
            </div>
          </div>
        ))}
      </div>

      <div className="low-stock-alert">
        <h2>⚠️ Low Stock Alerts</h2>

        {bloodStock.filter((item) => item.units < 10).length === 0 ? (
          <p>All blood groups have sufficient stock.</p>
        ) : (
          bloodStock
            .filter((item) => item.units < 10)
            .map((item) => (
              <p key={item.group}>
                <strong>{item.group}</strong> has only {item.units} units available.
              </p>
            ))
        )}
      </div>
<h2 className="donor-title">Donors by Blood Group</h2>

<div className="donor-groups">
  {bloodStock.map((item) => (
    <div className="donor-group-card" key={item.group}>
      <div className="stock-group">{item.group}</div>
      <div>
        <strong>{donorGroups[item.group] || 0}</strong>
        <span> donors</span>
      </div>
    </div>
  ))}
</div>
      <h2 className="donor-title">Recent Donors</h2>

      <div className="donor-list">
        {donors.length === 0 ? (
          <p>No donors registered yet.</p>
        ) : (
          donors.map((donor, index) => (
            <div className="donor-item" key={index}>
              <div>
                <strong>{donor.name}</strong>
                <p>Age: {donor.age} | {donor.phone}</p>
              </div>

              <span>{donor.bloodGroup}</span>
            </div>
          ))
        )}
      </div>

      <button className="clear-btn" onClick={clearData}>
        Clear Demo Data
      </button>
    </div>
  );
}

export default Dashboard;