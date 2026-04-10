const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let messages = [];

app.get("/messages", (req, res) => {
  res.json(messages);
});

app.post("/messages", (req, res) => {
  const msg = req.body.message;
  messages.push(msg);
  res.json({ success: true });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});