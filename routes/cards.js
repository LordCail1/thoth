const express = require('express');
const router = express.Router();
const getAllCards = require('../controller/getAllCards');
const getSingleCard = require('../controller/getSingleCard');





router.get('/allCards', (req, res) => {
    getAllCards(req, res);
});


router.get('/card', (req, res) => {
    getSingleCard(req, res);
});











module.exports = router;