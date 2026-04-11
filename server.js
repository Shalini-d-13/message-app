const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let messages = [];

// ✅ ADD THIS (fixes "Cannot GET /")
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// existing routes
app.get("/messages", (req, res) => {
  res.json(messages);
});

app.post("/messages", (req, res) => {
  const msg = req.body.message;
  messages.push(msg);
  res.json({ success: true });
});

// ✅ CHANGE THIS (VERY IMPORTANT)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
