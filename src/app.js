const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const charactersRoutes = require("./routes/charactersRoutes");

const app = express();


mongoose.connect("mongodb://localhost:27017/charactersDB", { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;

db.on("error", console.log.bind(console, "connection error:"));
db.once("open", function () {
    console.log("Conexão feita com sucesso!")
});


app.use(cors());
app.use(express.json());
app.use("/", charactersRoutes);


module.exports = app;