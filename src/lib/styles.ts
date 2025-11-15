export type TextStyle = {
  id: string;
  name: string;
  description: string;
  apply: (input: string) => string;
  keywords?: string[];
  icon?: string;
};

const mapRange = (input: string, src: string, dstStart: number): string => {
  let out = "";
  for (const ch of input) {
    const i = src.indexOf(ch);
    if (i >= 0) out += String.fromCodePoint(dstStart + i);
    else out += ch;
  }
  return out;
};

const az = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const azLower = az.toLowerCase();
const digits = "0123456789";

const mapLatin = (input: string, upperStart: number, lowerStart: number): string => {
  let out = "";
  for (const ch of input) {
    const ui = az.indexOf(ch);
    const li = azLower.indexOf(ch);
    const di = digits.indexOf(ch);
    if (ui >= 0) out += String.fromCodePoint(upperStart + ui);
    else if (li >= 0) out += String.fromCodePoint(lowerStart + li);
    else if (di >= 0) out += ch;
    else out += ch;
  }
  return out;
};

const smallCapsMap: Record<string, string> = {
  a: "ᴀ",
  b: "ʙ",
  c: "ᴄ",
  d: "ᴅ",
  e: "ᴇ",
  f: "ғ",
  g: "ɢ",
  h: "ʜ",
  i: "ɪ",
  j: "ᴊ",
  k: "ᴋ",
  l: "ʟ",
  m: "ᴍ",
  n: "ɴ",
  o: "ᴏ",
  p: "ᴘ",
  q: "ǫ",
  r: "ʀ",
  s: "s",
  t: "ᴛ",
  u: "ᴜ",
  v: "ᴠ",
  w: "ᴡ",
  x: "x",
  y: "ʏ",
  z: "ᴢ",
};

const circledUpperStart = 0x24b6;
const circledLowerStart = 0x24d0;

const styles: TextStyle[] = [
  {
    id: "normal",
    name: "Normal",
    description: "Plain text",
    apply: (s) => s,
    keywords: ["roblox", "adopt me", "default"],
    icon: "🔤",
  },
  {
    id: "bold",
    name: "Bold",
    description: "Mathematical Bold",
    apply: (s) => mapLatin(s, 0x1d400, 0x1d41a),
    keywords: ["strong"],
    icon: "🅱️",
  },
  {
    id: "italic",
    name: "Italic",
    description: "Mathematical Italic",
    apply: (s) => mapLatin(s, 0x1d434, 0x1d44e),
    keywords: ["slanted"],
    icon: "𝑰",
  },
  {
    id: "bold-italic",
    name: "Bold Italic",
    description: "Mathematical Bold Italic",
    apply: (s) => mapLatin(s, 0x1d468, 0x1d482),
    icon: "𝑩𝑰",
  },
  {
    id: "script",
    name: "Script",
    description: "Mathematical Script",
    apply: (s) => mapLatin(s, 0x1d49c, 0x1d4b6),
    icon: "✒️",
  },
  {
    id: "bold-script",
    name: "Bold Script",
    description: "Mathematical Bold Script",
    apply: (s) => mapLatin(s, 0x1d4d0, 0x1d4ea),
    icon: "🖋️",
  },
  {
    id: "fraktur",
    name: "Fraktur",
    description: "Mathematical Fraktur",
    apply: (s) => mapLatin(s, 0x1d504, 0x1d51e),
    icon: "𝔉",
  },
  {
    id: "bold-fraktur",
    name: "Bold Fraktur",
    description: "Mathematical Bold Fraktur",
    apply: (s) => mapLatin(s, 0x1d56c, 0x1d586),
    icon: "𝕭",
  },
  {
    id: "sans",
    name: "Sans",
    description: "Mathematical Sans-Serif",
    apply: (s) => mapLatin(s, 0x1d5a0, 0x1d5ba),
    icon: "🅂",
  },
  {
    id: "sans-bold",
    name: "Sans Bold",
    description: "Mathematical Sans-Serif Bold",
    apply: (s) => mapLatin(s, 0x1d5d4, 0x1d5ee),
    icon: "🆂",
  },
  {
    id: "sans-italic",
    name: "Sans Italic",
    description: "Mathematical Sans-Serif Italic",
    apply: (s) => mapLatin(s, 0x1d608, 0x1d622),
    icon: "𝘴",
  },
  {
    id: "monospace",
    name: "Monospace",
    description: "Mathematical Monospace",
    apply: (s) => mapLatin(s, 0x1d670, 0x1d68a),
    icon: "Ⓜ️",
  },
  {
    id: "small-caps",
    name: "Small Caps",
    description: "Unicode small capital letters",
    apply: (s) => {
      let out = "";
      for (const ch of s) {
        const lower = ch.toLowerCase();
        out += smallCapsMap[lower] ?? ch.toUpperCase();
      }
      return out;
    },
    icon: "ᴬ",
  },
  {
    id: "bubble",
    name: "Bubble",
    description: "Circled letters",
    apply: (s) => {
      let out = "";
      for (const ch of s) {
        const ui = az.indexOf(ch);
        const li = azLower.indexOf(ch);
        if (ui >= 0) out += String.fromCodePoint(circledUpperStart + ui);
        else if (li >= 0) out += String.fromCodePoint(circledLowerStart + li);
        else out += ch;
      }
      return out;
    },
    icon: "ⓑ",
  },
  {
    id: "double-struck",
    name: "Double Struck",
    description: "Mathematical Double-Struck",
    apply: (s) => mapLatin(s, 0x1d538, 0x1d552),
    icon: "𝕯",
  },
  {
    id: "fullwidth",
    name: "Aesthetic Fullwidth",
    description: "Vaporwave fullwidth characters",
    apply: (s) => {
      const mapChar = (ch: string) => {
        const ui = az.indexOf(ch);
        const li = azLower.indexOf(ch);
        const di = digits.indexOf(ch);
        if (ui >= 0) return String.fromCodePoint(0xff21 + ui);
        if (li >= 0) return String.fromCodePoint(0xff41 + li);
        if (di >= 0) return String.fromCodePoint(0xff10 + di);
        if (ch === " ") return " ";
        return ch;
      };
      let out = "";
      for (const c of s) out += mapChar(c);
      return out;
    },
    keywords: ["aesthetic", "vaporwave"],
    icon: "Ｆ",
  },
  {
    id: "underline",
    name: "Underline",
    description: "Combining underline",
    apply: (s) => {
      const mark = "\u0332";
      let out = "";
      for (const ch of s) out += ch === " " ? ch : ch + mark;
      return out;
    },
    icon: "⎁",
  },
  {
    id: "strikethrough",
    name: "Strikethrough",
    description: "Combining strikethrough",
    apply: (s) => {
      const mark = "\u0336";
      let out = "";
      for (const ch of s) out += ch === " " ? ch : ch + mark;
      return out;
    },
    icon: "⎂",
  },
  {
    id: "wide",
    name: "Wide Spaced",
    description: "Adds spaces between letters",
    apply: (s) => s.split("").join(" "),
    icon: "↔️",
  },
  {
    id: "stars",
    name: "Stars",
    description: "Stars around text",
    apply: (s) => `★ ${s} ★`,
    icon: "⭐",
  },
  {
    id: "sparkles",
    name: "Sparkles",
    description: "Sparkles around text",
    apply: (s) => `✨ ${s} ✨`,
    icon: "✨",
  },
  {
    id: "arrows",
    name: "Arrows",
    description: "Arrows around text",
    apply: (s) => `➤ ${s} ◀`,
    icon: "➤",
  },
  {
    id: "cute",
    name: "Cute",
    description: "Hearts around text",
    apply: (s) => `♡ ${s} ♡`,
    icon: "🐾",
  },
];

export default styles;