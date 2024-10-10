// Import Express
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies (if needed later)
app.use(express.json());

// Basic route to check server
app.get('/', (req, res) => {
  res.send('Assignment Submission Portal Server is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
