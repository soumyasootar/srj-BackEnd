
const express = require("express");
const connectDB = require("./config/db");
const routes = require("./routes/SRJ-route");
const cors = require("cors");
// Create Express app
const app = express();
const port = 3001;

// Middleware to parse JSON body
app.use(express.json());

// Enable CORS
app.use(cors())

// Define routes
app.use('/blog', routes);

app.get("/",(req,res)=>{
 res.send("Welcome to SRJ Backend")
})
ṭ
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

