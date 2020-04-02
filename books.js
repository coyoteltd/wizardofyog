var Level1Books=["BasicsOfAlchemy", "AYoungMagesPrimerOnNaturalForces", "TheAdventuresOfVhargGheshInTheWindSultansCourt", "TheBookOfTheTurtle", "AbbessMarigoldsGuideToCommonHerbs", "BeliefsRitesAndCustomsOfTheCommonYoglin","DukeElmosABCs","ZorgodsManyEvilDeeds", "PowerAndSecretsOfFire", "SecretsOfWoodworking", "RunesSymbolsAndSigns", "ForWellHaveILearnedOfThatDreadTemple", "OfGhostsHauntsAndPhantasms", "ReligiousPracticesOfTheFolkOfAndulval", "PotteryForFunAndProfit", "JimmyAndThePurplePancakeMonster", "TheChannelingAndManipulationOfElementalPower", "TheWhispersInTheDarkness","TappingThePowerOfTheMoon","SummoningThePowerOfLife"];

var BasicsOfAlchemy={"title":"Basics of Alchemy", "alchemy":1};
var AYoungMagesPrimerOnNaturalForces={"title":"A Young Mage's Primer on Natural Forces", "manaGen":1};
var TheAdventuresOfVhargGheshInTheWindSultansCourt={"title":"The Adventures of Vharg Shesh in the Wind Sultan's Court", "experience":100};
var TheBookOfTheTurtle={"title":"The Book of the Turtle", "spells":"shield"};
var AbbessMarigoldsGuideToCommonHerbs={"title":"Abbess Marigold's Guide to Common Herbs", "herbalism":1};
var BeliefsRitesAndCustomsOfTheCommonYoglin={"title":"Beliefs, Rites and Customs of the Common Yoglin", "diplomacy":1};
var DukeElmosABCs={"title":"Duke Elmo's ABCs", "literacy":1};
var ZorgodsManyEvilDeeds={"title":"Zorgod's Many Evil Deeds", "cunning":1};
var PowerAndSecretsOfFire={"title":"Power and Secrets of Fire", "spells":"flame"};
var SecretsOfWoodworking={"title":"Secrets of Woodworking", "crafting":1};
var RunesSymbolsAndSigns={"title":"Runes, Symbols and Signs", "runes":1};
var ForWellHaveILearnedOfThatDreadTemple={"title":"For Well Have I Learned of That Dread Temple", "sanity":-1};
var OfGhostsHauntsAndPhantasms={"title":"Of Ghosts, Haunts and Phantasms", "spiritualism":1};
var ReligiousPracticesOfTheFolkOfAndulval={"title":"Religious Practices of the Folk of Andulval", "religion":1};
var PotteryForFunAndProfit={"title":"Pottery For Fun and Profit", "clayoven":true};
var JimmyAndThePurplePancakeMonster={"title":"Jimmy and the Purple Pancake Monster", "illusions":1};
var TheChannelingAndManipulationOfElementalPower={"title":"The Channeling and Manipulation of Elemental Power", "elementalism":1};
var TheWhispersInTheDarkness={"title":"The Whispers in the Darkness", "demonology":1};
var TappingThePowerOfTheMoon={"title":"Tapping the Power of the Moon", "spells":"darkness"};
var SummoningThePowerOfLife={"title":"Summoning the Power of Life", "spells":"healing"};

var Level2Books=["TheBookOfTheHare", "TheAdventuresOfVhargGheshInTheDesertsOfVavoo", "AloneUponTheMountainTop", "CanYouSpellTarasqueByDukeElmo", "AYoungMagesGuideToManipulatingForce", "MeditationSecretsOfTheMonksOfTeshu", "SecretsOfASalaciousSuccubus", "TheFineCraftOfStoneCarving","LifeAmongTheYorks","ThievesGuildsHateTheseFiveSimpleTraps", "APatternWeaversGuideToMysticalConnections","TheGloryOfTheSlaughterByGeneralGrorvolg", "AlchemicalTransmutations", "AtTheCenterOfCreationHeWrithesAndTwists", "YlvenHolidaysAndFestivals", "MagicMikesStupendousPartyTricks", "ABookOfLivingLiesAndUndeadHalftruths", "WaterAirEarthAndFireGrantToMeMyHeartsDesire", "StirTheBrainsTwistTheBowels", "FromThePit"];

var TheBookOfTheHare={"title":"The Book of the Hare", "spells":"speed"};
var TheAdventuresOfVhargGheshInTheDesertsOfVavoo={"title":"The Adventures of Vharg Ghesh in the Deserts of Vavoo", "experience":100};
var AloneUponTheMountainTop={"title":"Alone Upon the Mountain Top", "herbalism":1};
var CanYouSpellTarasqueByDukeElmo={"title":"Can You Spell Tarasque? A Book By Duke Elmo", "literacy":1};
var AYoungMagesGuideToManipulatingForce={"title":"A Young Mage's Guide to Manipulating Force", "spells":"forcebolt"};
var MeditationSecretsOfTheMonksOfTeshu={"title":"Meditation Secrets of the Monks of Teshu", "manaGen":1};
var SecretsOfASalaciousSuccubus={"title":"Secrets of a Salacious Succubus", "bogus":false};
var TheFineCraftOfStoneCarving={"title":"The Fine Craft of Stone Carving", "crafting":1};
var LifeAmongTheYorks={"title":"Life Among the Yorks", "diplomacy":1};
var ThievesGuildsHateTheseFiveSimpleTraps={"title":"Theives Guilds Hate These Five Simple Traps!", "traps":true};
var APatternWeaversGuideToMysticalConnections={"title":"A Pattern Weaver's Guide to Mystical Connections", "spiritualism":1};
var TheGloryOfTheSlaughterByGeneralGrorvolg={"title":"The Glory of the Slaughter by General Grorvolg", "cunning":1};
var AlchemicalTransmutations={"title":"Alchemical Transmutations", "alchemy":1};
var AtTheCenterOfCreationHeWrithesAndTwists={"title":"At the Center of Creation He Writhes and Twists!", "sanity":-1};
var YlvenHolidaysAndFestivals={"title":"Ylven Holidays and Festivals", "religion":1};
var MagicMikesStupendousPartyTricks={"title":"Magic Mike's Stupendous Party Tricks", "spells":"illusion"};
var ABookOfLivingLiesAndUndeadHalftruths={"title":"A Book of Living Lies and Undead Halftruths", "illusions":1};
var WaterAirEarthAndFireGrantToMeMyHeartsDesire={"title":"Water, Air, Earth and Fire, Grant To Me My Heart's Desire", "elementalism":1};
var StirTheBrainsTwistTheBowels={"title":"Stir the Brains, Twist the Bowels", "necromancy":true};
var FromThePit={"title":"From the Pit", "demonology":1};

var bookshelf={};

for(let x = 0; x < 8; x++){ 
    bookshelf[x]=Level1Books[Math.round(Math.random() * 19)];
}
alert(JSON.stringify(bookshelf));
