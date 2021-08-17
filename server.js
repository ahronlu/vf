const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load env vars
dotenv.config();

const app = express();

// Connect Database
connectDB();

// Body parser
app.use(express.json());

// Define Routes
app.use("/getRestaurantList", require("./routes/restaurants"));

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
