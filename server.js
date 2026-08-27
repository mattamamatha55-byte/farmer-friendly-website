const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// Frontend files serve cheyyadam
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/test", (req, res) => {
  res.json({
    message: "🌾 Farmer Friendly Backend is Running!"
  });
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`🌾 Server running on port ${PORT}`);
});
