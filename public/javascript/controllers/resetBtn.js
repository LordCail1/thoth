resetBtn.addEventListener('click', (e) => {
    reset();
    deleteAllCardsFromScreen();
});


async function reset() {
    pulledCards = [];
    try {
        const response = await fetch('http://localhost:5000/cards/resetCards', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (err) {
        console.log(err.message);
    }
}

function deleteAllCardsFromScreen() {
    // const cards = document.querySelectorAll('.cardContainer');
    cardTable.innerHTML = "";
}