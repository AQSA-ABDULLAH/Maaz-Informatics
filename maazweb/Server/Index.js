const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});