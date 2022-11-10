const generateCardsBtn = document.querySelector('[data-generate-cards]');
const resetBtn = document.querySelector('[data-reset-btn]');
let pulledCards = [];






generateCardsBtn.addEventListener('click', (e) => {
    if (pulledCards.length === 20) {
        alert('You have already pulled 20 cards!');
        return;
    }
    singeCard();
});

resetBtn.addEventListener('click', (e) => {
    reset();
});




async function singeCard() {
    try {
        const cardResponse = await fetch('http://localhost:5000/cards/card', { 
        method: 'GET',
        headers: {
            "Content-Type":"application/json" 
        }});
        const card = await cardResponse.json();
        if (!card) return;
        pulledCards.push(card);
        console.log(card);
    } catch (err) {
        console.log(err.message);
    }
}

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





