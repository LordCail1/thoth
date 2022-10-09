const planet = {moon: "moon", mercury: "mercury", venus: "venus", sun: "sun", mars: "mars", jupiter: "jupiter", saturn: "saturn"};

const element = {fire: "fire", water: "water", air: "air", earth: "earth"};

const mainColors = {red: "red", redOrange: "redOrange", orange: "orange", 
    yellowOrange: "yellowOrange", yellow: "yellow", yellowGreen: "yellowGreen", green: "green", blueGreen: "blueGreen", blue: "blue",
    blueViolet: "blueViolet", violet: "violet", redViolet: "redViolet"};


const thoth = [
    {
        mainType: "majorArcana",
        cards: [
            {
                name: "theMagician",
                number: 1,
                hebrewLetter: "beis",
                element: element.air,
                zodiac: null,
                planet: planet.mercury,
                description: `The Magician symbolizes deity, skill, self-consciousness, and an active lifestyle. It indicates a period in which we can overcome difficult problems, with increased awareness and a vigilant wisdom to face challenges. Although this card represents the power of our consciousness, it does not express that emotions and other subconscious forces are negligible. On the contrary, the extraordinary power and efficiency exemplified by the Magus is based on the deep harmony between consciousness and subconsciousness. Only the resulting internal security can move mountains. The first human act of life is born from nothing, without experience and learning: this is the first instinctive creation. Spontaneous creation without goals and interests, in which one tries his strength and experiences his abilities.`,
                mainColors: [mainColors.blue, mainColors.yellow]
            },
            {
                name: "theFool",
                number: 0,
                hebrewLetter: "aleph",
                element: element.air,
                zodiac: null,
                planet: null,
                description: `The Fool personifies the child in us. Spontaneously represents a fresh start and an open-minded openness. The expression of playful, life-like carelessness shows that we are entering a new area of our lives with astonishment, strong expectations and often without prior knowledge. It may also refer to the mood of a child, and therefore to carelessness, foolish naivety, playfulness, but it can also mean foolishness, or the simplicity of wise and humble insight, which we can only come at the end of a long and often arduous journey. The Fool can embody the copy, the blatant fraternity, but even the only honest court advisor as the king's alter native. In all cases, living in the present, expressing openness and spontaneous honesty, is always ready for new experiences.`,
                mainColors: [mainColors.yellow, mainColors.green]
            }

        ]
    },
    {
        mainType: "minorArcana"
    }
];

console.log(thoth[0].mainType);

