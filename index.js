const mainColors = {red: "Red", redOrange: "Red-Orange", orange: "Orange", 
yellowOrange: "Yellow-Orange", yellow: "Yellow", yellowGreen: "Yellow-Green", green: "Green", blueGreen: "Blue-Green", blue: "Blue",
blueViolet: "Blue-Violet", violet: "Violet", redViolet: "Red-Violet", white: "White", black: "Black"};


const element = {fire: "Fire", water: "Water", air: "Air", earth: "Earth"};

const hebrewLetter = {aleph: "Aleph", bet: "Bet", gimel: "Gimel", dalet: "Dalet", heh: "Heh",
vau: "Vau", zain: "Zain", chet: "Chet", tet: "Tet", yod: "Yod", koph: "Koph", lamed: "Lamed",
mem: "Mem", nun: "Nun", samekh: "Samekh", ayin: "Ayin", peh: "Peh", tzaddi: "Tzaddi",
qof: "Qof", resh: "Resh", shin: "Shin", taw: "Taw"};


const planet = {moon: "Moon", mercury: "Mercury", venus: "Venus", sun: "Sun", mars: "Mars", jupiter: "Jupiter", saturn: "Saturn"};


const zodiac = {aries: "Aries", taurus: "Taurus", gemini: "Gemini", cancer: "Cancer", leo: "Leo", virgo: "Virgo", libra: "Libra",
scorpio: "Scorpio", sagittarius: "Sagittarius", capricorn: "Capricorn", aquarius: "Aquarius", pisces: "Pisces"};

const card =  [
    {
        name: "The Fool",
        number: 0,
        hebrewLetter: hebrewLetter.aleph,
        element: element.air,
        zodiac: null,
        planet: null,
        description: `The Fool personifies the child in us. Spontaneously represents a fresh start and an open-minded openness. The expression of playful, life-like carelessness shows that we are entering a new area of our lives with astonishment, strong expectations and often without prior knowledge. It may also refer to the mood of a child, and therefore to carelessness, foolish naivety, playfulness, but it can also mean foolishness, or the simplicity of wise and humble insight, which we can only come at the end of a long and often arduous journey. The Fool can embody the copy, the blatant fraternity, but even the only honest court advisor as the king's alter native. In all cases, living in the present, expressing openness and spontaneous honesty, is always ready for new experiences.`,
        mainColors: [mainColors.yellow, mainColors.green],
        link: `https://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_00_Fool.html`
    },
    {
        name: "The Magician",
        number: 1,
        hebrewLetter: hebrewLetter.bet,
        element: element.air,
        zodiac: null,
        planet: planet.mercury,
        description: `The Magician symbolizes deity, skill, self-consciousness, and an active lifestyle. It indicates a period in which we can overcome difficult problems, with increased awareness and a vigilant wisdom to face challenges. Although this card represents the power of our consciousness, it does not express that emotions and other subconscious forces are negligible. On the contrary, the extraordinary power and efficiency exemplified by the Magus is based on the deep harmony between consciousness and subconsciousness. Only the resulting internal security can move mountains. The first human act of life is born from nothing, without experience and learning: this is the first instinctive creation. Spontaneous creation without goals and interests, in which one tries his strength and experiences his abilities.`,
        mainColors: [mainColors.blue, mainColors.yellow],
        link: `The Magician symbolizes deity, skill, self-consciousness, and an active lifestyle. It indicates a period in which we can overcome difficult problems, with increased awareness and a vigilant wisdom to face challenges. Although this card represents the power of our consciousness, it does not express that emotions and other subconscious forces are negligible. On the contrary, the extraordinary power and efficiency exemplified by the Magus is based on the deep harmony between consciousness and subconsciousness. Only the resulting internal security can move mountains. The first human act of life is born from nothing, without experience and learning: this is the first instinctive creation. Spontaneous creation without goals and interests, in which one tries his strength and experiences his abilities.`
    },
    {
        name: "The High Priestess",
        number: 2,
        hebrewLetter: hebrewLetter.gimel,
        element: element.water,
        zodiac: null,
        planet: planet.moon,
        description: `The High Priestess denotes unconscious power, tenderness, sensitivity, and often inexplicable but deeply rooted certainty. She is the key to the mysterious truth that cannot be approached with a logically thinking mind. She knows that the truth that can be spoken is never the eternal truth. Her clear side is the expression of patience, understanding, apology, goodness and forgiveness, as a helper, a healer, or a visionary for the power of the unconscious. But her shady side is the "dark nurse", the embodiment of the witch who uses the power of her spiritual power to seduce, paralyze or harm others. However, Tarot's interpretations emphasize only a friendly, helpful side.`,
        mainColors: [mainColors.blue, mainColors.blueViolet, mainColors.white],
        link: `The High Priestess denotes unconscious power, tenderness, sensitivity, and often inexplicable but deeply rooted certainty. She is the key to the mysterious truth that cannot be approached with a logically thinking mind. She knows that the truth that can be spoken is never the eternal truth. Her clear side is the expression of patience, understanding, apology, goodness and forgiveness, as a helper, a healer, or a visionary for the power of the unconscious. But her shady side is the "dark nurse", the embodiment of the witch who uses the power of her spiritual power to seduce, paralyze or harm others. However, Tarot's interpretations emphasize only a friendly, helpful side.`
    },
    {
        name: "The Empress",
        number: 3,
        hebrewLetter: hebrewLetter.dalet,
        element: element.earth,
        zodiac: null,
        planet: planet.venus,
        description: `The Empress embodies the inexhaustible power of nature that always gives new life. It symbolizes vitality, fertility, development and new birth. He is the inexhaustible source of all life, indicates our creativity and responsiveness, our ability to absorb and rebuild new impulses. At the level of physical reality, growth and fertility, and at the artistic level, artistic creativity, spirituality and ingenuity at the intellectual level, and at the level of consciousness, the increase of cognition. The birth of a new constant is a constant change in our lives, and it means that we have to bear the pain of these births.`,
        mainColors: [mainColors.blue, mainColors.yellowGreen, mainColors.redViolet],
        link: `https://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_03_Empress.html`
    },
    {
        name: "The Emperor",
        number: 4,
        hebrewLetter: hebrewLetter.heh,
        element: element.fire,
        zodiac: zodiac.aries,
        planet: null,
        description: `The Emperor symbolizes the structural element, stability, desire for security and continuity. It symbolizes our endeavor to isolate ourselves from natural conditions, from all their unpredictability. Even if we occasionally shoot too much at the target, it does not mean that we appreciate the positive sides of this often suspicious card. The Ruler also refers to our sense of order, common sense, discipline, responsibility, and pragmatic procedures, but also exaggerated in the form of stiffness, inanimateness, domination and a desire for steel power.`,
        mainColors: [mainColors.red, mainColors.yellow],
        link: `http://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_04_Emperor.html`
    },
    {
        name: "The Hierophant",
        number: 5,
        hebrewLetter: hebrewLetter.vau,
        element: element.earth,
        zodiac: zodiac.taurus,
        planet: null,
        description: `The Hierophant (High Priest) embodies the deep confidence in the world of faith and religious certainty. This interpretation is favorable in many respects because the power of trust it expresses applies to our own self-confidence, our belief in the deeper meaning of our lives, and our consequent belief in the future. The card is also a guide to ethics and virtue, as well as personal intentions derived from our moral values. The High Priest is one of the moral teachings of the tarot. Although not after the High Priestess, he still represents a similar line of thought. The High Priest is the mediator of spiritual content that moves away from the earthly life, and the High Priest represents a spiritual, abstract search for the great questions of life.`,
        mainColors: [mainColors.black, mainColors.yellowOrange, mainColors.orange],
        link: `http://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_05_Hierophant.html`
    },
    {
        name: "The Lovers",
        number: 6,
        hebrewLetter: hebrewLetter.zain,
        element: element.air,
        zodiac: zodiac.gemini,
        planet: null,
        description: `This card combines two themes. It refers to significant love experiences, but also realizes that this requires a decision: to abandon the limits of our lives (parental home, bachelor life, flirting) and to commit ourselves to our love. Only this step will lead to the overwhelming experience of the Lovers Card. That's why this card was called the Decision Card earlier. It may also represent necessary decisions that have nothing to do with or have little to do with love. In this case, it means having to decide with full heart without resentment and leaving openings. Which of the two topics the card refers to depends on the background of the question asked. In all cases it represents the great, unscrupulous yes.`,
        mainColors: [mainColors.yellowOrange, mainColors.redOrange, mainColors.redViolet],
        link: `http://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_06_Lovers.html`
    },
    {
        name: "The Chariot",
        number: 7,
        hebrewLetter: hebrewLetter.chet,
        element: element.water,
        zodiac: zodiac.cancer,
        planet: null,
        description: `The Chariot is a great leap forward. It shows that we get away from our usual environment and walk our own way. For this, the desire for freedom, the search for lost paradise, or simply our pursuit of purpose, is the driving force behind this. The Triumph of the Triumph is the only Tarot card that depicts this journey as hopeful and joyful. In all other cases, we say goodbye to the heart and fear. Here, however, it is a matter of feeble, disobedient advancement, entrepreneurship and risk-taking. The card shows great skill in driving the car, but it also reflects our inexperience in the unknown world. Therefore, we must also interpret it as a warning not to overestimate our own power, not to be euphoric. Let's see in time that we have a lot to learn.`,
        mainColors: [mainColors.blue, mainColors.red, mainColors.yellow],
        link: `http://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_07_Chariot.html`
    },
    {
        name: "Adustment",
        number: 8,
        hebrewLetter: hebrewLetter.lamed,
        element: element.air,
        zodiac: zodiac.libra,
        planet: null,
        description: `The Adjustment (Justice / Truth) Card covers several topics. It symbolizes clear, objective recognition, conscious and determined judgment, impartiality, balance and honesty, indicating that we can enforce our rights. At the level of everyday life, he says that we live our environment as the echo of our being, confronted with the consequences of our actions in good and bad. If we are honest and honest, we recognize and reward our activities; if, on the other hand, with dubious means, we want to gain a fool, we fail. This gives the card a great sense of responsibility. It shows that we do not receive anything as a gift, but do not deny us anything, that we bear the responsibility for everything we receive or experience.`,
        mainColors: [mainColors.blueGreen, mainColors.blue],
        link: `https://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_08_Adjustment.html`
    },
    {
        name: "The Hermit",
        number: 9,
        hebrewLetter: hebrewLetter.yod,
        element: element.earth,
        zodiac: zodiac.virgo,
        planet: null,
        description: `The Hermit is the card of retreat and turning into ourselves. It depicts an introverted phase of life, separating ourselves from foreign influences, so that we find ourselves again in peace and out of our zealous activity and, above all, ourselves. Thus, The Hermit refers to significant experiences in recognizing who we are, what we want and how we can achieve it. It combines two valuable extremes: the depth of experience and the high level of recognition. Many people are unfounded about this card. Fear of loneliness and abandonment only appears when they are misunderstood. Anyone who follows the call of The Hermit voluntarily enriches with light, strength and the happy experience that she can be alone.`,
        mainColors: [mainColors.blueGreen, mainColors.red, mainColors.yellow],
        link: `https://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_09_Hermit.html`
    },
    {
        name: "Wheel Of Fortune",
        number: 10,
        hebrewLetter: hebrewLetter.koph,
        element: element.fire,
        zodiac: null,
        planet: planet.jupiter,
        description: `According to how we face our destiny, the card refers to our helplessness and helplessness or to the life experience that helps our development and maturation. At the level of events, the Whee of Fortune often shows situations that we are not able to influence yet. The descending side of the Wheel means that our plans simply fail, weather, road traffic, airport strike, revenge of objects, or other "higher power" destroys our plans. The Wheel of Fortune then shows that it is not (yet) time to realize our intention. In other places, the card in this case provides valuable guidance on how to get to the other, ascending side of the Wheel. This is lucky, pleasant, and even surprising.`,
        mainColors: [mainColors.violet, mainColors.yellow],
        link: `http://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_10_Fortune.html`
    }

   
];

function getRandomCard() {
    const randomNum = Math.floor((Math.random() * 10));
    return card[randomNum];
}

module.exports.getRandomCard = getRandomCard

    
















