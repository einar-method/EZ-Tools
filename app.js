/// DOCUMENT REFERENCE VARIABLES FOR PC ///
const possibleChoices = document.querySelectorAll('button')
const displayName = document.getElementById('name')
const innerPath = document.getElementById('path')
const innerSpecies = document.getElementById('species')
const innerIncl = document.getElementById('inclinations')
const displayBoons = document.getElementById('boons')
const displayFeatures = document.getElementById('features')
const displayArmor = document.getElementById('armor')
const displayASave = document.getElementById('asave')
const displayMSave = document.getElementById('msave')
const displayKarma = document.getElementById('karma')
const displayWealth = document.getElementById('wealth')
const innerGear = document.getElementById('gear')
const innerStory = document.getElementById('story')
const displayCore = document.getElementById('core')
const displayDescription = document.getElementById('phys')
const innerPotions = document.getElementById('potions')
const innerScrolls = document.getElementById('scroll-choice')

const pcResults = document.getElementById("🌠");
const displayStory = document.getElementById("❤️");
const displaySpecies = document.getElementById("🧝🏽");
const displayPath = document.getElementById("🔥");
const displayScrolls = document.getElementById("📜");
const displayPotions = document.getElementById("⚗️");
const displayIncl = document.getElementById("🤹🏽");
const rrResults = document.getElementsByClassName("🔮");
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
const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInp = wrapper.querySelector("input"),
options = wrapper.querySelector(".path-items");

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

const tabToggle = document.getElementById("tab-toggle");
const tabBtns = document.querySelectorAll('input[name="tool-toggle"]');

const diceModal = document.getElementById("dice-modal");

/// CONSTANT VARIABLES ///
const MAX_KINGLY = 100000;
const MAX_LORDLY = 99000;
const MAX_WEALTHY = 80000;
const MAX_MODERATE = 75000;
const MAX_POOR = 1000;

/// PC VARIABLES CALLED IN VARIOUS FUNCTIONS ///
let userChoice
let computerChoice
let specialComputerChoice
let result
let gearChoice
let scrollChoice
let pcPath
let pcCircle
let pcSpecies
let pcStrikes
let woundsSave
let miracleSave
let pcArmor
let pathFeatures
let pathBoons
let karma
let pcWealth
let wealthTier = 0
let pcPotions = [];
let pcInclinations = [];
let pcGearList = [];
let pcScrolls = [];

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
    "delicious ale", 
    "absolutely nothing", 
    "a famous festival",
    "their sense of duty", 
    "a great temple", 
    "enduring a terrible tragedy", 
    "an important landmark",
    "expert craftsmanship", 
    "trade success", 
    "unruly criminals", 
    "devout belief", 
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

/// EASE OF USE FUNCTIONS
function randomMath(input) {
    return input[Math.floor(Math.random() * input.length)];
}; // Great for picking a random element from an array.

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}; // Easy random int between two numbers. 

function log(logEntry) {
    return console.log(logEntry);
}; // Shorter log format.

function makingElements(variable, parentId) {

    // let newEle = document.createElement("strong");

    // newEle.innerText = bold;

    // parentId.appendChild(newEle);

    parentId.innerHTML = variable;
}; // Not currently used.

////// PDF Stuff /////
const pdfBtn = document.getElementById("pdf-btn");
const makePdf = document.getElementById("pc-content");
pdfBtn.addEventListener("click", function () {
    let mywindow = window.open(displayName.innerHTML, "DOWNLOAD", "height=auto,width=600");
    mywindow.document.write(makePdf.innerHTML);
    mywindow.document.close();
    mywindow.focus();
    mywindow.print();
    return true;
});

/////// PC & NPC FUNCTION BUILDING BLOCKS /////
function rollPath() {
    pcPath = randomMath(pathsArray);
    console.log(pcPath);

    selectBtn.firstElementChild.innerText = "Select a Path";

    if (pcPath === "Conjurer") {
        pcCircle = randomMath(circlesArray);
        console.log('magic circle is ' + pcCircle);

        getScrolls();

        return pcPath + ". Circle of Sorcery: " + pcCircle;
    } else if (pcPath === "Skald") {
        getScrolls();
        return pcPath;
    } else {
        return pcPath;
    }
};

function rollSpecies() {
    return randomMath(speciesArray);
};

function rollNpcSpecies() {
    return randomMath(npcSpeciesArray);
};

function showStats() {
    if (pcPath === "Brute") {
        pcStrikes = "5"
    } else {
        pcStrikes = "3"
    }
    console.log(pcStrikes)
    
    /// ### Path Specific Tasks ###
    if (pcPath === "Warrior") {
        woundsSave = "3+ with shield / 4+ without"
        miracleSave = "6"
        pcArmor = "Heavy"
        pathBoons = "Melee, Strength Tasks"
        pathFeatures = "Shield Sacrifice, Brutal Strikes, Dual Weapons"
    } else if (pcPath === "Warden") {
        woundsSave = "5+"
        miracleSave = "6"
        pcArmor = "Medium"
        pathBoons = "Ranged Weapons, Wilderness Tasks"
        pathFeatures = "Trailfinder, Forager"
    } else if (pcPath === "Delver") {  
        woundsSave = "5+"
        miracleSave = "6"
        pcArmor = "Medium"
        pathBoons = "Melee OR Ranged Weapons, Spelunking Tasks"
        pathFeatures = "Gear, Jack"
    } else if (pcPath === "Brute") {  
        woundsSave = "6"
        miracleSave = "6"
        pcArmor = "Light"
        pathBoons = "Melee, Strength Tasks"
        pathFeatures = "Enrage, Superstitious"
    } else if (pcPath === "Rascal") {  
        woundsSave = "6 with a boon"
        miracleSave = "6 with a boon"
        pcArmor = "Light"
        pathBoons = "Acrobatic Tasks"
        pathFeatures = "Tricks, Gank"
    } else if (pcPath === "Conjurer") {  
        woundsSave = "6"
        miracleSave = "6"
        pcArmor = "Light"
        pathBoons = "Magickal Mystery Tasks"
        pathFeatures = "Mystic Barrier, Master of Magick, Wand or Staff"
        if (pcPath === "Conjurer") {
            pcCircle = randomMath(circlesArray);
            console.log('magic circle is ' + pcCircle)
            innerPath.innerHTML = pcPath + ". Circle of Sorcery: " + pcCircle;
        } 
    } else if (pcPath === "Friar") {  
        woundsSave = "5+"
        miracleSave = "5+"
        pcArmor = "Medium"
        pathBoons = "Resist Heritical Powers (magick), Religious Knowledge"
        pathFeatures = "Empathic Healing, Holy Light"
    } else if (pcPath === "Skald") {  
        woundsSave = "5+"
        miracleSave = "5+"
        pcArmor = "Medium"
        pathBoons = "Lore Tasks, Performance Tasks"
        pathFeatures = "Scrollmaster, Traveler, Strands of Fate"
    } else {
        woundsSave = "5+"
        miracleSave = "6"
        pcArmor = "Medium"
        pathBoons = "Melee OR Ranged Weapons, Beast Empathy"
        pathFeatures = "Beastspeech, Beast Aid, Beast Friend"
    }
    
    console.log(woundsSave)
    console.log(miracleSave)
    console.log(pcArmor)
    console.log(pathBoons)
    console.log(pathFeatures)
    
    displayBoons.innerHTML = pathBoons;
    displayFeatures.innerHTML = pathFeatures;
    displayArmor.innerHTML = pcArmor;
    displayASave.innerHTML = woundsSave;
    displayMSave.innerHTML = miracleSave;
};

function rollInclination() {

    pcInclinations = []; // Clear out any existing Incl first.

    let allowedIncl = 2;

    if (pcPath === "Delver" && pcSpecies === "Human") {
        allowedIncl = 4;
    } else if (pcSpecies === "Human" || pcPath === "Delver") {
        allowedIncl = 3;
    }; // Path and species determines number of Incl rolls.

    for (let i = 0; i < allowedIncl; i++) {
        let tempIncl = randomMath(inclinationsArray);
        if (!pcInclinations.includes(tempIncl)) {
            // Only runs if value not already in array
            pcInclinations.push(tempIncl);
            console.log(tempIncl);
        } else {
            console.log(tempIncl + " was a duplicate.");
            rollInclination(); // Restart to avoid duplicates.
        }
    };

    console.log(pcInclinations.join(", "));
    showKarma(); // Karma total is based off Inclinations.
    return pcInclinations.join(", ");
};

function showKarma() {
    if (pcInclinations.includes("Born Blessed")) {
        karma = "6";
    } else {
        karma = "3";
    }
    console.log(karma);
    displayKarma.innerHTML = karma;
};

function tbgFirstNames() {
    return randomMath(namesPrefix) + randomMath(namesRoot);
};

function rollName() {
    let pcFirstName = randomMath(firstNames);
    
    let pcLastName = 
        randomMath(namesPrefix) + 
        randomMath(namesRoot) + 
        randomMath(namesSuffix)
    ;
    console.log(pcFirstName)
    console.log(pcLastName)

    return pcFirstName + " " + pcLastName;
};

function rollAppearnace() {
    /// Generate Appearance ###
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

function rollGear() {
    pcGearList = [];

    for (let i = 0; i < wealthTier * 3; i++) {
        pcGearList.push(randomMath(gearArray));
    }
    console.log(pcGearList.join(", "));
    return pcGearList.join(", ");
};

function rollStory() {
    /// Generate Profession
    let background = randomMath(backgrounds);
    console.log(background);

    /// Generate Origin
    let origin = randomMath(origins);
    console.log(origin);

    /// Generate Heritage
    let heritage = randomMath(heritages);
    console.log(heritage)

    return "I'm from " + origin + " where my people are known for " + heritage + "." +
    " Before I became a hero, I worked as a " + background + ".";
};

function rollCore() {
    /// Generate Moral Core (might help inform aspects)
    let belief = randomMath(beliefs);
    console.log(belief);

    let flaw = randomMath(flaws);
    console.log(flaw);

    let oath = randomMath(oaths);
    console.log(oath);

    return "Belief: " + belief + "." + " Flaw: " + flaw + "." + " Oath: " + oath;
}

function rollWealth() {

    let tempWealth = getRndInteger(1, 100000);

    if (tempWealth < MAX_POOR) {
        pcWealth = "Pauper";
        wealthTier = 1;
    } else if (tempWealth < MAX_MODERATE) {
        pcWealth = "Cash Poor";
        wealthTier = 2;
    } else if (tempWealth < MAX_WEALTHY) {
        pcWealth = "Moderate";
        wealthTier = 3;
    } else if (tempWealth < MAX_LORDLY) {
        pcWealth = "Wealthy";
        wealthTier = 4;
    } else if (tempWealth < MAX_KINGLY) {
        pcWealth = "Lordly";
        wealthTier = 5;
    } else if (tempWealth === MAX_KINGLY) {
        pcWealth = "Kingly";
        wealthTier = 6;
    } else {
        pcWealth = "Sorry, there was an error"
    }
    console.log(pcWealth)
    return pcWealth;
};

function getBasics() {
    displayStory.style.display = "block";
    displayName.innerHTML = rollName();
    innerStory.innerHTML = rollStory();
    displayCore.innerHTML = rollCore();
    displayDescription.innerHTML = rollAppearnace();
    displayWealth.innerHTML = rollWealth();
};

function getPcSpecies() {
    pcSpecies = rollSpecies();
    displaySpecies.style.display = "block";
    innerSpecies.innerHTML = pcSpecies;
};

function getInclinations() {
    displayIncl.style.display = "block"
    innerIncl.innerHTML = rollInclination();
};

function getGear() {
    displayGear.style.display = "block";
    if (wealthTier <= 0) {
        displayWealth.innerHTML = rollWealth();
        innerGear.innerHTML = rollGear();
    } else if (wealthTier > 0) {
        innerGear.innerHTML = rollGear();
    } else {
        console.log("there was an error getting gear.")
    }; 
};

function getPath() {
    displayPath.style.display = "block"
    innerPath.innerHTML = rollPath();
    showStats();
};

function getScrolls() {
    displayScrolls.style.display = "block";
    pcScrolls = [];

    pcScrolls.push(randomMath(scrollsArray));
    pcScrolls.push(randomMath(scrollsArray));
    console.log(pcScrolls);

    innerScrolls.innerHTML = pcScrolls.join(', ');
    console.log(pcScrolls.join(', '));
    
};

function rollOnePotion() {
    return randomMath(potionsArray);
};

function rollOneScroll() {
    return randomMath(scrollsArray);
};

function getPotions() {
    displayPotions.style.display = "block";
    console.log(pcPotions);

    pcPotions = [];

    pcPotions.push(randomMath(potionsArray));
    pcPotions.push(randomMath(potionsArray));

    console.log(pcPotions);

    innerPotions.innerHTML = pcPotions.join(', ');
};

function rollAll() {

    getPath();
    
    getPcSpecies();
    
    getInclinations();

    getBasics();

    getGear();
    
    selectBtn.firstElementChild.innerText = "Select a Path";
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
    let npcName = rollName();

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
    " If this is a powerful NPC, they " + npcAction + ". " + "Their wealth level is " + rollWealth() + ".";

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


/// DICE MODAL ///
const dice = document.getElementById("die-result");

function rollDiceModal() {

    diceModal.style.display = "block";

    const die = {face:"6"};
    console.log(die);
    const form = document.getElementById('die-input');
    console.log(form.value);

    if (form.value < 2) { // Ensures no blank, 0, 1, or neg values.
 
        console.log("entry too low")

        setTimeout(function(){
            dice.innerHTML = getRndInteger(1, 6);
        }, 800); 
          
    } else if (form.value > 100) { // Ensures nothing over 100.
  
        dieSize = 100;
        console.log("entry too high or not a num")
  
        dice.innerHTML = getRndInteger(1, form.value);
    } else {

        die.face = form.value;
          
        console.log("entry was accepted")

        setTimeout(function(){
            dice.innerHTML = getRndInteger(1, form.value);
        }, 800); 
    }

    setTimeout(function(){
        closeModal();
    }, 1800); 

    dice.innerHTML = "·";  
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == diceModal) {
//         setTimeout(function(){
//             console.log("Executed after 1 second");
//             closeModal();
//         }, 500);   
//     }
// };

function closeModal() {
    diceModal.style.display = "none";
}; // Hides the dice modal

/// BUTTON FUNCTIONS ///
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    if (userChoice === "full") {
        rollAll();
    }
    if (userChoice === "incli") {
        getInclinations();
    }
    if (userChoice === "basics") {
        getBasics();
    }
    if (userChoice === "just-gear") {
        getGear();  
    };
    if (userChoice === "reset") {
        reset();
    }
    if (userChoice === "race-btn") {
        getPcSpecies();
    }
    if (userChoice === "path-btn") {
        getPath();
    }
    if (userChoice === "potion") {
        getPotions();
    }
    if (userChoice === "scrolls") {
        getScrolls();
    }
    if (userChoice === "dice-btn") {
        rollDiceModal();
    }
    console.log("User pressed btn: " + userChoice)
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
}; // 

/// PATH DROPDOWN MENU ///
function addPath(selectedPath) {
    options.innerHTML = "";
    pathsArray.forEach(path => {
        let isSelected = path == selectedPath ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${path}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addPath();

function updateName(selectedLi) {
    addPath(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
    pcPath = selectedLi.innerText;
    displayPath.style.display = "block";
    innerPath.innerHTML = pcPath;
    showStats();
}

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));

/// PC Reset ///
function reset() {
    selectBtn.firstElementChild.innerText = "Select a Path";
    document.querySelectorAll('.🌠').forEach(function(el) {
        el.style.display = 'none';
     });
    pcPath = '';
    pcCircle = '';
    pcSpecies = '';
    pcStrikes = '';
    woundsSave = '';
    miracleSave = '';
    pcArmor = '';
    pathFeatures = '';
    pathBoons = '';
    karma = '';
    potion_0 = '';
    potion_1 = '';
    scroll_0 = '';
    scroll_1 = '';
    innerPath.innerHTML = '';
    displayName.innerHTML = '';
    innerSpecies.innerHTML = '';
    innerIncl.innerHTML = '';
    displayBoons.innerHTML = '';
    displayFeatures.innerHTML = '';
    displayArmor.innerHTML = '';
    displayASave.innerHTML = '';
    displayMSave.innerHTML = '';
    displayKarma.innerHTML = '';
    displayWealth.innerHTML = '';
    innerGear.innerHTML = '';
    innerStory.innerHTML = '';
    displayCore.innerHTML = '';
    displayDescription.innerHTML = ''; 
    innerPotions.innerHTML = '';   
    innerScrolls.innerHTML = ''; 
}; // This function is old and may need to be updated.

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
    } else if (checkToggle() == "rr-tools") {
        document.getElementById("rr-tab").style.display = 'block';
        document.getElementById("pc-tab").style.display = 'none';
    } else {
        alert("Sorry, there was an error getting a tab. Please refresh the page. ERROR CODE: 1409");
}};

assignTab();


/// BUTTON AUDIO ///
const buttons = document.querySelectorAll("button");

buttons.forEach (button => {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        // Timothy Huang wrote this code to check for mobile.
      }else{
        button.addEventListener("click", () => {
            if (button.id != "dice-btn") {
                const buttonAudio = new Audio ("./assets/click.mp3");
                buttonAudio.volume = 0.1;
                buttonAudio.play();
            } else {
                const buttonAudio = new Audio ("./assets/dice.mp3");
                buttonAudio.volume = 0.2;
                buttonAudio.play();
            }
        });
      }
});
