const express = require('express');
const router = express.Router();
const path = require('path');
const resetCards = require('../controller/resetCards');



router.get('/', (req, res) => {
    resetCards(req, res);
    res.sendFile(path.join(__dirname, '../views/pages/index.html'));
});




module.exports = router;