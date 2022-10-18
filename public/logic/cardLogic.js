function verifyIfCardWasPulled(card) {
    let problem = false;
    pulledCards.forEach(c => {
        if (c.name === card.name) {
            problem = true;
        }
    });
    return problem;
}