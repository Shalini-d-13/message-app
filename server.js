const express = require("express");
const cors = require("cors");

const app = express();

// Enable CORS (allow frontend from GitHub Pages / Vercel)
app.use(cors({
  origin: "*"
}));

// Parse JSON body
app.use(express.json());

// In-memory storage
let messages = [];

// Test route (so "/" doesn't show error)
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// GET all messages
app.get("/messages", (req, res) => {
  res.json(messages);
});

// POST a new message
app.post("/messages", (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  messages.push(message);

  res.json({ success: true });
});

// IMPORTANT: Use dynamic port for Render
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
