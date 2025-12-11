const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(express.json());

// Login API (username: user, password: pass)
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === "user" && password === "pass") {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// Get questions API
app.get('/questions', (req, res) => {
  const data = fs.readFileSync('./questions/sample.json', 'utf8');
  res.json(JSON.parse(data));
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
