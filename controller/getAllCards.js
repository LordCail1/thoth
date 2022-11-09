const startingPool = require('../models/startingPoolCards');








module.exports = async function (req, res) {
    const cards = await startingPool.find();
    res.send(cards);
}