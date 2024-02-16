const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { error } = require("console");

app.use(express.json());
app.use(cors());

//Database connection with MONGODB
mongoose.connect("mongodb+srv://Acco123:12345@cluster0.vsmkbm7.mongodb.net/shop");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
});


app.get("/", (req,res)=>{
    res.send("Express app is running")
})

app.listen(port, (err) => {
    if (!err) {
        console.log("Server running on port " + port);
    } else {
        console.log("Error: " + err);
    }
});
