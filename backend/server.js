const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Mock Users DB
const users = [
  { username: "user1", password: "123", role: "USER" },
  { username: "admin1", password: "123", role: "ADMIN" }
];

// LOGIN API
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  const foundUser = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!foundUser) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  return res.json({
    username: foundUser.username,
    role: foundUser.role
  });
});

// USER API
app.get("/api/user/profile", (req, res) => {
  res.json({
    message: "User profile data fetched successfully",
    data: {
      name: "Normal User",
      email: "user@example.com"
    }
  });
});

// ADMIN API
app.get("/api/admin/dashboard", (req, res) => {
  res.json({
    message: "Admin dashboard data fetched successfully",
    stats: {
      users: 120,
      revenue: "₹50,000"
    }
  });
});

app.listen(8080, () => {
  console.log("Backend running on http://localhost:8080");
});