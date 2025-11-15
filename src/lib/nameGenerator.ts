// Adopt Me Name Generator
// Generates cute and playful names with emojis and characters

const cuteWords = [
  "Bella", "Luna", "Coco", "Milo", "Max", "Charlie", "Daisy", "Lily", "Rose", "Ruby",
  "Peach", "Berry", "Honey", "Sugar", "Cookie", "Cupcake", "Muffin", "Pancake", "Waffle", "Donut",
  "Cloud", "Star", "Moon", "Sun", "Sky", "Rain", "Snow", "Breeze", "Wind", "Flower",
  "Panda", "Bunny", "Kitty", "Puppy", "Bear", "Fox", "Wolf", "Tiger", "Lion", "Dragon",
  "Princess", "Prince", "Queen", "King", "Angel", "Fairy", "Elf", "Witch", "Wizard", "Knight",
  "Sparkle", "Glitter", "Shine", "Glow", "Twinkle", "Flash", "Beam", "Ray", "Light", "Bright",
  "Sweet", "Cute", "Adorable", "Charming", "Lovely", "Pretty", "Beautiful", "Gorgeous", "Stunning", "Elegant",
  "Happy", "Joy", "Bliss", "Cheer", "Glee", "Delight", "Pleasure", "Fun", "Play", "Game",
  "Magic", "Wonder", "Dream", "Hope", "Wish", "Desire", "Fantasy", "Mystic", "Enchant", "Mystery",
  "Candy", "Choco", "Vanilla", "Strawberry", "Cherry", "Apple", "Orange", "Lemon", "Grape", "Kiwi",
  "Bubble", "Pop", "Fizz", "Splash", "Drip", "Drop", "Wave", "Ocean", "Beach", "Sand",
];

const cuteSuffixes = [
  "ie", "y", "ey", "ee", "oo", "aa", "ii", "uu", "zz", "xx",
  "bear", "bunny", "kitty", "puppy", "baby", "doll", "angel", "star", "moon", "sun",
  "kins", "ling", "let", "ette", "ita", "ina", "ella", "ella", "ina", "ette",
];

const emojis = {
  animals: ["🐾", "🐱", "🐶", "🐰", "🐻", "🐼", "🦊", "🐯", "🦁", "🐸", "🐨", "🐷", "🐮", "🐴", "🦄", "🐝", "🦋", "🐢", "🐍", "🐙"],
  hearts: ["💕", "💖", "💗", "💓", "💞", "💝", "💘", "💟", "❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔", "❣️", "💌"],
  stars: ["⭐", "🌟", "✨", "💫", "🌠", "⭐️", "🌟", "✨", "💫", "🌠"],
  flowers: ["🌸", "🌺", "🌻", "🌷", "🌹", "🌼", "💐", "🌾", "🌿", "🍀"],
  food: ["🍓", "🍒", "🍑", "🍊", "🍋", "🍌", "🍉", "🍇", "🍎", "🍐", "🍰", "🧁", "🍪", "🍩", "🍫", "🍬", "🍭", "🍮", "🍯"],
  nature: ["🌙", "☀️", "⭐", "🌟", "☁️", "🌈", "🌊", "🌺", "🌸", "🌻"],
  cute: ["💖", "💕", "✨", "🌟", "🌸", "🐾", "💫", "🌙", "⭐", "💝"],
};

const decorations = [
  "⋆", "★", "✦", "✧", "♡", "♥", "💕", "💖", "✨", "🌟",
  "🌸", "🌺", "🌻", "🌷", "🌹", "💐", "🌙", "☀️", "⭐", "🌟",
  "🐾", "💫", "🌠", "💝", "💘", "💗", "💓", "💞", "💟", "❣️",
];

// Generate a random cute name
export function generateCuteName(): string {
  const word = cuteWords[Math.floor(Math.random() * cuteWords.length)];
  const useSuffix = Math.random() > 0.6; // 40% chance to use suffix
  const suffix = useSuffix ? cuteSuffixes[Math.floor(Math.random() * cuteSuffixes.length)] : "";
  const baseName = suffix ? word + suffix : word;

  // Add emoji (85% chance for more cute names)
  let name = baseName;
  if (Math.random() > 0.15) {
    const emojiType = Math.random();
    let emoji = "";
    
    if (emojiType < 0.25) {
      emoji = emojis.animals[Math.floor(Math.random() * emojis.animals.length)];
    } else if (emojiType < 0.45) {
      emoji = emojis.hearts[Math.floor(Math.random() * emojis.hearts.length)];
    } else if (emojiType < 0.6) {
      emoji = emojis.stars[Math.floor(Math.random() * emojis.stars.length)];
    } else if (emojiType < 0.75) {
      emoji = emojis.flowers[Math.floor(Math.random() * emojis.flowers.length)];
    } else if (emojiType < 0.85) {
      emoji = emojis.food[Math.floor(Math.random() * emojis.food.length)];
    } else {
      emoji = emojis.cute[Math.floor(Math.random() * emojis.cute.length)];
    }

    // Decide emoji position (60% after, 40% before for better readability)
    if (Math.random() > 0.4) {
      name = name + " " + emoji;
    } else {
      name = emoji + " " + name;
    }
  }

  // Add decoration (30% chance, less is more)
  if (Math.random() > 0.7) {
    const decoration = decorations[Math.floor(Math.random() * decorations.length)];
    // Always add decoration at the end for cleaner look
    name = name + " " + decoration;
  }

  return name;
}

// Generate multiple names
export function generateNames(count: number = 5): string[] {
  const names: string[] = [];
  const usedNames = new Set<string>();
  
  while (names.length < count) {
    const name = generateCuteName();
    if (!usedNames.has(name)) {
      names.push(name);
      usedNames.add(name);
    }
  }
  
  return names;
}

// Generate a name with specific style
export function generateStyledName(style: (text: string) => string): string {
  const baseName = generateCuteName();
  // Extract text part (remove emojis for styling, then add them back)
  const textMatch = baseName.match(/[a-zA-Z]+/);
  if (textMatch) {
    const text = textMatch[0];
    const styledText = style(text);
    // Replace the text part with styled version
    return baseName.replace(text, styledText);
  }
  return style(baseName);
}

