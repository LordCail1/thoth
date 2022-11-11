const masterPoolCards = require('../models/masterPoolCards');
const sessionPoolCards = require('../models/sessionPoolCards');
const startingPoolCards = require('../models/startingPoolCards');
const multipleCardsDump = require('../middleware/multipleCardsDump');

module.exports = async function(req, res) {
    try {
        await sessionPoolCards.deleteMany();
        await startingPoolCards.deleteMany();
        const cards = await masterPoolCards.find();
        multipleCardsDump(cards, startingPoolCards);
        console.log('card reset!');
        res.end();
    } catch (err) {
        console.log(err.message);
    }
        
}