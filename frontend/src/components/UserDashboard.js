import React from "react";
import axios from "axios";

function UserDashboard() {
  const role = sessionStorage.getItem("role");

  if (!role) {
    window.location.href = "/";
  }

  const getProfile = async () => {
    const res = await axios.get("http://localhost:8080/api/user/profile");
    alert(res.data.message);
  };

  return (
    <div className="container mt-5">
      <h2>User Dashboard</h2>

      <button className="btn btn-success" onClick={getProfile}>
        Get Profile
      </button>
    </div>
  );
}

export default UserDashboard;