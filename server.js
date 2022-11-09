require("dotenv").config();
const express = require("express");



const app = express();


app.use(express.json());
app.use(express.static("public"));


app.use("/", require("./routes/home"));




//server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
























