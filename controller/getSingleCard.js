const Cards = require('../models/cards');







module.exports = async function (req, res) {
    const cards = await Cards.find();

    
    res.end();

}





function getSingleCard() {
    for (let card of cards)



}