




generateCardsBtn.addEventListener('click', (e) => {
    if (pulledCards.length === 20) {
        alert('You have already pulled 20 cards!');
        return;
    }
    singeCard();
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
        console.log(pulledCards);
    } catch (err) {
        console.log(err.message);
    }
}