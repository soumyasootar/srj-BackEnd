
const express = require("express");
const connectDB = require("./config/db");
const routes = require("./routes/SRJ-route");

// Create Express app
const app = express();
const port = 3001;

// Middleware to parse JSON body
app.use(express.json());

// Define routes
app.use('/', routes);

// Connect to MongoDB
connectDB()
  .then(() => {
    // Start the server after successful connection
    app.listen(port, () => {
      console.log(`Server listening on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

