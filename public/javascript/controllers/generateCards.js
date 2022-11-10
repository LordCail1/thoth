




generateCardsBtn.addEventListener('click', (e) => {
    if (pulledCards.length === 35) {
        alert(`You have already pulled ${pulledCards.length} cards!`);
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
        cardOnUI(card);
    } catch (err) {
        console.log(err.message);
    }
}



function cardOnUI(card) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('cardContainer');
    for (let property in card) {
        if (property === "imageName") {
            cardContainer.style.backgroundImage = `url('../../images/${card[property]}.jpg')`
        }
    }
    cardTable.appendChild(cardContainer);
    moveBehaviorToCards();
}