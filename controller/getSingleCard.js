const startingPool = require('../models/startingPoolCards');
const sessionPool = require('../models/sessionPoolCards');







module.exports = async function (req, res) {
    try {
        const cards = await startingPool.find();
        if (cards.length === 0) {
            console.log('woops, no more cards!');
            res.end();
            return;
        }
        const card = singleCard(cards);
        removeCardFromPool(card, startingPool);
        addChosenCardToPool(card, sessionPool);
        res.send(card);
    } catch (err) {
        console.log(err.message);
    }
}





async function removeCardFromPool(card, chosenPool) {
    try {
        await chosenPool.deleteOne({ _id: card._id });
    } catch (err) {
        console.log(err.message);
    }
}

async function addChosenCardToPool(card, chosenPool) {
    try {
        const cardInstance = await chosenPool.create({
            name: card.name,
            number: card.number,
            majorArcana: card.majorArcana,
            hebrewLetter: card.hebrewLetter,
            element: card.element,
            zodiac: card.zodiac,
            planet: card.planet,
            description: card.description,
            mainColors: card.mainColors,
            link: card.link,
            imageName: card.imageName
        });
        console.log(cardInstance);
    } catch (err) {
        console.log(err.message);
    }
}





function singleCard(cards) {
    const i = Math.floor(Math.random() * cards.length);
    return cards[i];
}



