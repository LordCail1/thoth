const startingPool = require('../models/startingPoolCards');
const sessionPool = require('../models/sessionPoolCards');

const debug = require('debug')('card');







module.exports = async function (req, res) {
    try {
        const cards = await startingPool.find();
        const card = singleCard(cards);
        removeChosenCardFromStartingPool(card);
        res.send(card);
    } catch (err) {
        console.log(err.message);
    }
}





async function removeChosenCardFromStartingPool(card) {
    try {
        await startingPool.deleteOne({ _id: card._id });
    } catch (err) {
        console.log(err.message);
    }
}





function singleCard(cards) {
    const i = Math.floor(Math.random() * cards.length);
    return cards[i];
}



