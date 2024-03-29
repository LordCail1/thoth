




generateCardsBtn.addEventListener('click', (e) => {
    if (pulledCards.length === 79) {
        console.log(`You have already pulled all the cards!`);
        return;
    }
    singeCard();
    console.log(pulledCards);

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

    const {imageName} = card;
    if (!imageName) {
        console.log('imageName was empty');
        return;
    }
    const {description} = card;
    if (!description) {
        console.log('description was empty') ;
        return;
    }
    const {descText} = description[0];
    if (!descText) {
        console.log('descText was empty!');
    }

    const {link} = card;
    if (!link) {
        console.log('link was empty');
        return;
    };

    const {linkText} = link[0];
    
    cardContainer.style.backgroundImage = `url('../../images/${imageName}.jpg')`
    cardContainer.dataset.description = descText;
    cardContainer.dataset.linkText = linkText;
    
    cardTable.appendChild(cardContainer);
    moveBehaviorToCards();
}