const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

// Load environment variables from .env file
require("dotenv").config();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB using the environment variable
const mongoURI =
  "mongodb+srv://patil:0987654321@cluster0.ellsl9j.mongodb.net/Task_col_signup?retryWrites=true&w=majority";
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const authRoute = require("./routes/signup");
app.use("/", authRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
