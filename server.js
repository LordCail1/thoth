const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express');
const app = express();


app.use(express.json());
app.use(express.static('public'));


app.use('/', require('./routes/home'));
app.use('/cards', require('./routes/cards'));






//server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
    mongoose.connect(process.env.DATABASE_UI,
        { useNewUrlParser: true, useUnifiedTopology: true} ,() => {
        console.log('Connected to MongoDB!');
    });
});
























