function verifyIfCardWasPulled(card, pulledCards) {
    pulledCards.forEach(c => {
        if (c.name === card.name) {
            return true;
        }
    });
    
    return false;
    
}