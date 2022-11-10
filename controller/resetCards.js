const masterPoolCards = require('../models/masterPoolCards');
const sessionPoolCards = require('../models/sessionPoolCards');
const startingPoolCards = require('../models/startingPoolCards');
const multipleCardsDump = require('../middleware/multipleCardsDump');





module.exports = async function(req, res) {
    try {
        console.log('got there!');
        await sessionPoolCards.deleteMany();
        await startingPoolCards.deleteMany();
        const cards = await masterPoolCards.find();
        console.log(cards);



        multipleCardsDump(cards, startingPoolCards);
        res.end();
    } catch (err) {
        console.log(err.message);
    }
        
}