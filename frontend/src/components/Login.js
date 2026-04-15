import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:8080/api/login", {
        username,
        password
      });

      sessionStorage.setItem("user", res.data.username);
      sessionStorage.setItem("role", res.data.role);

      if (res.data.role === "ADMIN") {
        window.location.href = "/admin";
      } else {
        window.location.href = "/user";
      }
    } catch (err) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-3">Login</h2>

      <input
        className="form-control mb-2"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        className="form-control mb-3"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn btn-primary w-100" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;