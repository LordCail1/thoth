require("dotenv").config();
const axios = require("axios");
const debug = require("debug")("server-side");
const express = require("express");
const bodyParser = require("body-parser");



const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));



//routes
app.use("/getCard", require("./routes/getCard"));
app.use("/", require("./routes/home"));




//server
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

//q: how do you use the debug module?
//a: https://www.npmjs.com/package/debug























