const express = require("express");
const card = require("../cards");
const router = express.Router();





router.get("/", (req, res) => {
    const specificCard = card.getRandomCard();
    res.send(JSON.stringify(specificCard));
});

module.exports = router;
