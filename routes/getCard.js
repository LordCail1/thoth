const express = require("express");
const cardDeck = require("../cards");
const router = express.Router();

//variables
const pulledCards = [];
let firstTimePull = true;






router.get("/", (req, res) => {
    const card = getOneCardProcess();
    res.send(JSON.stringify(card));
});



function getOneCardProcess() {
    hasAlreadyBeenPulled = false;
    let card;
    do {
        card = cardDeck.getRandomCard();
        if (firstTimePull === false) {
            hasAlreadyBeenPulled = verifyIfCardWasPulled(card);
        }    
    } while(hasAlreadyBeenPulled);
    pulledCards.push(card);
    firstTimePull = false;
    console.log(pulledCards);
    return card;
}

function verifyIfCardWasPulled(card) {
    let problem = false;
    pulledCards.forEach(c => {
        if (c.name === card.name) {
            problem = true;
        }
    });
    return problem;
}






module.exports = router;