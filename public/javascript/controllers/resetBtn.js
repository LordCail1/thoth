resetBtn.addEventListener('click', (e) => {
    fetchCards();
    deleteAllCardsFromScreen();
    resetStats();
});


async function fetchCards() {
    pulledCards = [];
    try {
        const response = await fetch(`${document.location.origin}/cards/resetCards`, {
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

function resetStats() {
    const fireSpan = document.querySelector('[data-fire-perc]');
    const waterSpan = document.querySelector('[data-water-perc]');
    const airSpan = document.querySelector('[data-air-perc]');
    const earthSpan = document.querySelector('[data-earth-perc]');

    fireSpan.innerText = '0%';
    waterSpan.innerText = '0%';
    airSpan.innerText = '0%';
    earthSpan.innerText = '0%';
    
}