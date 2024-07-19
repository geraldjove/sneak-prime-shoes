const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.clientSecret,
    resave: false,
    saveUninitialized: true,
  })
);

// mongoose connect

mongoose.connect(process.env.MONGO_UI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose Connection Connected");
});

mongoose.connection.on("open", () => {
  console.log("Mongoose Connection Open");
});

mongoose.connection.on("disconnected", () => {
  mongoose.disconnect();
  console.log("Mongoose Connection Disconnected");
});

// Listen to port

app.listen(process.env.PORT || port, () => {
  console.log(`Listening to port ${process.env.PORT || port}`);
});

// Routes

app.use("/users", userRoutes);
app.use("/products", productRoutes);

module.exports = app;
