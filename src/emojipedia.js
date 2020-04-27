const emojipedia = [
  {
    id: 1,
    emoji: "💪",
    name: "Tense Biceps",
    meaning:
      "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
  },
  {
    id: 2,
    emoji: "🙏",
    name: "Person With Folded Hands",
    meaning:
      "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
  },
  {
    id: 3,
    emoji: "🤣",
    name: "Rolling On The Floor, Laughing",
    meaning:
      "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
  },
  {
    id: 4,
    emoji: "🤓",
    name: "Nerd Face",
    meaning:
      "Huge glasses, awkward smile and buck teeth. Used humorously or ironically for nerds or to express how smart you are. Stereotype of a nerd; a smart but funny-dressed person with social deficits."
  },
  {
    id: 5,
    emoji: "😂",
    name: " Face With Tears of Joy",
    meaning:
      "I am laughing to hard that I can hardly keep myself on my chair! Something is so incredibly funny that you cry laughing. Gets the giggles and can hardly contain himself. This emoji is the most popular and was named Word of the Year 2015."
  },
  {
    id: 6,
    emoji: "🤣",
    name: "Rolling On The Floor, Laughing",
    meaning:
      "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing."
  },
  {
    id: 7,
    emoji: "🧐",
    name: "Face With Monocle",
    meaning:
      "A monocle is a visual aid with only one glass. At the end of the 19th century it was a status symbol. Something seems suspicious! The smiley makes a warning look around. The “upper-class“ version of the pondering smiley."
  },
  {
    id: 8,
    emoji: "😫",
    name: "Tired Face",
    meaning:
      "Overtired emoji with narrowed eyes and open mouth. Because of too little sleep, because of what is going on around you, from a person or situation. Is very exhausted and broken. Now needs peace first."
  },
  {
    id: 9,
    emoji: "😩",
    name: "Weary Face",
    meaning:
      "Leave me alone! Reluctant smiley with raised eyebrows and mouth downturned, moaning about grueling, unpleasant but inevitable things. Is weepy, upset and completely exhausted, mentally or physically."
  },
  {
    id: 10,
    emoji: "😯",
    name: "Speechless Face",
    meaning:
      "Oh my goodness! The unpleasantly surprised face is lost for words due to a shocking affair. In response to bad behavior or a rude message. Nothing can be added to what has just been said."
  },
  {
    id: 11,
    emoji: "😧",
    name: "Anguished Face",
    meaning:
      "Something unexpected happened! Face with raised eyebrows, open eyes and open mouth. A mixture of shock and disappointment. Represents fear, frustration, horror and unexpected, negative surprises."
  },
  {
    id: 12,
    emoji: "😮",
    name: "Face With Open Mouth",
    meaning:
      "Wow, I'm impressed! Perplexed smiley is looking completely puzzled. Is positively or negatively surprised: from mildly astonished to completely steamrolled."
  },
  {
    id: 13,
    emoji: "😲",
    name: "Astonished Face",
    meaning:
      "That's incredible, I had no idea! Astonished face with wide open mouth and eyes: overwhelmed with surprise, completely shocked or sheer incredulity. Can hardly believe what just happened!"
  },
  {
    id: 13,
    emoji: "🤱",
    name: "Breastfeeding",
    meaning:
      "I woke up every two hours last night! A woman breastfeeding a baby. According to a study, about 80% of the mothers in Germany breastfeed their child for about 7 months. Breastfeeding in public is a controversial topic and triggered a trend in social media in 2017."
  },
  {
    id: 14,
    emoji: "🙇",
    name: "Person Bowing Deeply",
    meaning:
      "A person who is bowing to you. Is grateful because of something and deeply bows to you. Can also be an offering of reverence."
  },
  {
    id: 15,
    emoji: "🙆",
    name: "Face With Ok Gesture",
    meaning:
      "Everything is okay! Woman with hands above her head (OK sign). Wants to tell you that everything is fine. Represents advocacy and approval. Because of the posture also known as ballerina."
  },
  {
    id: 16,
    emoji: "👨‍🎤",
    name: "Male singer",
    meaning:
      "You are a born entertainer! The man at the microphone is either a pop star, singing in the shower or he enjoys singing his own praises. Depending on the version, the singer looks like David Bowie or Prince.	"
  },
  {
    id: 17,
    emoji: "👤",
    name: "Silhouette of a Bust",
    meaning:
      "Silhouette of a person, a shadow. Represents anonymity, secrets and unknown things. Is often used as a symbol for a user or a guest profile in software or with computers."
  },
  {
    id: 18,
    emoji: "🤙",
    name: "'Call Me' Hand Sign",
    meaning:
      "The closed fist with abducted thumb and little finger has a phone-like shape. “Call me“ or “Let's have a call soon“. Similar to the surfer greeting “Hang loose“."
  },
  {
    id: 19,
    emoji: "🖖",
    name: "Mr. Spock Greeting",
    meaning:
      "Fingers are spread between the ring and middle finger, creating a “V“. A hand sign based on sacred Jewish letters. The gesture has become known by the series “Star Trek“ and Mr. Spock: Live long and in peace."
  },
  {
    id: 20,
    emoji: "🤟",
    name: "I Love You Gesture",
    meaning:
      "In the American sign language, the fist with outstretched little finger, index finger and thumb means “I love you“. The ILY sign mainly conveys a general, positive message.	"
  },
  {
    id: 21,
    emoji: "🤘",
    name: "Sign of the Horns",
    meaning:
      "Rock on! Little finger and forefinger are forming horns. The metal horn is a gesture of metal rock fans. Can have many meanings, such as unfaithfulness (by horny husband/wife), sign to ward off misfortune, devil's salutation or sacred gesture in Buddhism."
  },
  {
    id: 22,
    emoji: "🤲",
    name: "Holding hands up, palms against each other",
    meaning:
      "I'm praying that everything will go smoothly today or “Can you lend me some money please?“ The upturned palms represent a form of praying or asking for handouts. In American sign language, the symbol of an open book."
  },
  {
    id: 23,
    emoji: "👹",
    name: "Japanese Ogre “Namahage“",
    meaning:
      "The Oni represents a demon and spirit of hell in Japanese mythology. An ugly figure with horns, chasing evil souls. Traditional disguise on New Year's Eve to ward off evil spirits."
  }
];

export default emojipedia;
