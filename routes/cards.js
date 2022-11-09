const express = require('express');
const router = express.Router();
const getAllCards = require('../controller/getAllCards');
const getSingleCard = require('../controller/getSingleCard');
const resetCards = require('../controller/resetCards');





router.get('/allCards', (req, res) => {
    getAllCards(req, res);
});


router.get('/card', (req, res) => {
    getSingleCard(req, res);
});


router.get('/resetCards', (req, res) => {
    resetCards(req, res);
});











module.exports = router;