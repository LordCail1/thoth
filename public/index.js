const generateCardButton = document.querySelector("[data-generate-button]");
const randomCard = require("./cards");



generateCardButton.addEventListener("click", function(e) {
    console.log(randomCard);
});