var ourStory=localStorage.getItem("ourStory");

var storyIntro = "Across the River Rosog, over the hills of Droom and beyond the dark tangle of the Drakenwood, lies the dank and fetid quagmire of the swamps of Yog. <br> There, in a small hut, lived an evil wizard of minor power and little account.  A simple conjuror of minor curses and brewer of foul potions, he was little more than a recluse who sought out the solitude of the swamps as a place to persue the secrets of his dark magic.  In all likelyhood, he would have lived a forlourn and lonely life and been forgotten by history except that one fateful day in the early spring, he took a young apprentice.  A young apprentice who dreamed of power and riches and conquest.  A young apprentice who swelled with ambition.  A young apprentice who would become known as. . .<br><br><center><h2>The Wizard of Yog!</h2></center><br><br>";

var storyQuestion1 = "<center>How did your master die?<br><br><button onclick=\"advanceStory('mastersDeath', 'poison')\">I poisoned him with his own potions.</button><br><br><button onclick=\"advanceStory('mastersDeath', 'dagger')\">I stabbed him in the back with his own ritual dagger.</button><br><br><button onclick=\"advanceStory('mastersDeath', 'curse')\">I cursed him with forbidden magic.</button><br><br><button onclick=\"advanceStory('mastersDeath', 'drowned')\">I drowned him in the swamp waters.</button></center>";

if(!ourStory){ourStory=storyIntro+storyQuestion1;}

document.getElementById("storyscrollbox").innerHTML = ourStory;

function advanceStory(fork, choice){
    let endcutscene = false;
    document.getElementById("tabs").classList.remove('tabs');
    document.getElementById("tabs").classList.add('invisible');
    if(fork==="mastersDeath"){
        var deathIntro="The master instructed his apprentice in the basics of many things, but the apprentice's ambition's festered and grew.  The apprentice coveted those secrets and items of power that the master held back, concealed within his forbidden books and locked away in his musty chests.";
        switch(choice){
            case "poison":
                ourStory=storyIntro + deathIntro + "  The apprentice showed great aptitude with the brewing of potions, and the master grew to rely on his apprentice to brew the base tinctures and distillations that went into them.  But unbeknownst to the master, his apprentice was slipping into the potions extracts from toxic mushrooms and the venom of foul creatures of the swamps.  So it was, that soon the master grew sickly and died.<br><br>";
                traits['alchemy']=1;
                localStorage.setItem('traits', JSON.stringify(traits));
                break;
            case "dagger":
                ourStory=storyIntro + deathIntro + " The apprentice showed great reliability in all tasks the master set, but secretly sought only to gain the master's trust and affection.  When the master's back was turned, the apprentice took up the master's very own ritual dagger and plunged it into the master's spine and through his heart.  The apprentice loomed over the master's fallen body, bloody dagger in hand.  The last thing the master saw as he took his last breath, was the cruel, treacherous smile on his own apprentice's face.<br><br>";
                traits['cunning']=1;
                localStorage.setItem('traits', JSON.stringify(traits));
                break;
            case "curse":
                ourStory=storyIntro + deathIntro + " The apprentice's powers with dark magic grew, indeed grew beyond the master's knowledge.  Secretly, the apprentice syphoned little sips of power from the master's spells until enough was saved up to penetrate the master's wards and defenses.  One simple curse was all it took, and one afternoon as the master stood upon a short stool, replacing a jar of dried fireflies on a high shelf, he slipped and fell, snapping his neck.  The apprentice smiled down at his master's corpse.<br><br>";
                addMana(10);
                break;
            case "drowned":
                ourStory=storyIntro + deathIntro + " Impatient for power, the apprentice saw opportunity one afternoon as the two of them gathered herbs together in the swamp.  As the master's back was turned, the apprentice seized up a stout stick and clubbed the master in the back of his head!  With a cry of bitter betrayal, the master fell face first in the swamp.  The apprentice held the master's face under the fetid waters until his thrashing had stopped.  Breathing heavily, the apprentice smiled an evil smile of victory.<br><br>";
                addReputation(-1);
                break;
        }
        var nextChoice = "<center><button onclick=\"advanceStory('mastersSecrets', 'explore')\">Explore the master's secrets. . .</button></center>";
    }else if(fork==="mastersSecrets"){
        ourStory=ourStory+"The apprentice... now the <b>wizard</b>, hurried to search the hut for the master's secrets.  The master didn't have much to his name, a bookshelf, an alchemy set, a couple of small locked chests and a trap door in one corner of the floor.  The bookshelf was the easiest to access to it made sense to start there.";
    }
    if(endcutscene){
        document.getElementById("tabs").classList.remove('invisible');
        document.getElementById("tabs").classList.add('tabs');
    }
    localStorage.setItem('ourStory', ourStory);
    var wholeStory=ourStory+nextChoice;
    document.getElementById("storyscrollbox").innerHTML = wholeStory;
}
