const thoth = require("./index");

const wantedArray = [];

for (let card of thoth.card) {
    if (card.name === "Seven Of Wands") {
        wantedArray.push(card);
    }
}

console.log(wantedArray);