/// DOCUMENT REFERENCE VARIABLES FOR PC ///
const possibleChoices = document.querySelectorAll('button')
const innerAllRolls = document.getElementById("all-roll");
const innerFinalRoll = document.getElementById("final-roll");

const pcResults = document.getElementById("🌠");
const displayStory = document.getElementById("❤️");
const displaySpecies = document.getElementById("🧝🏽");
const displayPath = document.getElementById("🔥");
const displayBuilder = document.getElementById("builder");
const displayScrolls = document.getElementById("📜");
const displayPotions = document.getElementById("⚗️");
const displayIncl = document.getElementById("🤹🏽");
const rrResults = document.getElementsByClassName("🔮");
// const rollResults = document.getElementById("🎲");
const rrTest = document.getElementsByClassName("real");
const displayGear = document.getElementById("⚔️");

/// DOCUMENT REFERENCE VARIABLES FOR RR ///
const lairLocale = document.getElementById("lair-locale");
const lairAspect = document.getElementById("lair-aspect");
const lairBoss = document.getElementById("lair-boss");
const monster = document.getElementById("monster");
const magicItem = document.getElementById("magic-item");
const treasure = document.getElementById("treasure");
const npc = document.getElementById("npc");
const twist = document.getElementById("twists");
const quest = document.getElementById("quests");

/// BUTTON VARIABLES ///
const rrAllBtn = document.getElementById("rrAll-btn");
const lairBtn = document.getElementById("lair-btn");
const monsterBtn = document.getElementById("monsters-btn");
const magicItemBtn = document.getElementById("magicItem-btn");
const treasureBtn = document.getElementById("treasure-btn");
const npcBtn = document.getElementById("npc-btn");
const twistBtn = document.getElementById("twist-btn");
const questBtn = document.getElementById("quest-btn");
const rrScrollsBtn = document.getElementById("rr-scrolls");
const rrResetBtn = document.getElementById("rr-reset");
const diceBtn = document.getElementById("dice-btn");
const pdfBtn = document.getElementById("pdf-btn");

const tabToggle = document.getElementById("tab-toggle");
const tabBtns = document.querySelectorAll('input[name="tool-toggle"]');

const diceModal = document.getElementById("dice-modal");

/// CONSTANT VARIABLES ///
const MAX_KINGLY = 100000;
const MAX_LORDLY = 99000;
const MAX_WEALTHY = 80000;
const MAX_MODERATE = 75000;
const MAX_POOR = 1000;
const wwWealth = [
    "Skint",  // Can barely afford supplies (3 per week), cannot afford gear.
    "Hard-up",  // Up to 6 supplies per week, can buy one cobbled weapon at a Hold.
    "Stiff",  // Up to 10 supplies per week, can buy up to 3 items including benchmark weapons.
    "Shiny",  // Unlimited supplies, can buy any gear at a Hold including modified weapons.
    "Chrome",  // Can afford anything for sale including vehicles and upgrades, may have underlings.
    "Loaded"  // Can buy anything, holds are well-defended, a VIP in the wasteland.
];

/// PC VARIABLES CALLED IN VARIOUS FUNCTIONS ///
const pcList = [];
let aSaveOption = 3; //for pdf
let wealthDropFix = 0; // for pdf

/// NPC VARIABLES ///
let npcSpecies
let npcWealth

/// ALL TABLES FROM THE BOOK AND MORE ///
const pathsArray = [ 
    'Warrior', 
    'Warden', 
    'Delver', 
    'Brute', 
    'Rascal', 
    'Friar', 
    'Conjurer', 
    'Beastmaster', 
    'Skald'
];

const wwPathsArray = [
    "Android",
    "Clone",
    "Hunter",
    "Machine Head",
    "Mutie",
    "Rambler",
    "Scavie",
    "Wasteland Warrior",
    "Weird",
    "Jack"
];


const circlesArray = [
    "Arcane Bands", "Blastmaster", "Botanicalist", "Elementalist", "Illusionist", 
    "Necromancer", "Seer", "Shadoweaver", "Shapeshifter"
];

const speciesArray = [
    "Human", 
    "Human", 
    "Elf", 
    "Dwarf", 
    "Halfling", 
    "Goblin"
];

const npcSpeciesArray = [
    " Human", 
    " Human", 
    "n Elf", 
    " Dwarf", 
    " Halfling", 
    " Goblin"
];

const inclinationsArray = [
    "Alchemist", 
    "Attuned", 
    "Hatred of the Unholy", 
    "Born Blessed", 
    "Catlike",
    "Check Mate", 
    "Chirurgeon", 
    "Craftperson", 
    "Dandy", 
    "Danger Sense", 
    "Devout",
    "Faithful", 
    "Familiar", 
    "Fate Touched", 
    "Fighter", 
    "Hedge Wizard", 
    "Inspiring",
    "Iron Will", 
    "Lockpicking", 
    "Marksman", 
    "Nimbus of Light", 
    "Slippery", 
    "Sneaky",
    "Sticky Fingers", 
    "Sweep Attack", 
    "Thaumaturgy", 
    "Tough Bastard", 
    "Trapfinder",
    "Treasure Sense", 
    "Victory in Failure"
];

const survivorTalentsArray = [
    "Acrobatic",
    "Animal Empathy",
    "Athletic",
    "Big Guns",
    "Catlike",
    "Comfortably Numb",
    "Cyborg",
    "Damn Lucky",
    "Danger Sense",
    "Dealfinder",
    "Hardy Constitution",
    "Jacker",
    "Klepto",
    "Leadership",
    "Leadfoot",
    "Lucky Bastard",
    "Marksman",
    "Medic",
    "Miasma Psyphon",
    "Mysteries of the Fall",
    "Nullbrain",
    "Packrat",
    "Paranoid",
    "Psychic Node",
    "Quicksilver",
    "Regenerative Gutwurm",
    "Rider",
    "Shield Master",
    "Silent Killer",
    "Skirmisher",
    "Slippery",
    "Stalker",
    "Swirling Attack",
    "Tough Sumbitch",
    "Trap Breaker",
    "Traveling Sharpshooter",
    "Unexpected Side Effect",
    "Yakky"
];

const physicalMutationsArray = [
    "Echolocation",
    "Hardened Scales",
    "Hump",
    "Leaping",
    "Prehensile Tail",
    "Tusks or Horns",
    "Retractable Claws",
    "Rubbery",
    "Spines",
    "Sticky Spittle"
];

const mentalMutationsArray = [
  "Befuddle",
  "Brain Sift",
  "ESP",
  "Feedback",
  "Jaunt",
  "Lifetaker",
  "Mind Force",
  "Precog",
  "Shimmer",
  "Telepathy"
];

const dnaModsArray = [
    "Advanced Tastebuds",
    "Flexible Skeleton",
    "Gel Excretion",
    "Heightened Senses",
    "Idyllic Memories",
    "Modified Kidneys",
    "Nictitating Membrane",
    "Oily Excretion",
    "Sleepless",
    "Slowed Metabolism"
];

const bioSynthPackagesArray = [
    "Cerebral Uplink",
    "Hidden Compartment",
    "Language Module",
    "Luminous Eyes",
    "Milk Blood",
    "NuFlesh",
    "Overdrive",
    "Recharge Ports",
    "Shielded Innards",
    "Spectra Vision"
];

const survivorAspectsArray = [
    // Aspects 1
    "Hard drinker", "Great singing voice", "Found a scrap haul",
    "Lousy Gambler", "Visionary", "Lucky in Love",
    "Wanted", "Gunslinger", "Exterminator",
    "Road hog", "Eclectic clothing", "Ew! Skin growths",
    "Unemotional", "Vigilante", "Oddity collector",
    "Dowser", "Saw too much", "Galahad",
    "Distinct body odor", "Botanist",

    // Aspects 2
    "Seeking siblings", "Scientist", "Grifter",
    "Geologist", "Tidy", "Arsonist",
    "Junkie", "Odd eyes, hair, skin", "Playful",
    "Gun nut", "Light sleeper", "Comedian",
    "Socially invisible", "Psychologist", "Outrageous hairdo",
    "Coward", "Can’t keep a secret", "Cool cat",
    "Awoke from a pod", "Optimist",

    // Aspects 3
    "Orphaned", "Geometry expert", "Strong stomach",
    "Sucker for sob story", "Hollow legs", "Pessimist",
    "Nosey Parker", "Restorationist", "Mentor",
    "Beast Hunter", "Vintage movie buff", "Kiss n’ Tell",
    "Risk taker", "Never your fault", "Gearhead Prophet",
    "Tech seeker", "A hugger", "Clear-headed",
    "Lost Tribesman", "End is nigh type"
];

const monstersArray = [
    'Animals',
    'Animated Skeleton',
    'Demon',
    'Dragon (Young)',
    'Dragon (Great Wyrm)',
    'Elementals',
    'Familiar',
    'Gargoyle',
    'Giant',
    'Golem',
    'Living Jelly',
    'Manticore',
    'Medusa',
    'Mirror Mage',
    'Ogre',
    'Spider',
    'Swarm',
    'Troll',
    'Wraith',
    'Zombie',
    'The Beast',
    'Deathlurker',
    'Drek',
    'Festoid',
    'Gorgwar',
    'Greeblix',
    'Grey Ones',
    'Grubbers',
    'Grubber Brood Queen',
    'Knoblogg',
    'Kragor',
    'Mistyspawn',
    'Murdrath',
    'Murkstrike',
    'Sarlakarn',
    'Sunscalefolk',
    'Warp Bat',
    'Weirdling',
    'Whyte',
    'Worm of the Wastes' 
];

const namesPrefix = ["Xa", "Ki", "Lu", "Bel", "So", "Re", "A", "No"];
const namesRoot = ["dran", "mara", "ka", "ten", "ya", "cian", "lan", "dok"];
const namesSuffix = ["morn", "don", "sen", "goth", "ez", "lock", "no", "fast"];

const firstNames = [
    'Wren',
    'Illuna',
    'Luxia',
    'Lili',
    'Lexla',
    'Fiera',
    'Amylia',
    'Podi',
    'Lexla',
    'Syrine',
    'Ilda',
    'Peppeni',
    'Vyra',
    'Fayla',
    'Lucerna',
    'Therda',
    'Malexia',
    'Luxia',
    'Laryen',
    'Felinra',
    'Venknhar',
    'Narf',
    'Bargo',
    'Maladon',
    'Luvis',
    'Ratso',
    'Sarden',
    'Bradwarden',
    'Nogg',
    'Acris',
    'Domody',
    'Nort',
    'Marko',
    'Braxxen',
    'Baldwar',
    'Leof',
    'Moak',
    'Grimbly',
    'Foddr',
    'Garlos',
    tbgFirstNames(),
];

const origins = [
    "a noble house", 
    "a remote village", 
    "a lonely island", 
    "a large city", 
    "a seastead", 
    "a border stronghold",
    "a merchant caravan", 
    "a hidden warren", 
    "a roadside inn", 
    "a ship at sea", 
    "a working farm", 
    "a foreign land",
    "a mountain town", 
    "a royal court", 
    "a nomadic tribe", 
    "the wilderness",
    "... I wish I knew"
];

const heritages = [
    "animistic rituals", 
    "their delicious ale", 
    "absolutely nothing", 
    "a famous festival",
    "their sense of duty", 
    "a great temple", 
    "enduring a terrible tragedy", 
    "an important landmark",
    "their expert craftsmanship", 
    "trade success", 
    "being unruly criminals", 
    "their devout belief", 
    "a deadly blood feud",
    "their fertile farmland", 
    "their unusual traditions", 
    "their warm hospitality"
];

const backgrounds = [
    "cultist", 
    "guard", 
    "cobbler", 
    "student", 
    "cup-bearer", 
    "burglar", 
    "jester", 
    "jailer",
    "minstrel", 
    "artist", 
    "fisher", 
    "story teller", 
    "gladiator", 
    "smith", 
    "merchant", 
    "butcher",
    "squire", 
    "hermit", 
    "knight", 
    "mercenary", 
    "noble", 
    "guide", 
    "pirate", 
    "shaman", 
    "sailor",
    "hunter", 
    "smuggler", 
    "soldier", 
    "spy", 
    "fisher", 
    "trapper", 
    "carpenter", 
    "farmer", 
    "homesteader",
    "weaver", 
    "baker", 
    "thatcher", 
    "candlemaker", 
    "tanner", 
    "beggar", 
    "wheelwright", 
    "brewer",
    "tax collector", 
    "chef", 
    "barrister", 
    "miller", 
    "miner", 
    "stable keep", 
    "fletcher", 
    "servant",
    "executioner", 
    "innkeep", 
    "scribe", 
    "apothecary"
];

const beliefs = [
    "order", 
    "justice", 
    "heroism", 
    "compassion", 
    "generosity", 
    "pleasure", 
    "logic", 
    "salvation", 
    "honor",
    "security", 
    "wealth", 
    "power"
];

const flaws = [
    "fear", 
    "lies", 
    "absurdity", 
    "hastiness", 
    "gluttony", 
    "delusion", 
    "oblivion", 
    "thievery", 
    "vanity", 
    "ineptitude", 
    "lethargy", 
    "wrath"
];

const oaths = [
    "find", 
    "punish", 
    "meet", 
    "become", 
    "build", 
    "overturn", 
    "settle", 
    "advance", 
    "avenge", 
    "redeem", 
    "save", 
    "destroy"
];

const npcPurposeArray = [
    'foil the heroes at all costs', 
    'give the heroes a difficult moral choice', 
    'mentor the heroes', 
    "play on the heroes' sense of duty for their own gain", 
    'be incompetent and make the heroes work harder', 
    'be a good-natured fool, or rube'
];

const npcWantsArray = [
    'seek help with a task that is far beyond them', 
    'are just trying to get by', 
    'enjoy being in company with the party', 
    'want to avenge a wrong doing', 
    'want to spread their beliefs', 
    'work as little as possible'
];

const npcActionsArray = [
    'lord over others', 
    'work to gain as much power as possible', 
    'are just and fair', 
    'care only for their personal desires, regardless of others', 'are callous and uncaring, or cruel', 
    'prize wealth above eveything'
];

const goalsArray = [
    "find", 
    "punish", 
    "meet", 
    "become", 
    "build", 
    "overturn", 
    "settle", 
    "advance", 
    "avenge", 
    "redeem", 
    "save", 
    "destroy"
];

const bodyTypes = [
    "feminine", 
    "masculine", 
    "feminine", 
    "masculine", 
    "feminine", 
    "masculine", 
    "neutral", 
    "fluid"
];

const bodyBuilds = [
    "stocky", 
    "muscular", 
    "thin", 
    "average", 
    "average", 
    "average", 
    "average"
];

const bodyHeights = [
    "short", 
    "unusually tall", 
    "unusually short", 
    "tall", 
    "of average height", 
    "of average height", 
    "of average height", 
    "of average height"
];

const bodyVoices = [
    "deep", 
    "loud", 
    "soft-spoken", 
    "stoic", 
    "high-pitched", 
    "scratchy", 
    "strongly accented",
    "posh", 
    "monotone", 
    "gruff"
];

const gearArray = [
    "thin but strong rope (50')", 
    "pole", "knife", 
    "oilskin bag", 
    "backpack", 
    "preserved rations", 
    "metal spikes (x24)", 
    "metal tongs", 
    "lantern", 
    "torches (x5)", 
    "nails", 
    "sack",
    "flint & steel", 
    "waterskin", 
    "small hammer", 
    "flask of oil", 
    "crowbar", 
    "chisel",
    "grappling hook", 
    "chalk sticks", 
    "whistle", 
    "horn", 
    "padlock and key", 
    "pot of grease",
    // Items below here are specialty gear
    "smelling salts", 
    "holy water", 
    "perfume", 
    "spyglass", 
    "holy symbol", 
    "mancales",
    "quill with ink and parchment", 
    "makeup", 
    "small bell", 
    "air bladder", 
    "magnifying glass", 
    "incense",
    "poison antidote", 
    "strong hooch", 
    "bone dice", 
    "caltrops", 
    "profession tools", 
    "hidden pockets",
    "lodestone", 
    "handheld mirror", 
    "exotic spices", 
    "bellows", 
    "fake jewels", 
    "card deck"
];

const scrollsArray = [
    "Quinton’s Lucky Charm", 
    "Slasloosh’s Water Elemental Call", 
    "Abrax’s Mirror Walk",
    "Bopinerro’s Befriend", 
    "Flivindia’s Floating", 
    "Vindella’s Vale of the Unseen",
    "Phendrex’s Pheromone", 
    "Minstar’s Mage Bubble", 
    "Goyle’s Mr. Bones",
    "Galbrax’s Gimmie", 
    "Abozium’s Hypnotize", 
    "Snagtooth’s Snoop",
    "Evak’s Secret Reveal", 
    "Mistrel’s True Eye", 
    "Sabbat’s Spinner",
    "Razduk’s Missile repellent", 
    "Druzella’s Dolly", 
    "Mardrak’s Mind Reading",
    "Vaspin’s Void Lock", 
    "Poppin’s Portable Hole", 
    "Zar’s Death wish",
    "Woorinval’s Air Elemental’s Call", 
    "Maldamain’s Eye of the Mind", 
    "Soul Bind of Maxdraxius",
    "Mismagick of Maldrak", 
    "Gilmoon’s Unstuckness", 
    "Slime of Suloon",
    "Mistress Aracnahe’s webbing", 
    "Prism of Char", 
    "Gruegall’s Earth Elemental’s Call",
    "Umbilical of Lozomious", 
    "Time slipping of Saldenza", 
    "Malinna’s Spirit call",
    "Madame Palm’s Psychometry", 
    "Frakvat’s Fire Elemental’s Call", 
    "Black curse of Zandra"
];

const potionsArray = [
    "Optim’s potion of the Perfected Eye", 
    "Time Reset of Tolderro Potion", 
    "Lucilla’s Potion of Perfection", 
    "Potion of Malook’s Revenge", 
    "Mistress Aracnahe’s Wall Clinging Potion", 
    "Dromdak’s Potion of Speed"
];

const encounterTwists = [
    'What the?', 
    'Hero aspect.', 
    'Reckoning.', 
    'Dilemma.', 
    'Priceless.', 
    'Collateral.'
];

const battleTwists = [
    "Adds! - more monsters", 
    "Out of time", 
    "Switcheroo", 
    "Tricked", 
    "Join me", 
    "For honor"
];

const lairLocations = [
    'Hidden in plain sight',
    'A haunted location',
    'Ruins',
    'Far away',
    'Magickal',
    'Abberant'
];

const lairAspects = [
    'Obstacles',
    'Traps',
    'Gross',
    'Boss habitat',
    'Magick chaos',
    'Puzzle'
];

const lairBosses = [
    'Mutation',
    'More strikes',
    'Another strike',
    'Magick resist',
    'Weapon resist',
    'Innate magick ability'
];

const questArray = [
    "The Beat Down Brothers - pg. 10",
    "Pest Control - pg. 16",
    "The Haunted Keep - pg. 22",
    "Giant Problems - pg. 34",
    "Dalmerlington's Dilemma - pg. 42",
    "The Remains - pg. 48",
    "The Fallen - pg. 56",
    "The Plague of Ver-men - pg. 64",
    "Mud Momma - pg. 74",
    "Lost City of Uleea - pg. 78",
    "Rise of Grindyluk - pg. 84",
    "The God Machine - pg. 90",
    "Angelfire Tower - pg. 98",
    "The Sanctuary of Laellume - pg. 106",
    "The Fallow - pg. 116",
    "Down on the Doom Docks - pg. 124",
    "The Sordid Sanctuary - pg. 132",
    "The Temple at the End of the World - pg. 140"
];

const treasureArray = [
    'foundPotion',
    'foundScroll',
    '+1 Wealth for each PC',
    '+2 Wealth for each PC',
    'foundPotion',
    'foundScroll',
    '+1 Wealth for each PC',
    '+2 Wealth for each PC',
    "Optim's potion of the Perfected Eye (pg. 92)",
    'Time Reset of Tolderro Potion (pg. 92)',
    "Lucilla's Potion of Perfection (pg. 92)",
    'Potion of Malook’s Revenge (pg. 92)',
    "Mistress Aracnahe's Wall Clinging Potion (pg. 92)",
    "Dromdak's Potion of Speed (pg. 92)",
    'Bracelet of Purging (pg. 92)',
    'Magick Sink Bracelet (pg. 92)',
    'Rings of Talking (pg. 92)',
    'Signet Ring of You (pg. 92)',
    'Ring of Grip (pg. 92)',
    'Ring of Warmth (pg. 92)',
    'Amulet of Lifegiving (pg. 93)',
    'Magickal Conduit Amulet (pg. 93)',
    'Amulet of the Divine Shard (pg. 93)',
    'Amulet of the Orbus (pg. 93)',
    'Bracelet of Freebreath (pg. 93)',
    'Bracelet of Grappling (pg. 93)',
    'Mace of Divinity (pg. 93)',
    'Greyblade the Doomforged (pg. 93)',
    'Dagger of the Blooddrinker (pg. 93)',
    'Mirror Edge (pg. 93)',
    'Storval the Imprisoned (pg. 93)',
    "Aturia’s Spear (pg. 93)",
    'Roggeros’ Repeating Crossbow (pg.94)',
    'Death Seeker Bow (pg.94)',
    'Bow of the Beacon (pg.94)',
    'The Pulverizer (pg.94)',
    'Grace Given Bow (pg.94)',
    'Whistling Bow (pg.94)',
    'Faedra’s Box (pg. 95)',
    'Mystic Map of Thalooz (pg. 95)',
    'Mantle of Avion (pg. 95)',
    'Skull of Maldrusus (pg. 95)',
    'Golden Tadpole (pg. 95)',
    'Horn of the Bravado (pg. 95)',
    'Enchanted Armor (pg. 96)',
    'Thorn Armor (pg. 96)',
    'Slick Armor (pg. 96)',
    'Pocketed Armor (pg. 96)',
    'Elemental Armor (pg. 96)',
    'Enchanted Alloy Armor (pg. 96)',
    'Dragon Scale Armor (pg. 96)',
    'Unbreakable Armor (pg. 96)',
    'Shardling Armor (pg. 96)',
    'Bulwark Armor (pg. 96)',
    'Sarlakarn Armor (pg. 96)',
    'Appearance Changing Armor (pg. 96)',
    'Holy Avenger Platemail (pg. 96)',
    'Thieves’ Chain (pg. 96)',
    'Helmet of Champions (pg. 96)',
    'Infernal Armor (pg. 96)',
    'Shield of Surtur (pg. 96)',
    'Shield of Suns (pg. 96)',
    'Arrowbane (pg. 96)',
    'Horned Helmet of Might (pg. 96)'
];

const magicTypeArray = [
    'a dagger',
    'a sword',
    'a mace',
    'a flail',
    'an axe',
    'a club',
    'a crossbow',
    'a spear',
    'a javelin',
    'a bow',
    'a throwing Axe',
    'a throwing Knife',
    'a greatsword',
    'a halberd',
    'a battleaxe',
    'a quarterstaff',
    'a glaive',
    'a warhammer',
    'a whip',
    'a trident',
    'a maul',
    'a warpick',
    'a handaxe',
    'a sickle',
    'an amulet',
    'a broach',
    'a necklace',
    'a charm',
    'a choker',
    'a torque',
    'a ring',
    'a bracelet',
    'an armband',
    'a tiara',
    'a hair comb',
    'earrings',
    'a belt',
    'boots',
    'a hat',
    'a robe',
    'a cloak',
    'bracers',
    'hide armor',
    'studded armor',
    'chain armor',
    'splint armor',
    'plate armor',
    'a shield'
];

const magicPropArray = [
    'Allspeech',
    'Booming',
    'Boost',
    'Darksight',
    'Divine Shard',
    'Divine Weapon',
    'Doomforged Weapon',
    'Enchanted Melee Weapon',
    'Enchanted Ranged Weapon',
    'Enchanted Armor',
    'Farsight',
    'Fireward',
    'Freebreath',
    'Font',
    'Gleaming',
    'Glide',
    'Grappling',
    'Jaunting',
    'Keen Weapon',
    'Lifegiving',
    'Lifelock',
    'Luck',
    'Magickal Conduit',
    'Magickal Focus',
    'Mindgrip',
    'Mindlock',
    'Orbus',
    'Pocketed Armor',
    'Pocket Dimension',
    'Portable',
    'Relic',
    'Safelanding',
    'Slick Armor',
    'Spider Climb',
    'Spirit Locked',
    'Talking',
    'Thorns',
    'Truetread',
    'Vampiric',
    'Warding'
];

const magicName1 = [
    'Chaos', 
    'Nightmare', 
    'Mind', 
    'Terror', 
    'Dark', 
    'Soul', 
    'Fate', 
    'Fear', 
    'Death', 
    'Wrath', 
    'Hate', 
    'Blood', 
    'Unicorn',
    'Justice'
];

const magicName2 = [
    "Drinker", 
    "Slayer", 
    "Bringer", 
    "Crusher", 
    "Spawn", 
    "Ward", 
    "Scream", 
    "Writhe", 
    "Breath"
];

const wwWeaponsArr = [
    "Ammo",
    "Assault Rifle (Lg)",
    "Bow (Lg)",
    "Crossbow (Lg)",
    "Flash Bang Grenade (Sm)",
    "Grenade (Sm)",
    "Melee Weapon",
    "Molotov (Sm)",
    "Pipebomb (Sm)",
    "Pistol",
    "Rifle (Lg)",
    "Shotgun (Lg)",
    "SMG",
    "Smoke Grenade (Sm)"
];

const wwGearArr = [
    "Backpack",
    "Binoculars",
    "Daily Ration",
    "Ducktape (Sm)",
    "Filtered Canteen",
    "Filtered Mask (Sm)",
    "Flashlight (Sm)",
    "Folding Shovel (Lg)",
    "Goggles (Sm)",
    "Grappling Hook",
    "Handcuffs (Sm)",
    "Hooch (Sm)",
    "Jar (Sm)",
    "Jimmy Bar",
    "Junk Armor (Armor Slot)",
    "Junk Shield (Shield Slot)",
    "Kreemy Kake (Sm)",
    "Portable Mess Kit",
    "Rope (Lg)",
    "Small Fire Extinguisher",
    "Tap Torch (Tapper)",
    "Tarp Cloak",
    "Universal Pocket Knife (Sm)",
    "Wonderslab (Sm)"
];

const drugsArray = [
    "Therataine (Insta-Heal)",
    "Kinonorphine (Pain-Away)",
    "SimFlesh Pack",
    "Halcitane (Buff)",
    "Ecpromal (Pure)",
    "Specuran (Cure-All)",
    "Zevatonin (Flush)",
    "Retroban (Happy)",
    "Predigrel (Purge)",
    "Med Kit"
];

const meleeWeaponMods = [
    "Electrified (Lg) - Stuns target on crit",
    "Spiked (Lg) - Inflicts 2 strikes on first crit",
    "Weighted (Lg) - Causes target to fall prone on crit",
    "Whirring Blades (Lg) - Counterstrike on attacker rolling 1"
];

const speacialWeaponMods = [
    "Burner (Lg) - Sprays chemical fire, sets targets alight",
    "Burner Fuel Canister (Sm) - Ammo for Burner, lasts 1 scene",
    "Grappler Gun (Lg) - Fires barbed hook, can pull targets",
    "Nailer Gun (Lg) - Fires large nails, can pin targets",
    "Nailer Ammo - Ammo for Nailer Gun, counts as supply",
    "Pressure Canister (Sm) - Pressure for Nailer/Grappler, lasts a day",
    "Rocket Launcher (Lg) - Fires HE rockets, 4 strikes on hit",
    "Rockets (Sm) - Ammo for Rocket Launcher"
];

const vehicleModificationsArray = [
    "Reinforced Frame - Boon to Last Ditch Save (LDS)",
    "Welded Armor - Reroll failed Structure Save once per round",
    "Juiced - Outrun vehicles in same/lower class",
    "Tire Grips - Boon to Maneuver Rolls",
    "Spiked Body - Strike grapplers on a 4+",
    "Heavy Machine Gun Mount - 2 strikes, crits on 5+",
    "Reinforced Ram - Reroll one rammage die",
    "Powered Winch - 100 ft metal cable for pulling",
    "Smokescreen - Bane to pursuers for 1 round",
    "Killjacks - Deploy caltrops, forces MvR 6",
    "Rigged to Blow - Vehicle detonates if tampered with",
    "Hellfire Roaster - Sets pursuers on fire",
    "Boom Spear - Explosive lance, 2 strikes on hit",
    "Trailer - Adds cargo, bane to maneuvers",
    "Steering Wheel Lock Bar - Prevents vehicle theft"
];


/// EASE OF USE FUNCTIONS
function fadeInElements(elementIds) {
    requestAnimationFrame(function () {
        elementIds.forEach(function (elementId) {
        // Check the computed style to ensure the initial styles are applied
        window.getComputedStyle(document.getElementById(elementId)).opacity;
  
        // Set opacity to 1 after the initial styles are applied
        document.getElementById(elementId).style.opacity = 1;
      });
    });
};

function callError(txt) {
    document.getElementById("error-txt").innerHTML = txt;
    document.getElementById("error").open = true;
    fadeInElements(["error"])
    setTimeout(() => {
        document.getElementById("error").open = false;
        dialogFade(document.getElementById("error"), 0)
    }, 3000);
};

function callTip(txt) {
    document.getElementById("tip-txt").innerHTML = txt;
    document.getElementById("tip").open = true;
    fadeInElements(["tip"])
    setTimeout(() => {
        document.getElementById("tip").open = false;
        dialogFade(document.getElementById("tip"), 0)
    }, 3000);
};

window.onload = () => {
    setTimeout(() => {
        const welcome = "Try out the new custom build tool!";
        callTip(welcome);
    }, 3000);
};


function randomMath(input) {
    return input[Math.floor(Math.random() * input.length)];
}; // Great for picking a random element from an array.

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}; // Easy random int between two numbers. 

function log(logEntry) {
    return console.log(logEntry);
}; // Shorter log format.

function getButtonText(button) {
    return button.innerText;
}

function getSectionId(spanId) {
    // Find the closest ancestor section element for the given spanId
    const sectionElement = document.getElementById(spanId).closest('section');

    // Return the ID of the section element
    return sectionElement ? sectionElement.id : null;
};

function makingElements(variable, parentId) {

    // let newEle = document.createElement("strong");

    // newEle.innerText = bold;

    // parentId.appendChild(newEle);

    parentId.innerHTML = variable;
}; // Not currently used.

function clearAll() {
    // Get all span elements in the DOM
    const spanElements = document.querySelectorAll('span:not(.keep-span)');
  
    // Loop through each span element and remove its innerHTML
    for (let i = 0; i < spanElements.length; i++) {
        const spanElement = spanElements[i];
        spanElement.innerHTML = '';
      }

    // Clear input fields in forms
    const formInputElements = document.querySelectorAll('.📝form');
    for (let j = 0; j < formInputElements.length; j++) {
        const formInputElement = formInputElements[j];
        // Check if the input element is not a button or checkbox (adjust as needed)
        if (formInputElement.type !== 'button' && formInputElement.type !== 'checkbox') {
        formInputElement.value = '';
        }
    }
};

/////// PC & NPC FUNCTION BUILDING BLOCKS /////
function rollSpecies() {
    return randomMath(speciesArray);
};

function rollNpcSpecies() {
    return randomMath(npcSpeciesArray);
};

function tbgFirstNames() {
    return randomMath(namesPrefix) + randomMath(namesRoot);
};

function spinName(checker) {
    const form = document.getElementById("📝name");

    if (checker || !form.value) {
        //we want to generate name
        pcList[0].getName(1);  
    } else if (!checker) {
        // we want form value
        if (form.value.length < 35){
            const output = form.value;
            pcList[0].getName(1, output);
        } else  {
            const erMsg = "Please pick a shorter name.";
            callError(erMsg);
        }
    }
}

document.getElementById("📝name").addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default form submission
      spinName(false)
      //document.getElementById("📝name-btn").click(); // Programmatically click the button
    }
});
document.getElementById("📝story").addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default form submission
      getStory(false)
    }
});
document.getElementById("📝phys").addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default form submission
      getDescrip(false)
    }
});

function rollName(checker) {
    const first = randomMath(firstNames);
    const last = 
        randomMath(namesPrefix) + 
        randomMath(namesRoot) + 
        randomMath(namesSuffix)
    ;
    if (checker == 0) {
        return first + " " + last;
    } else { return { first, last, }; }
    
};

function rollAppearnace() {
    /// Generate Appearance
    let bodyType = randomMath(bodyTypes);
    console.log(bodyType);

    let bodyBuild = randomMath(bodyBuilds);
    console.log(bodyBuild);

    let bodyHeight = randomMath(bodyHeights);
    console.log(bodyHeight);

    let bodyVoice = randomMath(bodyVoices);
    console.log(bodyVoice);

    return " My body type is " + bodyType + ", " + "build is " 
        + bodyBuild + ", " + "and I'm " 
        + bodyHeight + " with a " + bodyVoice + " voice.";
};

function rollNpcAppearnace() {
    /// Generate Appearance ###
    let bodyType = randomMath(bodyTypes);
    console.log(bodyType);

    let bodyBuild = randomMath(bodyBuilds);
    console.log(bodyBuild);

    let bodyHeight = randomMath(bodyHeights);
    console.log(bodyHeight);

    let bodyVoice = randomMath(bodyVoices);
    console.log(bodyVoice);

    return " Their body type is " + bodyType + ", " + "build is " 
        + bodyBuild + ", " + "and they are " 
        + bodyHeight + " with a " + bodyVoice + " voice.";
};

function rollStory() {
    /// Generate Profession
    const background = ". Before I became a hero, I worked as a " + randomMath(backgrounds);

    /// Generate Origin
    const origin = "I'm from " + randomMath(origins);

    /// Generate Heritage
    const heritage = " where my people are known for " + randomMath(heritages);

    return origin + heritage + background + ".";
};

function rollCore() {
    /// Generate Moral Core (might help inform aspects)
    const belief = "Belief: " + randomMath(beliefs);
    console.log(belief);

    const flaw = "Flaw: " + randomMath(flaws);
    console.log(flaw);

    const oath = "Oath: " + randomMath(oaths);
    console.log(oath);

    return  belief + ". " + flaw + ". " + oath;
};

function spinWealth(checker, btn) {
    pcList[0].getWealth(checker, btn)
}

function clearWealth() {
    pcList[0].wealth = null;
    pcList[0].wealthTier = 0;
    document.getElementById("📝wealth").innerHTML = "";
    pcList[0].updateStats();
}

function rollWealth(checker, btn) {
    //PLEASE NOTE: I'm not the creator of the fillable pdf being used. The original creator made an error in naming convention for the wealth radio group. The variable "wealthDropFix" exists in this code solely for the purpose of addresssing this issue. Namely, cash poor and moderate have to be manually swapped. If we can modify the radio data before use, or if we supply a better form, wealthDropFix can be removed. BE SURE TO CHECK THE PDF FUNCTION.
    let wealth = "";
    let wealthTier = "";
    let tempWealth;

    if (btn == null) { tempWealth = getRndInteger(1, 100000); }
    

    if (tempWealth < MAX_POOR || btn == "Pauper") {
        wealth = "Pauper";
        wealthTier = 1;
        wealthDropFix = 0;
    } else if (tempWealth < MAX_MODERATE || btn == "Cash Poor") {
        wealth = "Cash Poor";
        wealthTier = 2;
        wealthDropFix = 2;
    } else if (tempWealth < MAX_WEALTHY || btn == "Moderate") {
        wealth = "Moderate";
        wealthTier = 3;
        wealthDropFix = 1;
    } else if (tempWealth < MAX_LORDLY || btn == "Wealthy") {
        wealth = "Wealthy";
        wealthTier = 4;
        wealthDropFix = 3;
    } else if (tempWealth < MAX_KINGLY || btn == "Lordly") {
        wealth = "Lordly";
        wealthTier = 5;
        wealthDropFix = 4;
    } else if (tempWealth === MAX_KINGLY || btn ==  "Kingly") {
        wealth = "Kingly";
        wealthTier = 6;
        wealthDropFix = 5;
    } else {
        wealth = "Sorry, there was an error"
    }
    console.log(wealth)
    if (checker == 0) { // for npcs
        wealthDropFix = 0;
        return wealth;
    } else if (checker == 2) {
        return wealthTier;
    } else { return { wealth, wealthTier }; }
};

function getBasics() {
    displayStory.style.display = "block";
    pcList[0].getName();
    getStory(true);
    pcList[0].getCore();
    pcList[0].getBody();
    pcList[0].getWealth();

    
};

function getPcSpecies(checker, btn) {
    pcList[0].getSpecies(checker, btn);
};

function clearSpecies() {
    pcList[0].species = null;
    document.getElementById("📝species").innerHTML = "";
    pcList[0].updateStats();
}

function getInclinations(checker, btn) {
    pcList[0].getInclinations(checker, btn);
};

function clearInclinations() {
    pcList[0].inclinations = [];
    pcList[0].updateStats();
    document.getElementById("📝inclinations").innerHTML = "";
    document.getElementById("📝karma").innerHTML = "";
};

function getPath(checker, btn) {
    //selectBtn.firstElementChild.innerText = "Select a Path";
    pcList[0].getPath(checker, btn);
};

function clearPath() {
    pcList[0].path = null;
    pcList[0].circle = null;
    pcList[0].circleTxt = null;
    pcList[0].updateStats();
    document.getElementById("📝path").innerHTML = "";
    document.getElementById("📝boons").innerHTML = "";
    document.getElementById("📝features").innerHTML = "";
    document.getElementById("📝strikes").innerHTML = "";
    document.getElementById("📝armor").innerHTML = "";
    document.getElementById("📝aSave").innerHTML = "";
    document.getElementById("📝mSave").innerHTML = "";
    document.getElementById("📝scrolls").innerHTML = "";
    document.getElementById("📝potions").innerHTML = "";
}

function clearName() {
    pcList[0].name = null;
    document.getElementById("📝name").value = "";
    pcList[0].updateStats();
};

function getGear(checker) {
    pcList[0].getGear(checker);
};

function clearGear() {
    pcList[0].equipment = [];
    document.getElementById("📝gear").innerHTML = "";
    pcList[0].updateStats();
};

function getScrolls(checker) {
    pcList[0].getScrolls(checker);
};

function clearScrolls() {
    pcList[0].scrolls = [];
    document.getElementById("📝scrolls").innerHTML = "";
    pcList[0].updateStats();
};

function getPotions(checker) {
    if (checker == 0) {
        return randomMath(potionsArray);
    } else { pcList[0].getPotions(checker); }
};

function clearPotions() {
    pcList[0].potions = [];
    document.getElementById("📝potions").innerHTML = "";
    pcList[0].updateStats();
};

function getDescrip(checker) {
    const form = document.getElementById("📝phys");
    if (checker || !form.value) {
        //we want to generate name
        pcList[0].getBody(1);
    } else if (!checker) {
        // we want form value
        if (form.value.length < 100){
            const output = form.value;
            pcList[0].getBody(1, output);
        } else  {
            const erMsg = "Please write a shorter description.";
            callError(erMsg);
        }
    }
};

function clearDescrip() {
    pcList[0].description = null;
    document.getElementById("📝phys").value = "";
    pcList[0].updateStats();
};

function getCore() {
    pcList[0].getCore();
};

function clearCore() {
    pcList[0].core = null;
    document.getElementById("📝core").value = "";
    pcList[0].updateStats();
};

function getStory(checker) {
    const storyForm = document.getElementById("📝story");

    if (checker || !storyForm.value) {
        //we want to generate name
        pcList[0].getStory(1);
    } else if (!checker) {
        // we want storyForm value
        if (storyForm.value.length < 100){
            const output = storyForm.value;
            pcList[0].getStory(1, output);
        } else {
            const erMsg = "Please write a shorter backstory.";
            callError(erMsg);
        }
    }
};

function clearStory() {
    pcList[0].story = null;
    document.getElementById("📝story").value = "";
    pcList[0].updateStats();
};

function showBuilder() {
    reset()
    document.getElementById("📝-container").style.display = "block";
    document.getElementById("all-PC-btns").style.display = "none";
    pcList[0].setBuilder();
};

function clearBuilder() {
    reset();
    document.getElementById("📝-container").style.display = "none";
    document.getElementById("all-PC-btns").style.display = "block";
    pcList[0].setGenTool();
};

function rollAll() {

    reset();

    getPath();
    
    getPcSpecies();
    
    getInclinations();

    getBasics();

    getGear();
    
    //selectBtn.firstElementChild.innerText = "Select a Path";
};

/// RR FUNCTIONS ///
function rollMonster() {
    monster.innerHTML = randomMath(monstersArray);
    monster.parentElement.style.display = "block";
};

function rollLair() {
    lairLocale.innerHTML = "Location: " + randomMath(lairLocations);
    lairAspect.innerHTML = "Aspect: " + randomMath(lairAspects);
    lairBoss.innerHTML = "Boss Buff: " + randomMath(lairBosses);
    lairBoss.parentElement.style.display = "block";
};

function rollMagicItem() {
    magicItem.parentElement.style.display = "block";
    let itemName = randomMath(magicName1) + " " 
        + randomMath(magicName2)
    ;

    let itemType = randomMath(magicTypeArray);

    let itemProp = randomMath(magicPropArray);

    magicItem.innerHTML =  "" + itemName + ", " + itemType + " with the " + itemProp + " magic property.";
};

function rollTreasure() {
    treasure.parentElement.style.display = "block";
    let treasureTemp = randomMath(treasureArray);

    if (treasureTemp === 'foundPotion') {
        treasure.innerHTML = getRndInteger(1, 3) 
            + " healing potion(s)."
        ;
    }
    else if (treasureTemp === "foundScroll") {
        treasure.innerHTML = rollOneScroll();
    } else {
        treasure.innerHTML = treasureTemp;
    }
};

function rollNPC() {
    // Make name
    let npcName = rollName(0);

    // Generate species
    let npcSpecies = rollNpcSpecies();

    // Generate appearance
    let npcAppearance = rollNpcAppearnace();

    /// Generate Purpose
    let npc_purpose = randomMath(npcPurposeArray);
    console.log(npc_purpose);

    /// Generate Common Want
    let npcWant = randomMath(npcWantsArray);
    console.log(npcWant);

    /// Generate 
    let npcAction = randomMath(npcActionsArray);
    console.log(npcAction);

    let npcInfo = npcName + " is a" + npcSpecies + ". " + npcAppearance + " Thier purpose is to " + npc_purpose + ". " + "If this is a common NPC, they " + npcWant + "." +
    " If this is a powerful NPC, they " + npcAction + ". " + "Their wealth level is " + rollWealth(0) + ".";

    npc.parentElement.style.display = "block";
    npc.innerHTML = npcInfo;
};

function rollTwist() {
    let twistReturn = "Encounter twist ... " 
        + randomMath(encounterTwists) 
        + " Battle twist ... " 
        + randomMath(battleTwists) 
        + ". See pg. 105 for more."
    ;
    twist.parentElement.style.display = "block";
    twist.innerHTML = twistReturn;
};

function rollQuest() {
    let twistReturn = randomMath(questArray);
    quest.parentElement.style.display = "block";
    quest.innerHTML = twistReturn;
};

/// BUTTON FUNCTIONS ///
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    if (userChoice === "full-btn") {
        rollAll();
    };
    if (userChoice === "inclinations-btn") {
        getInclinations();
    };
    if (userChoice === "basics-btn") {
        getBasics();
    };
    if (userChoice === "gear-btn") {
        getGear();  
    };
    if (userChoice === "reset-btn") {
        reset();
    };
    if (userChoice === "species-btn") {
        getPcSpecies();
    }
    if (userChoice === "path-btn") {
        getPath();
    };
    if (userChoice === "potions-btn") {
        getPotions();
    };
    if (userChoice === "scrolls-btn") {
        getScrolls();
    };
    if (userChoice === "build-btn") {
        showBuilder();
    };
    if (userChoice === "settings-btn") {
        const soon = "Coming soon for Settings:"
        const soon1 = "Choose your preferred pdf."
        const soon2 = "Or disable pesky tips and sounds"
        callTip(soon);
        setTimeout(() => {
            callTip(soon1)
        }, 3500);
        setTimeout(() => {
            callTip(soon2)
        }, 7000);

    };
    console.log("User pressed btn:", getButtonText(e.target), "-ID:", userChoice)
}))



rrAllBtn.onclick = () => {
    rollMonster();
    rollLair();
    rollMagicItem();
    rollTreasure();
    rollNPC();
    rollTwist();
    rollQuest();
}; // 

monsterBtn.onclick = () => {
    rollMonster();
}; // 

lairBtn.onclick = () => {
    rollLair();
}; // 

magicItemBtn.onclick = () => {
    rollMagicItem();
}; // 

treasureBtn.onclick = () => {
    rollTreasure();
}; // 

npcBtn.onclick = () => {
    rollNPC();
}; // 

twistBtn.onclick = () => {
    rollTwist();
}; // 

questBtn.onclick = () => {
    rollQuest();
}; // 

rrResetBtn.onclick = () => {
    document.querySelectorAll('.🔮').forEach(function(el) {
        el.style.display = 'none';
    });
};

/// WAY TOO MUCH CODE FOR A TRANSITION ///
function dialogFade(element, opacity) {
    element.style.opacity = opacity;
    element.style.transition = "none"; // Disable transition temporarily
    requestAnimationFrame(() => {
      element.style.transition = ""; // Re-enable transition
    });
};

function clearDiceResults() {
    document.getElementById("formula-input").value = "";
    dialogFade(document.getElementById("🎲🎲"), 0)
    dialogFade(document.getElementById("🎲"), 0)
};

function showDiceRoll(num, face, type) {
    const die = { amount: num, face: face, type: type };
    const rolls = [];

    for (let i = 0; i < die.amount; i++) {
        rolls.push(getRndInteger(1, die.face));
    }

    let finalRoll = 0;

    if (die.type == "fr") {
        finalRoll = rolls.reduce((sum, roll) => sum + roll, 0);
        console.log("The final roll is:", finalRoll);
    } else if (die.type == "kh") {
        finalRoll = Math.max(...rolls);
        console.log("With a boon, final roll is:", finalRoll);
    } else if (die.type == "kl") {
        finalRoll = Math.min(...rolls);
        console.log("With a bane, final roll is:", finalRoll);
    } else {
        console.error("Invalid die type");
    }

    innerAllRolls.innerHTML = rolls.join(", ");
    innerFinalRoll.innerHTML = finalRoll;
    document.getElementById("🎲🎲").open = true;
    document.getElementById("🎲").open = true;

    // Below is needed to get the first transition to work
    // There must be an easier way, have not figured it out yet
    fadeInElements(["🎲", "🎲🎲"])
};

document.getElementById("d6-btn").onclick = () => {
    showDiceRoll(1, 6, "fr");
};

document.getElementById("boon-btn").onclick = () => {
    showDiceRoll(2, 6, "kh");
};

document.getElementById("bane-btn").onclick = () => {
    showDiceRoll(2, 6, "kl");
};

document.getElementById('formula-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default form submission
      document.getElementById('formula-btn').click(); // Programmatically click the button
    }
});

document.getElementById("formula-btn").onclick = () => {
    const form = document.getElementById('formula-input');
    
    if (!form.value) { 
        alert("Please enter a dice formula, such as 2d20");    
    } else if (form.value.length > 12) { 
        alert("Entry too long or incorrect formula.");
    } else {
        const die = { amount: 1, face: 6, type: "fr" };

        // Parse the input string to get amount, face, and type
        const matches = form.value.match(/^(\d+)d(\d+)(kl|kh|fr)?$/);
        
        if (matches) {
            die.amount = parseInt(matches[1], 10);
            die.face = parseInt(matches[2], 10);
            die.type = matches[3] || "fr";

            console.log("Dice formula was accepted:", die);

            showDiceRoll(die.amount, die.face, die.type)

            const buttonAudio = new Audio("Assets/dice.mp3");
            buttonAudio.volume = 0.2;
            buttonAudio.play();
        } else {
            alert("Incorrect formula format. Please use a format like '2d20', '4d4kh', '3d6kl', etc.");
        }
    }
};

document.getElementById("dice-reset").onclick = () => {
    clearDiceResults();
};

/// PC Reset ///
function reset() {
    //selectBtn.firstElementChild.innerText = "Select a Path";
    document.querySelectorAll('.🌠').forEach(function(el) {
        el.style.display = 'none';
    });
    document.querySelectorAll(".green-box").forEach(function(el) {
        //console.log(el)
        el.innerHTML = "";
    });
    //document.getElementById("📝name").value = "";
    pcList[0].resetToDefault(); 
    //document.getElementById("circle").innerHTML = ""

    clearAll(); // some fields are just too stubborn
};

/// SWITCH BETWEEN TOOL TABS ///
tabToggle.onclick = () => {
    assignTab()
};

function checkToggle() {
    for (const radioButton of tabBtns) {
        if (radioButton.checked) {
          return radioButton.value;
        }
}}; // Finds which tab is toggled

function assignTab() {
    if (checkToggle() == "pc-tools") {
        document.getElementById("pc-tab").style.display = 'block';
        document.getElementById("rr-tab").style.display = 'none';
        document.getElementById("dice-tab").style.display = 'none';
    } else if (checkToggle() == "rr-tools") {
        document.getElementById("rr-tab").style.display = 'block';
        document.getElementById("pc-tab").style.display = 'none';
        document.getElementById("dice-tab").style.display = 'none';
    } else if (checkToggle() == "dice-tools") {
        document.getElementById("rr-tab").style.display = 'none';
        document.getElementById("pc-tab").style.display = 'none';
        document.getElementById("dice-tab").style.display = 'block';
    } else {
        alert("Sorry, there was an error getting a tab. Please refresh the page. ERROR CODE: 1409");
}};

assignTab();


/// BUTTON AUDIO ///
const buttons = document.querySelectorAll("button");

buttons.forEach (button => {
    // Check if the button id is "formula-input"
    if (button.id === "formula-input") {
        // return without playing audio
        return;
    }
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        // Timothy Huang wrote this code to check for mobile.
    } else {
        button.addEventListener("click", () => {
            const allowedIDs = ["d6-btn", "boon-btn", "bane-btn"];
            const buttonAudio = new Audio("Assets/" + (allowedIDs.includes(button.id) ? "dice.mp3" : "click.mp3"));
            buttonAudio.volume = allowedIDs.includes(button.id) ? 0.2 : 0.1;
            buttonAudio.play();
        });
    }
});

///// PDF Stuff /////
const { degrees, PDFDocument, rgb, StandardFonts, PDFTextField, PDFRadioGroup, PDFDropdown } = PDFLib

const btn = document.querySelector('#fillForm');

// pdfBtn.addEventListener("click", fillForm);
pdfBtn.addEventListener("click", () => {
    fillForm()
      .then(() => {
        console.log("Form filled successfully!");
      })
      .catch((error) => {
        console.log("Error:", error)
        const erMsg = "Not enough info to complete character sheet";
        callError(erMsg);
      });
});

async function fillForm() {
    // Fetch the PDF with form fields
    const formUrl = "Assets/ezd6PCform.pdf";
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());

    // Load a PDF with form fields
    const pdfDoc = await PDFDocument.load(formPdfBytes);

    // Get the form containing all the fields
    const form = pdfDoc.getForm();

    //Find form fields and set the default font size
    const fields = form.getFields();

    fields.forEach(field => {

        if (field instanceof PDFTextField) {
            const type = "Text Field";
            const name = field.getName();
            console.log(`${type}: ${name}`);
        }
        if (field instanceof PDFRadioGroup) {
            const type = "Radio Group";
            const name = field.getName();
            const options = field.getOptions()
            console.log(`${type}: ${name} | ` + 'Options:', options);
        }
        if (field instanceof PDFDropdown) {
            const type = "Dropdown";
            const name = field.getName();
            const options = field.getOptions()
            console.log(`${type}: ${name} | ` + 'Options:', options)
        }
    });

    // Set metadata
    pdfDoc.setTitle("EZD6 CS");
    pdfDoc.setAuthor("EZ Tools, by TBG");

    // Get all fields in the PDF by their names
    const nameField = form.getTextField('Name');
    const speciesField = form.getTextField('Species');
    const inclField = form.getTextField('Inclinations');
    inclField.setFontSize(12); //default huge for some reason


    const boonsField = form.getTextField('Boons');
    const sorcDetailsField = form.getTextField('Sorcery');
    const gearField = form.getTextField('Equipment');
    const karmaDrop = form.getDropdown('Karma');
    const karmaOptions = karmaDrop.getOptions();

    const wealthGroup = form.getRadioGroup('Group1');
    const wealthOptions = wealthGroup.getOptions();

    const detailsField = form.getTextField('Equipment 2');
    const featuresField = form.getTextField('Features');
    featuresField.setFontSize(13); //default strange size

    const sorcCircleField = form.getTextField('Circle');
    const armorField = form.getTextField('Armor');

    const potionsField = form.getTextField('Potions');
    const scrollsField = form.getTextField('Scrolls');
    const weaponsField = form.getTextField('Weapons');
    const pathField = form.getTextField('Path');
    const strikesField = form.getTextField('Strikes');
    strikesField.setFontSize(60); //more legible
    strikesField.setAlignment(1); //1 for center in pdf-lib

    const heroDrop = form.getDropdown('Hero Die');
    const heroOptions = heroDrop.getOptions();

    const aSaveDrop = form.getDropdown('Armor Save');
    aSaveDrop.setOptions(['2+', '3+', '4+', '5+', '6'])
    const aSaveOptions = aSaveDrop.getOptions();

    const healthField = form.getTextField('Health');
    const aspectsField = form.getTextField('Aspects');

    // Fill in pdf fields
    //if (pcList[0].name) {nameField.setText(pcList[0].name)};
    nameField.setText(pcList[0].name)
    speciesField.setText(pcList[0].species);
    wealthGroup.select(wealthOptions[wealthDropFix]);
    
    if (pcList[0].inclinations.length <= 0) {
        getInclinations(1);
        console.log("Auto rolled Inclinations")
    };

    inclField.setText(
        pcList[0].inclinations.join('\n')
    );

    karmaDrop.select(karmaOptions[pcList[0].karma]);
    
    if (pcList[0].boons) {boonsField.setText(pcList[0].boons.join(", "))};

    if (pcList[0].path === "Conjurer") {
        sorcCircleField.setText(pcList[0].circleTxt);
        sorcDetailsField.setText("Pages 35-39 detail the Circles of Sorcery. ");
    }
    
    gearField.setText(pcList[0].equipment.join(", "));
    detailsField.setText(pcList[0].description);
    featuresField.setText(pcList[0].features);
    
    armorField.setText("M. Save: " + pcList[0].miracleSave);

    //heroDrop.select(heroOptions[1]); //set by default
    
    aSaveDrop.select(aSaveOptions[aSaveOption]);

    healthField.setText(pcList[0].strikes);
    aspectsField.setText(pcList[0].story);

    if (pcList[0].potions) {
        potionsField.setText(
            pcList[0].potions.join('\n'),
        );
    };
    if (pcList[0].scrolls) {
        scrollsField.setText(
            pcList[0].scrolls.join('\n'),
        );
    };
    weaponsField.setText("Decide on your weaponry (pg. 40)");
    pathField.setText(pcList[0].path);
    strikesField.setText(pcList[0].strikes);

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();

    // Trigger the browser to download the PDF document
    download(pdfBytes, pcList[0].name, "application/pdf");
};


///// CUSTOM BUILDER /////
class PC {
    constructor() {
        this.isBuilder = false;
        this.name = "";
        this.basics = "";
        this.story = "";
        this.style = "";
        this.core = "";
        this.description = "";
        this.wealth = "";
        this.wealthTier = 0;
        this.path = "";
        this.circle = "";
        this.circleTxt = "";
        this.species = "";
        this.boons = [];
        this.banes = [];
        this.features = "";
        this.maxInclinations = 2;
        this.inclinations = [];
        this.incTip = null;
        this.equipment = [];
        this.scrolls = [];
        this.potions = [];
        this.karma = "";
        this.strikes = "";
        this.armorType = "";
        this.armorSave = "";
        this.miracleSave = "";
        this.bodyType = "";
        this.bodyBuild = "";
        this.bodyHeight = "";
        this.bodyVoice = "";
    };

    resetToDefault() {
        const defaults = new PC();
        // Copy default values to the current instance
        Object.assign(this, defaults);
    };

    setBuilder() {
        this.isBuilder = true;
    }

    setGenTool() {
        this.isBuilder = false;
    }

    mapPropertiesToHtml() { // associate this with doc IDs
        const propertyMapping = [];

        // Define the mapping of properties to HTML element IDs
        const mapping = {
            name: "name",
            basics: "build-txt",
            path: "path",
            circle: "circle",
            strikes: "strikes",
            boons: "boons",
            features: "features",
            armorType: "armor",
            armorSave: "aSave",
            miracleSave: "mSave",
            karma: "karma",
            wealth: "wealth",
            inclinations: "inclinations",
            incTip: "inc-tip",
            equipment: "gear",
            potions: "potions",
            scrolls: "scrolls",
            species: "species",
            story: "story",
            core: "core",
            description: "phys",
        };

        // If useEmojiIds is true, update the mapping to use emoji-prefixed IDs
        if (this.isBuilder) {
            for (const prop in mapping) {
                mapping[prop] = `📝${mapping[prop]}`;
            }
        }

        for (const prop in this) {
            const id = mapping[prop];
            if (id !== undefined) {
                const htmlElement = document.getElementById(id);
                const propValue = this[prop];
                propertyMapping.push({
                    prop: propValue,
                    id: htmlElement,
                });
            }
        }

        return propertyMapping;
    }

    showInfo(mapping) {
        // Check if mapping is valid and has an associated HTML element
        if (mapping && mapping.id) {
            // Check if the property is an array
            if (Array.isArray(mapping.prop)) {
                // If it's an array, join it with ", " and set as innerHTML
                mapping.id.innerHTML = mapping.prop.join(", ");
            } else {
                // If not an array, set the innerHTML as is
                mapping.id.tagName.toLowerCase() === 'input'
                ? (mapping.id.value = mapping.prop)
                : (mapping.id.innerHTML = mapping.prop);
                // was working: mapping.id.innerHTML = mapping.prop;
            }
        }  
    }

    displayValid() {
        //const propertiesMapping = this.mapPropertiesToHtml(checker);
        const propertiesMapping = this.mapPropertiesToHtml();

        for (const mapping of propertiesMapping) {
            const propValue = mapping.prop;

            // Check if propValue is valid based on your conditions
            const isValid =
                propValue !== null &&
                !(Array.isArray(propValue) && propValue.length === 0) &&
                propValue !== 0 && propValue != "";
            if (isValid) {
                this.showInfo(mapping);
            }
            // if (!isValid) {
            //     this.hideInfo(mapping);
            // }
        }
    };

    getWealth(checker, btn) {

        if (checker == 1) { // custom builder random
            const { wealth, wealthTier } = rollWealth();
            this.wealth = wealth;
            this.wealthTier = wealthTier;
        } else if (checker == 2) { // custom builder manual
            // const { wealth, wealthTier } = rollWealth(checker, getButtonText(btn));
            this.wealth = getButtonText(btn);
            this.wealthTier = rollWealth(2, getButtonText(btn))
        }
        else { // main tool random
            const { wealth, wealthTier } = rollWealth();
            this.wealth = wealth;
            this.wealthTier = wealthTier;
            displayGear.style.display = "block"
        }
        this.updateStats();
    };

    getPath(checker, btn) {
        if (checker == 1) { // custom builder random
            this.path = randomMath(pathsArray);
        } else if (checker == 2) { // custom builder manual
            this.path = getButtonText(btn);
        }
        else { // main tool random
            this.path = randomMath(pathsArray);
            displayPath.style.display = "block"
        }

        // Set the dropdown to default and avoid errors
        //selectBtn.firstElementChild.innerText = "Select a Path";
    
        if (this.path === "Conjurer") {
            this.circle = "Circle of Sorcery: " + randomMath(circlesArray);
            this.circleTxt = this.circle.substring("Circle of Sorcery: ".length);
            console.log('magic circle is ' + this.circle);
            this.getScrolls();
        } else if (this.path === "Skald") {
            this.getScrolls();
        }

        this.updateStats();
        //this.displayValid(checkBuilder);
        console.log("A path was chosen:", this.path);
    };

    getSpecies(checker, btn) {
        this.species = rollSpecies();

        if (checker == 2) { // custom builder manual
            pcList[0].species = getButtonText(btn);
        };
       if (!checker) { // original random tools
            displaySpecies.style.display = "block";
        };
        this.updateStats();
    };

    getIncTxt() {
        return (this.maxInclinations - this.inclinations.length) + " of " + this.maxInclinations + " remaining."
    }

    getInclinations(checker, btn) {
        this.updateStats();

        if (checker == 1) { // custom builder random
            this.rollInclination();
        } else if (checker == 2) { // custom builder manual
            this.rollInclination(getButtonText(btn));
        }
        else { 
            displayIncl.style.display = "block"
            this.rollInclination();
        } 
        this.updateStats();
    }

    rollInclination(choice) {
        if (!choice) {
            this.inclinations = [];
            for (let i = 0; i < this.maxInclinations; i++) {
                let tempIncl = randomMath(inclinationsArray);
                if (!this.inclinations.includes(tempIncl)) {
                    // Only runs if value not already in array
                    this.inclinations.push(tempIncl);
                    console.log(tempIncl);
                } else {
                    console.log(tempIncl + " was a duplicate.");
                    this.rollInclination(); // Restart to avoid duplicates.
                }
            };
        } else if (choice) {
            if (this.inclinations.length < this.maxInclinations) {
                if (!this.inclinations.includes(choice)) {
                    // Only runs if value not already in array
                    this.inclinations.push(choice);
                    console.log(choice);  
                } else { console.log(choice + " was a duplicate") }
            } else {
                const erMsg = "Maximum Inclinations has been reached."
                callError(erMsg)
            }
        }
        console.log(this.inclinations.join(", "));
        this.getKarma(); // Karma total is based off Inclinations.
        this.updateStats();
    };

    getKarma() {
        if (this.inclinations.includes("Born Blessed")) {
            this.karma = "6";
        } else {
            this.karma = "3";
        }
        console.log(this.karma);
    }

    getBody(checker, input) {
        if (!input) { // random tool was used
            this.bodyType = "My body type is " + randomMath(bodyTypes);
        this.bodyBuild = ", build is " + randomMath(bodyBuilds);
        this.bodyHeight = ", and I'm " + randomMath(bodyHeights);
        this.bodyVoice = " with a " + randomMath(bodyVoices) + " voice.";

        this.description = this.bodyType + this.bodyBuild + this.bodyHeight + this.bodyVoice;
            console.log("Random description:", this.description)
        } else { // user typed custom info
            this.description = input;
            console.log("Custom description:", this.description)
        }
        this.displayValid();
        this.updateStats();
    };

    updateStats() {
        this.features = null;
        this.boons = [];
        if (this.path === "Brute") {
            this.strikes = "5"
        } else {
            this.strikes = "3"
        }
        
        /// ### Path Specific Tasks ###
        if (this.path === "Warrior") {
            aSaveOption = 1; //for pdf
            this.armorSave = "3+";
            this.miracleSave = "6";
            this.armorType = "Heavy"
            this.boons.push("Melee, Strength Tasks")
            this.features = "Shield Sacrifice, Brutal Strikes, Dual Weapons, Armor save 4+ w/o shield"
        } else if (this.path === "Warden") {
            aSaveOption = 3; //for pdf
            this.armorSave = "5+"
            this.miracleSave = "6"
            this.armorType = "Medium"
            this.boons.push("Ranged Weapons, Wilderness Tasks")
            this.features = "Trailfinder, Forager"
        } else if (this.path === "Delver") {
            aSaveOption = 3; //for pdf  
            this.armorSave = "5+"
            this.miracleSave = "6"
            this.armorType = "Medium"
            this.boons.push("Melee OR Ranged Weapons, Spelunking Tasks")
            this.features = "Gear, Jack"
        } else if (this.path === "Brute") {  
            aSaveOption = 4; //for pdf
            this.armorSave = "6"
            this.miracleSave = "6"
            this.armorType = "Light"
            this.boons.push("Melee, Strength Tasks")
            this.features = "Enrage, Superstitious"
        } else if (this.path === "Rascal") {  
            aSaveOption = 4; //for pdf
            this.armorSave = "6 with a boon"
            this.miracleSave = "6 with a boon"
            this.armorType = "Light"
            this.boons.push("Acrobatic Tasks")
            this.features = "Tricks, Gank, Boon to Armor & Miracle saves"
        } else if (this.path === "Conjurer") {  
            aSaveOption = 4; //for pdf
            this.armorSave = "6"
            this.miracleSave = "6"
            this.armorType = "Light"
            this.boons.push("Magickal Mystery Tasks")
            this.features = "Mystic Barrier, Master of Magick, Wand or Staff"
        } else if (this.path === "Friar") { 
            aSaveOption = 3; //for pdf 
            this.armorSave = "5+"
            this.miracleSave = "5+"
            this.armorType = "Medium"
            this.boons.push("Resist Heritical Powers (magick), Religious Knowledge")
            this.features = "Empathic Healing, Holy Light"
        } else if (this.path === "Skald") {  
            aSaveOption = 3; //for pdf
            this.armorSave = "5+"
            this.miracleSave = "5+"
            this.armorType = "Medium"
            this.boons.push("Lore Tasks, Performance Tasks")
            this.features = "Scrollmaster, Traveler, Strands of Fate"
        } else if (this.path === "Beastmaster") {
            aSaveOption = 3; //for pdf
            this.armorSave = "5+"
            this.miracleSave = "6"
            this.armorType = "Medium"
            this.boons.push("Melee OR Ranged Weapons, Beast Empathy")
            this.features = "Beastspeech, Beast Aid, Beast Friend"
        } else if (this.path === "" || this.path == null) {
            this.armorSave = null;
            this.miracleSave = "";
            this.armorType = "";
            this.boons = "";
            this.features = "";
            this.scrolls = "";
            this.potions = "";
        }

        if (this.path === "Delver" && this.species === "Human") {
            this.maxInclinations = 4;
        } else if (this.species === "Human" || this.path === "Delver") {
            this.maxInclinations = 3;
        } else {
            this.maxInclinations = 2;
        }// Path and species determines number of Incl rolls.

        if (this.inclinations.length > this.maxInclinations) {
            // Calculate the number of items to remove
            const itemsToRemove = this.inclinations.length - this.maxInclinations;

            // Use splice to remove items from the beginning of the array
            this.inclinations.splice(0, itemsToRemove);
        }

        this.incTip = this.getIncTxt();
        console.log("max incs:", this.maxInclinations)
        this.displayValid()
    };

    getScrolls() {
        this.scrolls = [];
        this.scrolls.push(randomMath(scrollsArray));
        this.scrolls.push(randomMath(scrollsArray));
        console.log("User rolled new scrolls:", this.scrolls);

       if (!this.isBuilder) { // original random tools
            displayScrolls.style.display = "block";
        };
        this.displayValid();
        this.updateStats();
    };

    getName(checker, input) {
        if (!input) { // random tool was used
            const { first, last} = rollName();
            this.name = first + " " + last;
            console.log("Random name:", this.name)
        } else { // user typed custom info
            this.name = input;
            console.log("Custom name:", this.name)
        }
        this.displayValid();
        this.updateStats();

        if (checker !== 1) { // custom builder random
            document.getElementById("nam").style.display = "block"
        }
    };

    getStory(checker, input) {

        if (!input) { // random tool was used
            this.story = rollStory();
            console.log("Random story:", this.story)
        } else { // user typed custom info
            this.story = input;
            console.log("Custom story:", this.story)
        }
        this.displayValid();
        this.updateStats();

        if (checker !== 1) { // custom builder random
            //document.getElementById("nam").style.display = "block"
        }
    };

    getCore() {
        this.core = rollCore();
        this.displayValid();
    };

    rollGear() {
        pcList[0].equipment = [];
        if (pcList[0].equipment.length <= 0) {
            for (let i = 0; i < pcList[0].wealthTier * 3; i++) {
                pcList[0].equipment.push(randomMath(gearArray));
            }
        }
        console.log(pcList[0].equipment.join(", "));
        pcList[0].equipment.join(", ");
    };

    getGear(checker, btn) {
        if (this.wealthTier <= 0) {
            this.getWealth(1);
        }
    
        if (checker == 1) { // only for custom builder
            this.rollGear();
        } else if (checker == 2) { // user selected with btn
            this.equipment.push(getButtonText(btn));
        }
        else { // random tool was used
            this.rollGear();
            displayGear.style.display = "block";
        }
        this.displayValid();
        this.updateStats();
    };

    getPotions(checker) {
        this.potions = [];
        this.potions.push(randomMath(potionsArray));
        this.potions.push(randomMath(potionsArray));

        console.log("User rolled new potions:", this.potions);

        if (!checker) { // random tool was used
            displayPotions.style.display = "block";
        }
        this.displayValid();
        this.updateStats();
    };

};
pcList.push(new PC);
// console.log(pcList[0].mapPropertiesToHtml())

function pickUnique(array, count) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

class WastedPath {
    constructor() {
        this.strikes = 3;
        this.path = null;
        this.wealth = { name: "Hard-Up", value: 2 };
        this.inclinations = [];
        this.aspects = [];
        this.avoidance = 6;
        this.miasmaResistance = "1D6";
        this.armor = { name: "Junk Armor", value: 5 };
        this.gear = [];
        this.possibleEdges = [];
        this.edges = [];
        this.init();
    }

    // Initializes a Survivor character
    init() {
        this.path = randomMath(wwPathsArray);
        this.applyPathAttributes();
        this.aspects = pickUnique(survivorAspectsArray, 2);
        this.addRandomGear();
    }

    // Applies path-specific attributes and gear
    applyPathAttributes() {
        switch (this.path) {
            case "Android":
                this.gear = [
                    wwWeaponsArr[9],            // "Pistol"
                    wwWeaponsArr[6],            // "Melee Weapon"
                    wwGearArr[0],               // "Backpack"
                    drugsArray[1] + " (x2)",    // "Kinonorphine (Pain-Away) (x2)"
                    "supplies (x3)",
                    "memento",
                    wwGearArr[20]               // "Tarp Cloak"
                ];                  
                this.possibleEdges = ["Defensive Shock", "Mimic"];
                this.edges.push(randomMath(this.possibleEdges));
                this.inclinations = ["BioClear"];
                this.inclinations.push(...pickUnique(survivorTalentsArray, 1));
                this.inclinations.push(...pickUnique(bioSynthPackagesArray, 2));
                this.inclinations.push(...pickUnique([...bioSynthPackagesArray, ...survivorTalentsArray], 2));
                break;
            case "Clone":
                this.armor = { name: "Skiensuit", value: 5 };
                // this.gear = ["Benchmark combat knife", "backpack", "supplies (x3)", "Full Spectrum Wristband", "memento"];
                this.gear = [
                    wwWeaponsArr[6],                 // "Melee Weapon"
                    wwGearArr[0],                    // "Backpack"
                    "supplies (x3)",          
                    "Full Spectrum Wristband",
                    "memento"                 
                ];
                this.possibleEdges = ["Enhanced Legs", "Enhanced Coordination"];
                this.edges.push(randomMath(this.possibleEdges));
                this.inclinations = ["Regen"];
                this.inclinations.push(...pickUnique(survivorTalentsArray, 1));
                this.inclinations.push(...pickUnique(dnaModsArray, 2));
                this.inclinations.push(...pickUnique([...dnaModsArray, ...survivorTalentsArray], 2));
                break;
            case "Hunter":
                // this.gear = ["Cobbled rifle", "skinning knife", "binoculars", "tarp cloak", "backpack", "supplies (x3)", "memento"];
                this.gear = [
                    wwWeaponsArr[10],            // "Rifle (Lg)"
                    wwWeaponsArr[6],             // "Melee Weapon"
                    wwGearArr[1],                // "Binoculars"
                    wwGearArr[20],               // "Tarp Cloak"
                    wwGearArr[0],                // "Backpack"
                    "supplies (x3)",
                    "memento"
                ];
                this.possibleEdges = ["Sneak Attack", "Harvester"];
                this.edges.push(randomMath(this.possibleEdges));
                this.inclinations = ["Wasteland Ranger", "Hunters Weapon"];
                this.inclinations.push(...pickUnique(survivorTalentsArray, 4));
                break;
            case "Mutie":
                // this.gear = ["Cobbled melee weapon", "rope", "tarp cloak", "backpack", "pain away (x2)", "supplies (x3)", "memento"];
                this.gear = [
                    wwWeaponsArr[6],                // "Melee Weapon"
                    wwGearArr[18],                  // "Rope (Lg)"
                    wwGearArr[20],                  // "Tarp Cloak"
                    wwGearArr[0],                   // "Backpack"
                    drugsArray[1] + " (x2)",        // "Kinonorphine (Pain-Away) (x2)"
                    "supplies (x3)",
                    "memento"
                ];                  
                this.possibleEdges = ["Adaptive Stomach", "Torpor"];
                this.edges.push(randomMath(this.possibleEdges));
                this.inclinations.push(...pickUnique(physicalMutationsArray, 2));
                this.inclinations.push(...pickUnique(survivorTalentsArray, 2));
                this.inclinations.push(...pickUnique([...physicalMutationsArray, ...survivorTalentsArray], 2));
                break;
            case "Machine Head":
                // this.gear = ["Cobbled pistol", "tool belt", "backpack", "pain away (x2)", "supplies (x3)", "memento"];
                this.gear = [
                    wwWeaponsArr[9],            // "Pistol"
                    "tool belt",
                    wwGearArr[0],               // "Backpack"
                    drugsArray[1] + " (x2)",    // "Kinonorphine (Pain-Away) (x2)"
                    "supplies (x3)",
                    "memento"
                ];                  
                this.possibleEdges = ["Quick Fix", "A.I. PalBot"];
                this.edges.push(randomMath(this.possibleEdges));
                this.inclinations = ["Scrap Boss", "Repairs"];
                this.inclinations.push(...pickUnique(survivorTalentsArray, 4));
                break;
            case "Rambler":
                // this.gear = ["Cobbled pistol", "Cobbled melee weapon", "musical instrument", "backpack", "pain away (x2)", "supplies (x3)", "memento"];
                this.gear = [
                    wwWeaponsArr[9],            // "Pistol"
                    wwWeaponsArr[6],            // "Melee Weapon"
                    "musical instrument",
                    wwGearArr[0],               // "Backpack"
                    drugsArray[1] + " (x2)",    // "Kinonorphine (Pain-Away) (x2)"
                    "supplies (x3)",
                    "memento"
                ];                  
                this.possibleEdges = ["Allies", "Legends After the Fall"];
                this.edges.push(randomMath(this.possibleEdges));
                this.inclinations = ["Traveling Thespian", "Distraction"];
                this.inclinations.push(...pickUnique(survivorTalentsArray, 4));
                break;
            case "Scavie":
                // this.gear = ["cobbled pistol", "cobbled melee weapon", "binoculars", "tarp cloak", "backpack", "pain away (x2)", "supplies (x3)", "memento"];
                this.gear = [
                    wwWeaponsArr[9],            // "cobbled pistol"
                    wwWeaponsArr[6],            // "cobbled melee weapon"
                    wwGearArr[1],               // "Binoculars"
                    wwGearArr[20],              // "Tarp Cloak"
                    wwGearArr[0],               // "Backpack"
                    drugsArray[1] + " (x2)",    // "Kinonorphine (Pain-Away) (x2)"
                    "supplies (x3)",
                    "memento"
                ];                  
                this.possibleEdges = ["Personal Stash", "No Secrets"];
                this.edges.push(randomMath(this.possibleEdges));
                this.inclinations = ["Scrap Seeker", "Rubble Rat"];
                this.inclinations.push(...pickUnique(survivorTalentsArray, 4));
                break;
            case "Wasteland Warrior":
                // this.gear = ["cobbled pistol", "shield", "cobbled melee weapon", "backpack", "pain away (x2)", "supplies (x3)", "memento"];
                this.gear = [
                    wwWeaponsArr[9],            // "Pistol"
                    wwGearArr[15],              // "Junk Shield (Shield Slot)"
                    wwWeaponsArr[6],            // "Melee Weapon"
                    wwGearArr[0],               // "Backpack"
                    drugsArray[1] + " (x2)",    // "Kinonorphine (Pain-Away) (x2)"
                    "supplies (x3)",
                    "memento"
                ];                  
                this.possibleEdges = ["Prime Specimen", "Trigger Discipline"];
                this.edges.push(randomMath(this.possibleEdges));
                this.inclinations = ["War Ready", "Two Fisted"];
                this.inclinations.push(...pickUnique(survivorTalentsArray, 4));
                break;
            case "Weird":
                this.armor = { name: "Base Armor", value: 6 };
                this.miasmaResistance = "2D6";
                // this.gear = ["glowstaff", "goggles", "tarp cloak", "charms", "backpack", "pain away (x2)", "supplies (x3)", "memento"];
                this.gear = [
                    "Glowstaff",
                    wwGearArr[8],                // "Goggles (Sm)"
                    wwGearArr[20],               // "Tarp Cloak"
                    "charms",
                    wwGearArr[0],                // "Backpack"
                    drugsArray[1] + " (x2)",     // "Kinonorphine (Pain-Away) (x2)"
                    "supplies (x3)",
                    "memento"
                ];                  
                this.possibleEdges = ["Mental Shield", "Neuroflux"];
                this.edges.push(randomMath(this.possibleEdges));
                this.inclinations.push(...pickUnique(mentalMutationsArray, 2));
                this.inclinations.push(...pickUnique(survivorTalentsArray, 2));
                this.inclinations.push(...pickUnique([...mentalMutationsArray, ...survivorTalentsArray], 2));
                break;
            case "Jack":
                // this.gear = ["cobbled melee weapon", "tarp cloak", "rope", "backpack", "pain away (x2)", "supplies (x3)", "memento"];
                this.gear = [
                    wwWeaponsArr[6],                // "cobbled melee weapon"
                    wwGearArr[20],                  // "tarp cloak"
                    wwGearArr[18],                  // "rope" -> "Rope (Lg)"
                    wwGearArr[0],                   // "backpack"
                    drugsArray[1] + " (x2)",        // "Kinonorphine (Pain-Away) (x2)"
                    "supplies (x3)",
                    "memento"
                ];                  
                this.possibleEdges = ["One More"];
                this.edges.push(randomMath(this.possibleEdges));
                this.inclinations.push(...pickUnique(survivorTalentsArray, 7));
                break;
            default:
                console.error("Could not assign a Path. Error Code: 2528.")
        }
    };

    addRandomGear() {
        let selectedList;
        const lists = { weapons: wwWeaponsArr, gear: wwGearArr, drugs: drugsArray };
        // const choice = prompt("Choose equipment list: weapons, gear, or drugs");
        const choice = randomMath(Object.keys(lists));
        selectedList = lists[choice] || wwGearArr;

        let item;
        do {
            item = randomMath(selectedList);
        } while (this.gear.includes(item));

        this.gear.push(item);
    };
};

// Example Usage
const survivorBuilder = new WastedPath();
console.log(survivorBuilder);




// class WastedPath {
//     constructor() {
//         this.strikes = 3;
//         this.path = null;
//         this.inclinations = [];
//         this.aspects = [];
//         this.avoidance = 6;
//         this.miasmaResistance = "1D6";
//         this.armor = { name: "Junk Armor", value: 5 };
//         this.gear = [];
//         this.possibleEdges = [];
//         this.edges = [];
//         this.init();
//     }

//     // Initializes a Survivor character
//     init() {
//         this.path = randomMath(wwPathsArray);
//         this.applyPathAttributes();
//         this.inclinations = this.pickInclinations(this.path);
//         this.aspects = this.pickSurvivorAspects();
//     }

//     // Applies path-specific attributes and gear
//     applyPathAttributes() {
//         switch (this.path) {
//             case "Android":
//                 this.armor = { name: "Junk Armor", value: 5 };
//                 this.miasmaResistance = "1D6";
//                 this.gear = ["Cobbled pistol", "Cobbled melee weapon", "backpack", "pain away (x2)", "supplies (x3)", "memento"];
//                 this.possibleEdges = ["Defensive Shock", "Mimic"];
//                 this.edges.push(randomMath(this.possibleEdges));
//                 break;
//             case "Clone":
//                 this.armor = { name: "Skiensuit", value: 5 };
//                 this.miasmaResistance = "1D6";
//                 this.gear = ["Benchmark combat knife", "backpack", "supplies (x3)", "Full Spectrum Wristband", "memento"];
//                 this.possibleEdges = ["Enhanced Legs", "Enhanced Coordination"];
//                 this.edges.push(randomMath(this.possibleEdges));
//                 break;
//             case "Mutie":
//                 this.armor = { name: "Junk Armor", value: 5 };
//                 this.miasmaResistance = "1D6";
//                 this.gear = ["Cobbled melee weapon", "rope", "tarp cloak", "backpack", "pain away (x2)", "supplies (x3)", "memento"];
//                 this.possibleEdges = ["Adaptive Stomach", "Torpor"];
//                 this.edges.push(randomMath(this.possibleEdges));
//                 break;
//             case "Weird":
//                 this.armor = { name: "Base Armor", value: 6 };
//                 this.miasmaResistance = "2D6";
//                 this.gear = ["Glowstaff", "goggles", "tarp cloak", "charms", "backpack", "pain away (x2)", "supplies (x3)", "memento"];
//                 this.possibleEdges = ["Mental Shield", "Neuroflux"];
//                 this.edges.push(randomMath(this.possibleEdges));
//                 break;
//             case "Hunter":
//                 this.armor = { name: "Junk Armor", value: 5 };
//                 this.miasmaResistance = "1D6";
//                 this.gear = ["Cobbled rifle", "skinning knife", "binoculars", "tarp cloak", "backpack", "supplies (x3)", "memento"];
//                 this.possibleEdges = ["Sneak Attack", "Harvester"];
//                 this.edges.push(randomMath(this.possibleEdges));
//                 break;
//             case "Rambler":
//                 this.armor = { name: "Junk Armor", value: 5 };
//                 this.miasmaResistance = "1D6";
//                 this.gear = ["Cobbled pistol", "musical instrument", "backpack", "pain away (x2)", "supplies (x3)", "memento"];
//                 this.possibleEdges = ["Allies", "Legends After the Fall"];
//                 this.edges.push(randomMath(this.possibleEdges));
//                 break;
//             case "Scavie":
//                 this.armor = { name: "Junk Armor", value: 5 };
//                 this.miasmaResistance = "1D6";
//                 this.gear = ["Cobbled pistol", "binoculars", "tarp cloak", "backpack", "pain away (x2)", "supplies (x3)", "memento"];
//                 this.possibleEdges = ["Personal Stash", "No Secrets"];
//                 this.edges.push(randomMath(this.possibleEdges));
//                 break;
//             case "Wasteland Warrior":
//                 this.armor = { name: "Junk Armor", value: 5 };
//                 this.miasmaResistance = "1D6";
//                 this.gear = ["Cobbled pistol", "shield", "backpack", "pain away (x2)", "supplies (x3)", "memento"];
//                 this.possibleEdges = ["Prime Specimen", "Trigger Discipline"];
//                 this.edges.push(randomMath(this.possibleEdges));
//                 break;
//             default:
//                 this.gear = ["Basic gear"];
//                 this.possibleEdges = [];
//         }
//     }

//     // Randomly selects inclinations based on path type
//     pickInclinations(path) {
//         switch (path) {
//             case "Mutie":
//                 return pickUnique(physicalMutationsArray, 6);
//             case "Weird":
//                 return pickUnique(mentalMutationsArray, 6);
//             case "Clone":
//                 return pickUnique(dnaModsArray, 5);
//             case "Android":
//                 return pickUnique(bioSynthPackagesArray, 5);
//             default:
//                 return pickUnique(survivorTalentsArray, 4);
//         }
//     }

//     // Randomly picks unique Survivor Aspects
//     pickSurvivorAspects(count = 2) {
//         return pickUnique(survivorAspectsArray, count);
//     }
// };



// Example Usage
// const survivorBuilder = new WastedPath();
// console.log(survivorBuilder);



// class WastedPath {
//     constructor() {
//         this.paths = [
//             ...pathsArray  // Assuming pathsArray already contains the updated list
//         ];
//         this.survivorTalents = [...survivorTalentsArray];
//         this.physicalMutations = [...physicalMutationsArray];
//         this.mentalMutations = [...mentalMutationsArray];
//         this.dnaModifications = [...dnaModificationsArray];
//         this.bioSynthPackages = [...bioSynthPackagesArray];
//         this.aspects = [...survivorAspectsArray];
//     }

//     // Randomly picks a path
//     pickRandomPath() {
//         return this._randomElement(this.paths);
//     }

//     // Randomly selects inclinations based on path type
//     pickInclinations(path) {
//         switch (path) {
//             case "Mutie":
//                 return this._pickRandomInclinations(this.physicalMutations, 6);
//             case "Weird":
//                 return this._pickRandomInclinations(this.mentalMutations, 6);
//             case "Clone":
//                 return this._pickRandomInclinations(this.dnaModifications, 5);
//             case "Android":
//                 return this._pickRandomInclinations(this.bioSynthPackages, 5);
//             default:
//                 return this._pickRandomInclinations(this.survivorTalents, 4);
//         }
//     }

//     // Randomly picks unique Survivor Aspects
//     pickSurvivorAspects(count = 2) {
//         return [...this.aspects]
//             .sort(() => 0.5 - Math.random())
//             .slice(0, count);
//     }

//     // Utility function to select one random element
//     _randomElement(array) {
//         return array[Math.floor(Math.random() * array.length)];
//     }

//     // Generates a full random Survivor character
//     generateRandomSurvivor() {
//         const path = this.pickRandomPath();
//         const inclinations = this.pickInclinations(path);
//         const aspects = this.pickSurvivorAspects();

//         return {
//             path,
//             inclinations,
//             aspects
//         };
//     }
// };


  
  