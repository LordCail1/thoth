refreshStatsBtn.addEventListener('click',e => {
    howMuchOfElements();
});

function howMuchOfElements() {
    if (pulledCards.length === 0) {
        console.log('no cards yet');
        return;
    }
    const elementArray = addingElementsToArray();
    countElement(elementArray);
    const percOfFire = calculatePercentage(fireCards, pulledCards.length);
    const percOfWater = calculatePercentage(waterCards, pulledCards.length);
    const percOfAir = calculatePercentage(airCards, pulledCards.length);
    const percOfEarth = calculatePercentage(earthCards, pulledCards.length);
    addingPercentageToUI();
    
    
    function addingElementsToArray() {
        const elementArray = [];
        for (let card of pulledCards) {
            const {element} = card;
            checkIfElementArrayIsThere(element);
            elementArray.push(element);
            function checkIfElementArrayIsThere(el) {
                if (!el) {
                    console.log('woops, there was no element property in this card!');
                    return;
                }
            }
        }
        return elementArray;
    }
    function countElement(array) {
        fireCards = 0;
        waterCards = 0;
        airCards = 0;
        earthCards = 0;
        for (let prop of array) {
            switch(prop) {
                case 'Fire':
                    fireCards = ++fireCards;
                    break;
                case 'Water':
                    waterCards = ++waterCards;
                    break;
                case 'Air':
                    airCards = ++airCards;
                    break;
                case 'Earth':
                    earthCards = ++earthCards;
                    break;
            }
        }
    }
    function addingPercentageToUI() {
        const fireSpan = document.querySelector('[data-fire-perc]');
        const waterSpan = document.querySelector('[data-water-perc]');
        const airSpan = document.querySelector('[data-air-perc]');
        const earthSpan = document.querySelector('[data-earth-perc]');

        fireSpan.innerText = `${percOfFire}%`;
        waterSpan.innerText = `${percOfWater}%`;
        airSpan.innerText = `${percOfAir}%`;
        earthSpan.innerText = `${percOfEarth}%`;
    }
}

