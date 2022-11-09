const Cards = require('../models/cards');







module.exports = async function (req, res) {
    const cards = await Cards.find();
    console.log(cards);
    res.end();
}