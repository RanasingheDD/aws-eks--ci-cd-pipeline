const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/health', (req, res) => {
  res.json({ message: "Hi from Backend!" });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
