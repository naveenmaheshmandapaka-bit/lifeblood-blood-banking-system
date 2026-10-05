import { useState } from "react";

function Requests() {
  const [requests, setRequests] = useState(
    JSON.parse(localStorage.getItem("requests")) || []
  );

  function updateStatus(index, status) {
    const updatedRequests = [...requests];
    updatedRequests[index].status = status;

    setRequests(updatedRequests);
    localStorage.setItem("requests", JSON.stringify(updatedRequests));
  }

  return (
    <div className="requests-page">
      <h1>📋 Blood Requests</h1>
      <p>Manage blood requests from hospitals.</p>

      {requests.length === 0 ? (
        <div className="empty-box">
          <h2>No Blood Requests</h2>
          <p>There are currently no requests.</p>
        </div>
      ) : (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Hospital</th>
                <th>Blood Group</th>
                <th>Units</th>
                <th>Urgency</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {requests.map((request, index) => (
                <tr key={index}>
                  <td>{request.hospital}</td>
                  <td>
                    <strong>{request.bloodGroup}</strong>
                  </td>
                  <td>{request.units}</td>
                  <td>
                    <span className={`urgency ${request.urgency?.toLowerCase()}`}>
    {request.urgency || "Normal"}
  </span>
</td>

<td>
  <span
                      className={
                        request.status === "Approved"
                          ? "status approved"
                          : request.status === "Rejected"
                          ? "status rejected"
                          : "status pending"
                      }
                    >
                      {request.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="approve-btn"
                      onClick={() => updateStatus(index, "Approved")}
                    >
                      Approve
                    </button>

                    <button
                      className="reject-btn"
                      onClick={() => updateStatus(index, "Rejected")}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Requests;