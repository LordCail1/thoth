require("dotenv").config();
const axios = require("axios");
const debug = require("debug")("server-side");
const express = require("express");



const app = express();


app.use(express.json());
app.use(express.static("public"));



//routes
app.use("/getCard", require("./routes/getCard"));
app.use("/", require("./routes/home"));




//server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
























