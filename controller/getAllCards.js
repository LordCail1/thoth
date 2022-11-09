const startingPool = require('../models/startingPoolCards');
const sessionPool = require('../models/sessionPoolCards');








module.exports = async function (req, res) {
    const cards = await startingPool.find();
    console.log(cards);
    res.send(cards);
}