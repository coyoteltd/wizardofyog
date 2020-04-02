function tabSwitch (button) {
    let tabs = ['story', 'stats', 'dungeon'];
    tabs.forEach(function(tab){
        if(document.getElementById(tab).classList.contains('activetab')){
            document.getElementById(tab).classList.remove('activetab');
            document.getElementById(tab).classList.add('invisible');
        }
    });
    document.getElementById(button).classList.remove('invisible');
    document.getElementById(button).classList.add('activetab');
}

function addXP(xp){
    totalXP=(totalXP+xp);
    currentXP=(currentXP+xp);
    document.getElementById("total-experience").innerHTML = totalXP;
    document.getElementById("current-experience").innerHTML = currentXP;
    localStorage.setItem('totalXP', totalXP);
    localStorage.setItem('currentXP', currentXP);
}

function addMana(mana){
    totalMana=(totalMana+mana);
    currentMana=(currentMana+mana);
    document.getElementById("total-mana").innerHTML = totalMana;
    document.getElementById("current-mana").innerHTML = currentMana;
    localStorage.setItem('totalMana', totalMana);
    localStorage.setItem('currentMana', currentMana);    
}

function addReputation(addRep){
    reputation=(reputation+addRep);
    document.getElementById("reputation").innerHTML = reputation;
    localStorage.setItem('reputation', reputation);    
}

function newGame(){
    localStorage.clear();
    location.reload();
}

