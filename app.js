require("dotenv").config();
const axios = require("axios");
const debug = require("debug")("server-side");
const express = require("express");
const bodyParser = require("body-parser");
const getCard = require("./routes/getCard");
const home = require("./routes/home")


const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));
app.use("/getCard", getCard);
app.use("/", home);





const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("running server 5000");
});
























