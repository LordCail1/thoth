const startingPool = require('../models/startingPoolCards');
const sessionPool = require('../models/sessionPoolCards');

const debug = require('debug')('card');







module.exports = async function (req, res) {
    try {
        const cards = await startingPool.find();
        const card = singleCard(cards);
        res.send(card);
    } catch (err) {
        console.log(err.message);
    }
}











function singleCard(cards) {
    const i = Math.floor(Math.random() * cards.length + 1);
    return cards[i];
}



