const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Route for root URL
app.get("/", (req, res) => {
  res.send("Welcome to the Crypto Tracker Backend! Use /api/crypto-prices to fetch data.");
});


app.get("/api/crypto-prices", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ripple&vs_currencies=usd"
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching crypto prices:", error);
    res.status(500).json({ error: "Failed to fetch crypto prices" });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});