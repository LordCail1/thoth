const mongoose = require('mongoose');




const cardSchema = new mongoose.Schema({
    name: {
        type: String,
        immutable: true,
    },
    number: {
        type: Number,
        immutable: true,
    },
    majorArcana: {
        type: Boolean,
        immutable: true,
    },
    hebrewLetter: {
        type: String,
        immutable: true,
    },
    element: {
        type: String,
        immutable: true,
    },
    zodiac: {
        type: String,
        immutable: true,
    },
    planet: {
        type: String,
        immutable: true,
    },
    description: [
        {
            descSource: String,
            descText: String,
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

cardSchema.static.random = function(callback) {
    this.count(function (err, count) {
        if (err) return callback(err);
        let rand = Math.floor(Math.random() * count);
        this.findOne().skip(rand).exec(callback);
    }).bind(this)
};

module.exports.model = mongoose.model("cards", cardSchema);