


module.exports = async function(cards, destinationPool) {
    for (let card of cards) {
        try {
            const cardInstance = await destinationPool.create({
                name: card.name,
                number: card.number,
                majorArcana: card.majorArcana,
                hebrewLetter: card.hebrewLetter,
                element: card.element,
                zodiac: card.zodiac,
                planet: card.planet,
                description: card.description,
                mainColors: card.mainColors,
                link: card.link,
                imageName: card.imageName
            });
            console.log(cardInstance);
        } catch (err) {
            console.log(err.message);
        }
    }
}