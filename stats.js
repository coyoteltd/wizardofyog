var totalXP=localStorage.getItem("totalXP");
if(!totalXP){totalXP=0;}
var currentXP=localStorage.getItem("currentXP");
if(!currentXP){currentXP=0;}
var totalMana=localStorage.getItem("totalMana");
if(!totalMana){totalMana=0;}
var currentMana=localStorage.getItem("currentMana");
if(!currentMana){currentMana=0;}
var reputation=localStorage.getItem("reputation");
if(!reputation){reputation=0;}

var digTool=localStorage.getItem("digTool");
if(!digTool){digTool="hands";}

var traits = JSON.parse(localStorage.getItem("traits"));
if (traits===null){
    traits={};
}

var statsTable = document.getElementById("stats-table");

var experienceRow = statsTable.insertRow(0);

var totalXPLabel = experienceRow.insertCell(0);
var totalXPCell = experienceRow.insertCell(1);
totalXPCell.id="total-experience";
var currentXPLabel = experienceRow.insertCell(2);
var currentXPCell = experienceRow.insertCell(3);
currentXPCell.id="current-experience";

var manaRow = statsTable.insertRow(1);

var totalManaLabel = manaRow.insertCell(0);
var totalManaCell = manaRow.insertCell(1);
totalManaCell.id="total-mana";
var currentManaLabel = manaRow.insertCell(2);
var currentManaCell = manaRow.insertCell(3);
currentManaCell.id="current-mana";

var reputationRow = statsTable.insertRow(2);

var reputationLabel = reputationRow.insertCell(0);
var reputationCell = reputationRow.insertCell(1);
reputationCell.id="reputation";

totalXPLabel.innerHTML = "experience: ";
totalXPCell.innerHTML = totalXP;
currentXPLabel.innerHTML = "unspent: ";
currentXPCell.innerHTML = currentXP;
totalManaLabel.innerHTML = "mana: ";
totalManaCell.innerHTML = totalMana;
currentManaLabel.innerHTML = "unspent: ";
currentManaCell.innerHTML = currentMana;
reputationLabel.innerHTML = "Reputation: ";
reputationCell.innerHTML = reputation;
