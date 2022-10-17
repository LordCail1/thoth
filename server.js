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
    const specificCard = card.getRandomCard();
    res.download(`./images/${specificCard.imageName}.jpg`);
    console.log("this ran");
    console.log(specificCard);
    res.send(JSON.stringify(specificCard));
});

app.get("/image", (req, res) => {
    console.log(req.query.imageName);
    res.download(`./images/${req.query.imageName}.jpg`);
});








app.listen("5000", () => {
    console.log("running server 5000");
});
























