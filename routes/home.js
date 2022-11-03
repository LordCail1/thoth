const express = require("express");
const router = express.Router();
const path = require("path");



router.get("/", (req, res) => {
    console.log('hello')




    res.sendFile(path.join(__dirname, "../index.html"));


});




module.exports = router;