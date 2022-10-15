const express = require("express");
const bodyParser = require("body-parser");
const card = require("./cards");


const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.get("/getAllCards", (req, res) => {
    res.send(card);
});








app.listen("5000", () => {
    console.log("running server 5000");
});
























