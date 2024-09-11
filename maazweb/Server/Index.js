const express = require("express");
const cors = require("cors");  
require("dotenv").config();  // Load environment variables before using them

const port = process.env.PORT;
const app = express();

// Routes
const userRoutes = require('./routes/Users.js');
const blogsRoutes = require("./routes/Blogs.js");
const teamRoutes = require("./routes/ClientPartner.js");
const faqsRoutes = require("./routes/FAQs.js");
const contactusRoutes = require("./routes/ContactUs.js");
const jobRoutes = require("./routes/Jobs.js");

// Middleware to parse JSON bodies
app.use(express.json());

// Cors
app.use(cors());

// Connection to MongoDB
require('./db/connection.js');

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Load Routes
app.use('/api/user', userRoutes);
app.use("/api/blogs",blogsRoutes);
app.use("/api/teams",teamRoutes);
app.use("/api/faqs",faqsRoutes);
app.use("/api/contactus",contactusRoutes);
app.use("/api/career",jobRoutes);

// MongoDB connection
const mongoose = require('mongoose');
const DB = process.env.DATABASE;
if (!DB) {
  console.error('MongoDB URI is not defined. Set the DATABASE environment variable.');
  process.exit(1);
}

mongoose.connect(DB)
  .then(() => {
    console.log('Connection successful...');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  });

