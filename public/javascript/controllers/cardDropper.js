




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
        console.log(card);
        cardOnUI(card);






    } catch (err) {
        console.log(err.message);
    }
}



function cardOnUI(card) {
    const cardContainer = document.createElement('button');
    cardContainer.classList.add('cardContainer');
    for (let property in card) {
        if (property === "imageName") {
            cardContainer.style.backgroundImage = `url('../../images/${card[property]}.jpg')`
        }
    }
    cardTable.appendChild(cardContainer);
    moveBehaviorToCards();
}