const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "🌾 Farmer Friendly Backend is Running!"
  });
});

// Farmer help API
app.post("/ask", (req, res) => {
  const { question } = req.body;

  let answer = "మీ ప్రశ్నను మళ్లీ వివరంగా అడగండి.";

  if (question) {
    const q = question.toLowerCase();

    if (q.includes("water") || q.includes("irrigation")) {
      answer = "పంటకు అవసరమైన మేరకే నీరు ఇవ్వండి. నేల తేమను బట్టి నీరు పెట్టండి.";
    } else if (q.includes("fertilizer")) {
      answer = "మీ పంట మరియు నేల పరిస్థితిని బట్టి ఎరువులను ఉపయోగించండి.";
    } else if (q.includes("pest")) {
      answer = "పురుగు సమస్యను గుర్తించి, వ్యవసాయ నిపుణుల సూచనతో సరైన చర్య తీసుకోండి.";
    } else if (q.includes("weather")) {
      answer = "వాతావరణ మార్పులను చూసి నీటిపారుదల మరియు పంట పనులను ప్లాన్ చేయండి.";
    }
  }

  res.json({
    question,
    answer
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🌾 Server running on port ${PORT}`);
});
