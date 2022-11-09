const Cards = require('../models/cards');







module.exports = async function (req, res) {
    const cards = await Cards.model.find();
    console.log(cards);
    res.end();
}