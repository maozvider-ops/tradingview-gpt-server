const express = require("express");

const app = express();
app.use(express.json());

let latestSignal = {};

app.get("/", (req, res) => {
  res.send("TradingView GPT Server עובד");
});

app.post("/webhook", (req, res) => {
  latestSignal = req.body;
  console.log("Signal Received:", latestSignal);

  res.json({
    success: true,
    message: "Webhook received"
  });
});

app.get("/latest-signal", (req, res) => {
  res.json(latestSignal);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
