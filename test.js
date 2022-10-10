const thoth = require("./index");

const wantedArray = [];

for (let card of thoth.card) {
    if (card.planet === thoth.planet.mercury) {
        wantedArray.push(card);
    }
}

console.log(wantedArray);