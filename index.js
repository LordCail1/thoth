const mainColors = {red: "red", redOrange: "redOrange", orange: "orange", 
yellowOrange: "yellowOrange", yellow: "yellow", yellowGreen: "yellowGreen", green: "green", blueGreen: "blueGreen", blue: "blue",
blueViolet: "blueViolet", violet: "violet", redViolet: "redViolet", white: "white"};

const element = {fire: "fire", water: "water", air: "air", earth: "earth"};

const planet = {moon: "moon", mercury: "mercury", venus: "venus", sun: "sun", mars: "mars", jupiter: "jupiter", saturn: "saturn"};
const zodiac = {aries: "aries", taurus: "taurus", gemini: "gemini", cancer: "cancer", leo: "leo", virgo: "virgo",
scorpio: "scorpio", sagittarius: "sagittarius", capricorn: "capricorn", aquarius: "aquarius", pisces: "pisces"};

const card =  [
    {
        name: "theFool",
        number: 0,
        hebrewLetter: "Aleph",
        element: element.air,
        zodiac: null,
        planet: null,
        description: `The Fool personifies the child in us. Spontaneously represents a fresh start and an open-minded openness. The expression of playful, life-like carelessness shows that we are entering a new area of our lives with astonishment, strong expectations and often without prior knowledge. It may also refer to the mood of a child, and therefore to carelessness, foolish naivety, playfulness, but it can also mean foolishness, or the simplicity of wise and humble insight, which we can only come at the end of a long and often arduous journey. The Fool can embody the copy, the blatant fraternity, but even the only honest court advisor as the king's alter native. In all cases, living in the present, expressing openness and spontaneous honesty, is always ready for new experiences.`,
        mainColors: [mainColors.yellow, mainColors.green],
        link: `https://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_00_Fool.html`
    },
    {
        name: "theMagician",
        number: 1,
        hebrewLetter: "Beis",
        element: element.air,
        zodiac: null,
        planet: planet.mercury,
        description: `The Magician symbolizes deity, skill, self-consciousness, and an active lifestyle. It indicates a period in which we can overcome difficult problems, with increased awareness and a vigilant wisdom to face challenges. Although this card represents the power of our consciousness, it does not express that emotions and other subconscious forces are negligible. On the contrary, the extraordinary power and efficiency exemplified by the Magus is based on the deep harmony between consciousness and subconsciousness. Only the resulting internal security can move mountains. The first human act of life is born from nothing, without experience and learning: this is the first instinctive creation. Spontaneous creation without goals and interests, in which one tries his strength and experiences his abilities.`,
        mainColors: [mainColors.blue, mainColors.yellow],
        link: `The Magician symbolizes deity, skill, self-consciousness, and an active lifestyle. It indicates a period in which we can overcome difficult problems, with increased awareness and a vigilant wisdom to face challenges. Although this card represents the power of our consciousness, it does not express that emotions and other subconscious forces are negligible. On the contrary, the extraordinary power and efficiency exemplified by the Magus is based on the deep harmony between consciousness and subconsciousness. Only the resulting internal security can move mountains. The first human act of life is born from nothing, without experience and learning: this is the first instinctive creation. Spontaneous creation without goals and interests, in which one tries his strength and experiences his abilities.`
    },
    {
        name: "theHighPriestess",
        number: 2,
        hebrewLetter: "Gimel",
        element: element.water,
        zodiac: null,
        planet: planet.moon,
        description: `The High Priestess denotes unconscious power, tenderness, sensitivity, and often inexplicable but deeply rooted certainty. She is the key to the mysterious truth that cannot be approached with a logically thinking mind. She knows that the truth that can be spoken is never the eternal truth. Her clear side is the expression of patience, understanding, apology, goodness and forgiveness, as a helper, a healer, or a visionary for the power of the unconscious. But her shady side is the "dark nurse", the embodiment of the witch who uses the power of her spiritual power to seduce, paralyze or harm others. However, Tarot's interpretations emphasize only a friendly, helpful side.`,
        mainColors: [mainColors.blue, mainColors.blueViolet, mainColors.white],
        link: `The High Priestess denotes unconscious power, tenderness, sensitivity, and often inexplicable but deeply rooted certainty. She is the key to the mysterious truth that cannot be approached with a logically thinking mind. She knows that the truth that can be spoken is never the eternal truth. Her clear side is the expression of patience, understanding, apology, goodness and forgiveness, as a helper, a healer, or a visionary for the power of the unconscious. But her shady side is the "dark nurse", the embodiment of the witch who uses the power of her spiritual power to seduce, paralyze or harm others. However, Tarot's interpretations emphasize only a friendly, helpful side.`
    },
    {
        name: "theEmpress",
        number: 3,
        hebrewLetter: "Daleth",
        element: element.earth,
        zodiac: null,
        planet: planet.venus,
        description: `The Empress embodies the inexhaustible power of nature that always gives new life. It symbolizes vitality, fertility, development and new birth. He is the inexhaustible source of all life, indicates our creativity and responsiveness, our ability to absorb and rebuild new impulses. At the level of physical reality, growth and fertility, and at the artistic level, artistic creativity, spirituality and ingenuity at the intellectual level, and at the level of consciousness, the increase of cognition. The birth of a new constant is a constant change in our lives, and it means that we have to bear the pain of these births.`,
        mainColors: [mainColors.blue, mainColors.yellowGreen, mainColors.redViolet],
        link: `https://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_03_Empress.html`
    },
    {
        name: "theEmperor",
        number: 4,
        hebrewLetter: "Tzaddi",
        element: element.fire,
        zodiac: zodiac.aries,
        planet: null,
        description: `The Emperor symbolizes the structural element, stability, desire for security and continuity. It symbolizes our endeavor to isolate ourselves from natural conditions, from all their unpredictability. Even if we occasionally shoot too much at the target, it does not mean that we appreciate the positive sides of this often suspicious card. The Ruler also refers to our sense of order, common sense, discipline, responsibility, and pragmatic procedures, but also exaggerated in the form of stiffness, inanimateness, domination and a desire for steel power.`,
        mainColors: [mainColors.red, mainColors.yellow],
        link: `http://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_04_Emperor.html`
    }
];

function getRandomCard() {
    const randomNum = Math.floor((Math.random() * 5));
    return card[randomNum];
}

module.exports.getCard = getRandomCard;
    
    
    



