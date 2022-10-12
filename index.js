const mainColors = {red: "Red", redOrange: "Red-Orange", orange: "Orange", 
yellowOrange: "Yellow-Orange", yellow: "Yellow", yellowGreen: "Yellow-Green", green: "Green", blueGreen: "Blue-Green", blue: "Blue",
blueViolet: "Blue-Violet", violet: "Violet", redViolet: "Red-Violet", white: "White", black: "Black", brown: "Brown", grey: "Grey"};


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
        majorArcana: true,
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
        majorArcana: true,
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
        majorArcana: true,
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
        majorArcana: true,
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
        majorArcana: true,
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
        majorArcana: true,
        hebrewLetter: hebrewLetter.vau,
        element: element.earth,
        zodiac: zodiac.taurus,
        planet: null,
        description: `The Hierophant (High Priest) embodies the deep confidence in the world of faith and religious certainty. This interpretation is favorable in many respects because the power of trust it expresses applies to our own self-confidence, our belief in the deeper meaning of our lives, and our consequent belief in the future. The card is also a guide to ethics and virtue, as well as personal intentions derived from our moral values. The High Priest is one of the moral teachings of the tarot. Although not after the High Priestess, he still represents a similar line of thought. The High Priest is the mediator of spiritual content that moves away from the earthly life, and the High Priest represents a spiritual, abstract search for the great questions of life.`,
        mainColors: [mainColors.black, mainColors.yellowOrange, mainColors.orange, mainColors.brown],
        link: `http://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_05_Hierophant.html`
    },
    {
        name: "The Lovers",
        number: 6,
        majorArcana: true,
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
        majorArcana: true,
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
        majorArcana: true,
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
        majorArcana: true,
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
        majorArcana: true,
        hebrewLetter: hebrewLetter.koph,
        element: element.fire,
        zodiac: null,
        planet: planet.jupiter,
        description: `According to how we face our destiny, the card refers to our helplessness and helplessness or to the life experience that helps our development and maturation. At the level of events, the Whee of Fortune often shows situations that we are not able to influence yet. The descending side of the Wheel means that our plans simply fail, weather, road traffic, airport strike, revenge of objects, or other "higher power" destroys our plans. The Wheel of Fortune then shows that it is not (yet) time to realize our intention. In other places, the card in this case provides valuable guidance on how to get to the other, ascending side of the Wheel. This is lucky, pleasant, and even surprising.`,
        mainColors: [mainColors.violet, mainColors.yellow],
        link: `http://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_10_Fortune.html`
    },
    {
        name: "Lust",
        number: 11,
        majorArcana: true,
        hebrewLetter: hebrewLetter.tet,
        element: element.fire,
        zodiac: zodiac.leo,
        planet: null,
        description: `The Strength (Lust) Card, in a sense, has a relationship with the Magician. As there, there is a secret, deep, inner harmony as the basis of special power. While the power of the Magician is influenced by the harmony of conscious and subconscious forces, the power, courage and passion of this card expresses the reconciliation of civilized man with his own animal nature. This card makes it clear that we cannot hide our instinct behind pale virtues, but we must openly face the sometimes scary archaic forces in us, accepting them slowly, tame by gentle violence. In this way, we have not only these ancient forces available, but all our resources that have been used to suppress our instincts.`,
        mainColors: [mainColors.orange, mainColors.violet],
        link: `http://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_card`
    },
    {
        name: "The Hanged Man",
        number: 12,
        majorArcana: true,
        hebrewLetter: hebrewLetter.mem,
        element: element.water,
        zodiac: null,
        planet: null,
        description: `The superficial meaning of the Hanged Man is that we are stuck, we are in a dog clutch. However, looking deeper, the external immobility of this forced resting state is indispensable. It is also possible to change our world view and our whole life with in-depth analysis. This episode of condemnation can be characterized by the image of the disease, which is often indicated by the card. The other names of the 12th card are: the world set on his head, the crucified, the victim, the trial. The male figure on the card is upside-down, with two legs hanging by his feet. However, this uncomfortable posture makes it easy: the man crouches one of his legs playfully, holding a flute in his hand. This condition causes more joy than pain. CG Jung writes about the experience expressed by the Hanged Man: "The dislocation ... can be a positive" hanging ", which, on the one hand, appears to be an insurmountable difficulty, and on the other hand it represents a unique situation that requires maximum effort and therefore wants a whole person."`,
        mainColors: [mainColors.blueGreen, mainColors.blue, mainColors.white],
        link: `http://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_12_Hanged_Man.html`
    },
    {
        name: "Death",
        number: 13,
        majorArcana: true,
        hebrewLetter: hebrewLetter.nun,
        element: element.water,
        zodiac: zodiac.scorpio,
        planet: null,
        description: `Death means farewell, the great release, the end. At the same time, it is preparing the new way of coming; the card itself, however, primarily exposes us to the end. Within this, it may mean the long-awaited, liberating ending, but it may of course also refer to our most painful experiences. Unlike the Swords, which is a voluntary and thus premature end, this card always marks the natural end and the time has come to let go of something. Death is unreasonably one of the dreaded cards. Those who wear pink glasses will only interpret the card as their new messenger and want to deprive us of the profound experience of farewell and the associated life-long experience. "We have separated life and death, the time between the two is fear," says Krishnamurti, and adds: "We cannot live without dying."`,
        mainColors: [mainColors.black, mainColors.yellowOrange],
        link: `https://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_13_Death.html`
    },
    {
        name: "Art",
        number: 14,
        majorArcana: true,
        hebrewLetter: hebrewLetter.samekh,
        element: element.fire,
        zodiac: zodiac.sagittarius,
        planet: null,
        description: `This card is the healthy counterpart of the next Devil (XV) card, who is the embodiment of incapacity. Harmony, balance, calmness and spiritual peace are the hallmarks of Measurement. This means a happy experience of health and spiritual balance, that is, we treat ourselves well, we love ourselves and therefore live in harmony with our environment. Depending on the background of our question, it may mean healing or recovery. This card is an expression of a state of equilibrium, the creation of which presupposes the balancing and temperamental ability of man. In this life situation, one tries to find a realistic middle ground between his desires and possibilities.`,
        mainColors: [mainColors.yellow, mainColors.red, mainColors.white, mainColors.green],
        link: `http://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_14_Art.html`
    },
    {
        name: "The Devil",
        number: 15,
        majorArcana: true,
        hebrewLetter: hebrewLetter.ayin,
        element: element.earth,
        zodiac: zodiac.capricorn,
        planet: null,
        description: `Depending on the nature of all the Tarot cards, the Devil is the most difficult to grasp because it shows a different face to everyone. In his experiences, the common feature is the addiction, the willlessness, the failure of good intentions, and the actions that contradict our conviction. The Devil corresponds to the Dark Side of many Tarot Cards: Unlike Magus (I), he is the Black Magician. Part of the dark side of the High Priestess (II), he is the hypocrite of the High Priest (V), the admirer of the material world; He embodies the unbridled greed of Lust (XI), he is the opposite of Temperance (XIV), the inferiority, he dominates the other parts of the Moon (XVIII). As haunting, of course, it often appears in an attractive form. The card shows that we are playing with the fire and we have to pay attention to hell (!) to avoid burning ourselves. At a deeper level of interpretation it means that we have to face our own shady side of the question.`,
        mainColors: [mainColors.violet, mainColors.black, mainColors.brown],
        link: `http://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_15_Devil.html`
    },
    {
        name: "The Tower",
        number: 16,
        majorArcana: true,
        hebrewLetter: hebrewLetter.peh,
        element: element.fire,
        zodiac: null,
        planet: planet.mars,
        description: `The Tower shows that the walls raised around the perceived security are suddenly swirling. It is usually about structures and dimensions that have become too narrow for us. This can affect our beliefs and principles as well as our professional and financial security ideas, not least our friendly and other personal relationships. In any case, the tower represents a concept that has previously provided us with benevolent security, perhaps even a defense, but from which we have now grown. Usually surprising experiences, sometimes sparkling ideas that ruin the old concept. Since this is primarily about the perceived base of our security, these sudden changes are often seen as disasters. Only after the first shock is over is we relieved that we have been freed from the old burden. This breakthrough can be triggered either by our own recognition or by an external event. Ji Ching says: "The storm that comes with lightning and rumble overcomes the destructive tensions of nature."`,
        mainColors: [mainColors.red, mainColors.black],
        link: `http://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_16_Tower.html`
    },
    {
        name: "The Star",
        number: 17,
        majorArcana: true,
        hebrewLetter: hebrewLetter.tzaddi,
        element: element.air,
        zodiac: zodiac.aquarius,
        planet: null,
        description: `The Star is a card of discovery of hope, wisdom, and deeper relationships. It shows that we are designing or launching dogs that go far into the future and whose positive development can be rightly hoped for. At this early stage, we are often not yet aware of the far-reaching effects of our actions. It is only by looking back at the events that it becomes clear to us how decisive the change of direction the Star was at that time. As the greening of sowing, the recognition of the results of this action also takes time. The traditional interpretation considers Star as one of the three protective cards, which promises joyful success.`,
        mainColors: [mainColors.blue, mainColors.blueViolet, mainColors.violet],
        link: `https://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_17_Star.html`
    },
    {
        name: "The Moon",
        number: 18,
        majorArcana: true,
        hebrewLetter: hebrewLetter.qof,
        element: element.water,
        zodiac: zodiac.pisces,
        planet: null,
        description: `The Moon card guides you into the darkness and the night, into the mysterious worlds of the soul, showing our beliefs, desires, and dreams. The bright side of the moon denotes romantic dreaming, vivid fantasy and highly sophisticated sensitivity. Still, the card shows the dark side, the depths of the soul. It symbolizes our fears, insecurities, nightmares, dark conjectures, the horror of the invisible, elusive things, and the shiver. We feel this fear when we pass through the night forest, which we cut through in the daytime, but in the dark it teaches fear. It may also be the fear of old-time demons that have been given a new name in our enlightened age: bacteria, virus, milirem, becquerel, lead-contaminated air, acid rain.`,
        mainColors: [mainColors.brown, mainColors.black, mainColors.yellow],
        link: `http://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_18_Moon.html`
    },
    {
        name: "The Sun",
        number: 19,
        majorArcana: true,
        hebrewLetter: hebrewLetter.resh,
        element: element.fire,
        zodiac: null,
        planet: planet.sun,
        description: `The Sun card is the embodiment of great joy of life, vitality, warmth and confidence. It also means the enlightening power of consciousness, with which we get a clear picture and overcome our troubles, irritating factors and our ghostly fears. It gives you youthful freshness and a feeling of rebirth. It symbolizes the sunny side of life. At a deeper level of interpretation, he calls for us to overcome the darkness, unfold our sunny nature, redeem our dark brother or sister, helping the light.`,
        mainColors: [mainColors.yellow, mainColors.green, mainColors.redOrange],
        link: `http://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_19_Sun.html`
    },
    {
        name: "The Aon",
        number: 20,
        majorArcana: true,
        hebrewLetter: hebrewLetter.shin,
        element: element.fire,
        zodiac: null,
        planet: null,
        description: `
        The Judgment card is easily misunderstood if we start from its name. The punishment, the damnation, and consequently the fear and fright, are the main reasons for the judgment, especially the final judgment here. The meaning of the card, however, can only be interpreted on the basis of its symbols and the underlying spiritual and mythological images. The resurrection depicted here illustrates the captivating experience of salvation, showing the liberation of the things that have been buried or detained so far, that the divine stands out from the darkness of the prisons and comes to light. This proves the happy meaning of the card. By becoming self, it represents the decisive step of a successful process of alchemical change that creates a higher order from the lower order. At the ordinary level, it means all forms of liberation: liberation from troubles, necessity, ungrateful situations and relationships, inhibitions and shyness. It may also refer to the real "treasure" of our card's intention.`,
        mainColors: [mainColors.redOrange, mainColors.blue],
        link: `https://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_20_Aeon.html`
    },
    {
        name: "The Universe",
        number: 21,
        majorArcana: true,
        hebrewLetter: hebrewLetter.taw,
        element: element.earth,
        zodiac: null,
        planet: planet.saturn,
        description: `The World (Universe) card shows the newly found unit, the experience of profound harmony and the joyful completion of a development process. Words to grab the beauty of this card would be to put a happy end on an emotional story. During the hero's journey, he represents the happy ending, the newly found Paradise, which simply means to achieve our goal in everyday life. Rarely, this is the real purpose of our life, but it is usually an important intermediate station. At the level of our external experiences, we have found our place in the world, the place we really belong to. In the field of our spiritual experiences, the card of the world refers to the fact that we have made a significant and even decisive step towards becoming ourselves, our true credibility, our own fullness. It is a happy time for events, in which we enjoy our existence openly and with full vitality. It may also mean that we care or travel internationally.`,
        mainColors: [mainColors.brown, mainColors.yellowOrange, mainColors.green],
        link: `http://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_21_Universe.html`
    },
    {
        name: "Ace Of Wands",
        number: 1,
        majorArcana: false,
        hebrewLetter: null,
        element: element.fire,
        zodiac: null,
        planet: null,
        description: `Like the rest of the Aces, the Ace of the Wands also signify the potential that we must recognize and develop. This Ace is an entrepreneur with enthusiasm, courage, risk-taking, but also enthusiasm and momentum. The Ace of Wands often refer to the fulfillment of our inner being. According to the Fire element depicted by the Wands, it may mean the development of our will, beliefs and moral power, or refer to other internal emotional, maturation, and developmental processes. In addition, the Ace of Wands can symbolize lifestyles, optimism and vitality, and at such times a lingering period due to lack of patience.`,
        mainColors: [mainColors.red, mainColors.yellow],
        link: `https://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_40_Wands_1.html`
    },
    {
        name: "Two Of Wands",
        number: 2,
        majorArcana: false,
        hebrewLetter: null,
        element: element.fire,
        zodiac: zodiac.aries,
        planet: planet.mars,
        description: `The Two of Wands card combines a state description with a call. He points out that we have taken a neutral stance, but we have to take clear and unambiguous behavior instead. The situations indicated by the card are often paralyzed. There is nothing to justify our obsession or despair, and yet we firmly feel that something is not right. The card shows times when we find everything simply "nice". The background to this is that we have returned to a neutral state and keep ourselves away from everything. We were so aloof that nothing inside us was touched, and we were almost indifferent to the way life flies next to us. From this state, we can only break through if we turn our ideas into beliefs, intentions, and truly commit ourselves to them.`,
        mainColors: [mainColors.red, mainColors.blue, mainColors.yellow],
        link: `http://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_41_Wands_2.html`
    },
    {
        name: "Three Of Wands",
        number: 3,
        majorArcana: false,
        hebrewLetter: null,
        element: element.fire,
        zodiac: zodiac.aries,
        planet: planet.sun,
        description: `The Three of Wands connects two significant and valuable experiences. It shows that after a long and arduous journey, we reached the top, and from our high altitude we can take a wide look at the glowing horizon. The solid ground under our feet and the welcome view of our future are the main features of this all-positive card.`,
        mainColors: [mainColors.orange, mainColors.yellow],
        link: `http://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_42_Wands_3.html`
    },
    {
        name: "Four Of Wands",
        number: 4,
        majorArcana: false,
        hebrewLetter: null,
        element: element.fire,
        zodiac: zodiac.aries,
        planet: planet.venus,
        description: `The Four of Wands card indicates the period of peace in which we open and leave ourselves to enjoy life. As a result of this sense of security, we are eager to step out of our defenses and our mystery to participate in the world. This means social life, conversation, entertainment and increased vitality, as well as an inner opening, through which we will be directly involved in the life around us and in our relationships we live in deeper togetherness.`,
        mainColors: [mainColors.green, mainColors.yellow, mainColors.red],
        link: `http://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_43_Wands_4.html`
    },
    {
        name: "Five Of Wands",
        number: 5,
        majorArcana: false,
        hebrewLetter: null,
        element: element.fire,
        zodiac: zodiac.leo,
        planet: planet.saturn,
        description: `The Five of Wands card is the challenge, the strength test, the sporting competition card. It depicts situations that force us to prove our strength. There is no question of hostility, even less destructive opposites. It is a test of strength that comes from teasing and cheerful scabies, manifested in a competition-like or all-encompassing task. It is a playful character that only becomes serious in a few unfavorable situations. The card experience should not be avoided, as it is a good and generally exciting opportunity to raise awareness of our skills.`,
        mainColors: [mainColors.yellow, mainColors.yellowOrange],
        link: `http://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_44_Wands_5.html`,
    },
    {
        name: "Six Of Wands",
        number: 6,
        majorArcana: false,
        hebrewLetter: null,
        element: element.fire,
        zodiac: zodiac.leo,
        planet: planet.jupiter,
        description: `The Six of Wands card is a card of victory, success, fame and recognition, in this respect the expression of joy, satisfaction, and in some cases satisfaction. Specifically, it shows the announcement of success and the announcement of victory. In everyday things, there may be a reference to a good, but noisy news. It is, however, an absolute necessity to crown our efforts and efforts to succeed. In some cases, it may also refer to a surprising "undeserved" success.`,
        mainColors: [mainColors.violet, mainColors.orange],
        link: `http://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_45_Wands_6.html`
    },
    {
        name: "Seven Of Wands",
        number: 7,
        majorArcana: false,
        hebrewLetter: null,
        element: element.fire,
        zodiac: zodiac.leo,
        planet: planet.mars,
        description: `The Seven of Wands means someone is attacking us and we have to face our competitors, those who envy us or other opponents who are often stronger than us or in the majority. At the same time, the card also shows that we still have good prospects for success because we are fighting for our fight from a favorable position. It also warns us to be clever and alert, and not to play our position advantageously. Of course, this is the rarest case of implicit attacks, it is more about interfering in our personal world, or threatening something that we have achieved or want to achieve.`,
        mainColors: [mainColors.violet, mainColors.yellowOrange],
        link: `http://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_46_Wands_7.html`
    },
    {
        name: "Eight Of Wands",
        number: 8,
        majorArcana: false,
        hebrewLetter: null,
        element: element.fire,
        zodiac: zodiac.sagittarius,
        planet: planet.mercury,
        description: `The main meaning of the Eight of Wands card is the temporal aspect. The only one of the 78 Tarot cards that clearly indicates that we are facing of an event. In addition, there is no deeper meaning. It shows that something is moving, something is in the air, something is happening faster than expected, and that some developments have already begun without noticing. Usually, it is a forerunner of some good news or events.`,
        mainColors: [mainColors.blue, mainColors.yellow, mainColors.red],
        link: `http://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_47_Wands_8.html`
    },
    {
        name: "Nine Of Wands",
        number: 9,
        majorArcana: false,
        hebrewLetter: null,
        element: element.fire,
        zodiac: zodiac.sagittarius,
        planet: planet.moon,
        description: `The Nine of Wands card present defy and resistance against a threatening situation or experience. At the same time, it points out that in reality there is no objective threat (as opposed to the Seven of Wands), only the memory of our past painful experiences evoke these fears and the defensive reaction. It indicates a closure, often referred to as "cone heart" in the tale. In general, he says that we do not want to take steps that are important for our own development. In some cases, however, it refers almost completely to the opposite: we have just made a decisive step, and now we are closing the door with full force, cutting off the path of retreat. In this case, it's meaning is much more positive and developmental, but it shows that we did not do something right: we ran away and we fear that the past will catch up. However, true farewell means that we have already closed the given period of experience in our lives, we have already defeated it and no longer fear the past.`,
        mainColors: [mainColors.grey, mainColors.red],
        link: `http://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_48_Wands_9.html`
    },
    {
        name: "Ten Of Wands",
        number: 10,
        majorArcana: false,
        hebrewLetter: null,
        element: element.fire,
        zodiac: zodiac.sagittarius,
        planet: planet.saturn,
        description: `The Ten of Wands is the card of despair, showing that we have overestimated our strength and thus lost the broad perspective. In addition, you can also express the clumsy handling of things. It often means that we skipped a few degrees on the ladder of development, and in our new environment, we feel overwhelmed first. Our task and responsibility is to push our shoulder with the weight of the mill wheel. We may fail. To the extent that we grow up to the requirements of our new living space, we reduce our overload and despair, and learn to handle our tasks more skillfully.`,
        mainColors: [mainColors.orange, mainColors.blue],
        link: `http://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_49_Wands_10.html`
    },
    {
        name: "Princess Of Wands",
        number: null,
        majorArcana: false,
        hebrewLetter: null,
        element: element.fire,
        zodiac: null,
        planet: null,
        description: `The Page cards mean chances and opportunities that cross our path. The chance represented by the Page of the Wands corresponds to the Fire element, which is a fascinating impulse or suggestion that we welcome. An opportunity beyond our previous experience: an opportunity that awakens adventure, demands courage and risk-taking, increases the tension of our lives, because you get rid of the paralyzing routine of everyday life. It may be a strenuous sporting activity, an occasion to measure our own border areas or to experience less exciting everyday experiences and experiences.`,
        mainColors: [mainColors.red, mainColors.yellow],
        link: `http://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_39_Wands_Princess.html`
    },
    {
        name: "Prince Of Wands",
        number: null,
        majorArcana: false,
        hebrewLetter: null,
        element: element.fire,
        zodiac: null,
        planet: null,
        description: `In the warm and even hot atmosphere of the Knight of Wands, life-longness, passion and enthusiasm for the fan are buzzing, but there is no lack of impatience, hot-bloodedness, impulsiveness, and unbridled exaggeration. That is why it depends to a great extent on the living space characterized by the card that we enjoy our caressing warmth or fear of heat and variability. The card expresses impatience, we want everything, right away. If that doesn't work or we don't get what we want, we will be agonizing, angry, aggressive. On the other hand, the stimulating and captivating warmth radiated by the Knight of Wands can unleash the frosty atmosphere and move the jammed matter away from the deadlock.`,
        mainColors: [mainColors.yellowOrange, mainColors.red],
        link: `http://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_38_Wands_Prince.html`
    },
    {
        name: "Queen Of Wands",
        number: null,
        majorArcana: false,
        hebrewLetter: null,
        element: element.fire,
        zodiac: null,
        planet: null,
        description: `The Queen of Wands embodies the female power of the Fire Element. Meaning self-confidence, self-determination, cat-like simulation, which is more of an expression of wisdom than adaptability. The Queen of Wands is open, enterprising, and has strong will. Its source of power is its pride, which, in turn, sensitizes criticism, demands recognition and admiration. It represents a level of vitality and lifestyle that is already bordering on the insane bursting, and it can also devote itself to excessive spending. His acting talent and life-spaning passion make him the queen of drama, mostly expressed in the form of Carmen.`,
        mainColors: [mainColors.yellow, mainColors.red],
        link: `http://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_37_Wands_Queen.html`
    },
    {
        name: "Knight Of Wands",
        number: null,
        majorArcana: false,
        hebrewLetter: null,
        element: element.fire,
        zodiac: null,
        planet: null,
        description: `The Knight (King) of the Wands depicts the male side of the Fire Element, the creative power of which is the Sun King, it represents the form of Louis XIV.. Self-confidence, life-giving, wealth, power and greatness. These qualities are not necessarily superficial, enjoying our own greatness, but exemplary, for the benefit of all participants. The card is an expression of willpower, development, perfection of personality, and aspiration to maturity. Only in the case of negative exaggeration, it becomes self-embracing, indulgence, splendor, and bragging.`,
        mainColors: [mainColors.red, mainColors.yellow, mainColors.black],
        link: `http://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_36_Wands_Knight.html`
    },
    {
        name: "Ace Of Cups",
        number: 1,
        majorArcana: false,
        hebrewLetter: null,
        element: element.water,
        zodiac: null,
        planet: null,
        description: `The Ace of Cups is one of the Tarot's most lucky cards. With the rest of Aces, it shows the great potential in us, which can lead to the highest fulfillment. The personal significance of this depends on the person's relationship with life. The spectrum of the card extends from the feeling of joy, gratitude, and satisfaction over external success to the deepest happiness of living in unity with everything. In the foreground, there is undoubtedly love, in every form of expression: charity, parental love, sensual, erotic love, love of ourselves and love of God. Of course, the card may also indicate other, more common forms of joy and luck, although the material side of this concept is expressed by the Ace of Disks. In any case, keep in mind that there is a great potential for our intentions, or that it occurs in the realization of our plan. Not intrusive, waiting for exploration and unfolding.`,
        mainColors: [mainColors.blue, mainColors.white, mainColors.red],
        link: `http://www.tarrdaniel.com/documents/Hermetic/tarot/tarot_cards/Tarot_54_Cups_1.html`
    }
];

function getRandomCard() {
    const randomNum = Math.floor((Math.random() * 22));
    return card[randomNum];
}

module.exports.getRandomCard = getRandomCard;
module.exports.element = element;
module.exports.card = card;
module.exports.planet = planet;

    
















