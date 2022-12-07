require('dotenv').config();
const mongoose = require('mongoose');



const cardSchema = new mongoose.Schema({
    name: String,
    number: Number,
    majorArcana: Boolean,
    hebrewLetter: String,
    element: String,
    zodiac: String,
    planet: String,
    description: [
        {
            descSource: String,
            descText: String
        }
    ],
    mainColors: [String],
    link: [
        {
            linkSource: String,
            linkText: String,
        }
    ],
    imageName: String
});

module.exports = mongoose.model('startingPool', cardSchema);