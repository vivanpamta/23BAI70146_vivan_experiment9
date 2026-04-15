import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const role = sessionStorage.getItem("role");

  const logout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">RBAC App</Link>

      <div>
        {role === "USER" && (
          <Link className="btn btn-info me-2" to="/user">User</Link>
        )}

        {role === "ADMIN" && (
          <Link className="btn btn-warning me-2" to="/admin">Admin</Link>
        )}

        {role && (
          <button className="btn btn-danger" onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;