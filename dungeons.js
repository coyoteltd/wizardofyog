var currentDungeon = JSON.parse(localStorage.getItem("dungeon1"));
if (currentDungeon===null){
    currentDungeon={};
    for(let x = 0; x < 36; x++){
        for(let y = 1; y <= 36; y++){
            if(x==18 && y==18){currentDungeon["x"+x+"y"+y]="mud-floor"}
            else if(x==17 && y==18){currentDungeon["x"+x+"y"+y]="mud-wall";}
            else if(x==19 && y==18){currentDungeon["x"+x+"y"+y]="mud-wall";}
            else if(x==18 && y==17){currentDungeon["x"+x+"y"+y]="mud-wall";}
            else if(x==18 && y==19){currentDungeon["x"+x+"y"+y]="mud-wall";}
            else {currentDungeon["x"+x+"y"+y]="unknown";}
        }
    }
}
var currentDungeonLevel=1;


var digCount = [];

function renderDungeon(dungeon){
    var digCount = [];
    let canvas = document.getElementById("dungeon-canvas");
    canvas.innterHTML="";
    for(let x = 0; x < 36; x++){ 
        let row = document.createElement("div"); 
        row.className = "row"; 
        for(let y = 1; y <= 36; y++){
            let cell = document.createElement("button");
            let type=dungeon["x"+x+"y"+y];
            cell.setAttribute("id", "dungeonCellx"+x+"y"+y);
            cell.className="dungeon-cell-"+type;
            if(cell.className==="dungeon-cell-mud-wall"){cell.setAttribute("onclick", "dig("+x+","+y+")");}
            row.appendChild(cell);
        } 
        canvas.appendChild(row);
    }
}

renderDungeon(currentDungeon);

function dig (x, y) {
    if(digCount["x"+x+"y"+y]>0){digCount["x"+x+"y"+y]++;}else{digCount["x"+x+"y"+y]=1;}
    let thisDungeonCell=document.getElementById("dungeonCellx"+x+"y"+y);
    
    let northDungeonCellCoords="dungeonCellx"+x+"y"+(y+1);
    let eastDungeonCellCoords="dungeonCellx"+(x+1)+"y"+y;
    let southDungeonCellCoords="dungeonCellx"+x+"y"+(y-1);
    let westDungeonCellCoords="dungeonCellx"+(x-1)+"y"+y;
    
    let northDungeonCell=document.getElementById(northDungeonCellCoords);
    let eastDungeonCell=document.getElementById(eastDungeonCellCoords);
    let southDungeonCell=document.getElementById(southDungeonCellCoords);
    let westDungeonCell=document.getElementById(westDungeonCellCoords);

    if(typeof(northDungeonCell) != 'undefined' && northDungeonCell != null && northDungeonCell.className==="dungeon-cell-unknown"){let changeNorth=true;}else{let changeNorth=false;}
    if(typeof(eastDungeonCell) != 'undefined' && eastDungeonCell != null && eastDungeonCell.className==="dungeon-cell-unknown"){let changeEast=true;}else{let changeEast=false;}
    if(typeof(southDungeonCell) != 'undefined' && southDungeonCell != null && southDungeonCell.className==="dungeon-cell-unknown"){let changeSouth=true;}else{let changeSouth=false;}        
    if(typeof(westDungeonCell) != 'undefined' && westDungeonCell != null && westDungeonCell.className==="dungeon-cell-unknown"){let changeWest=true;}else{let changeWest=false;}

    function alterDungeonCell(thisDungeonCell, newCellType, cellOnClick, thisx, thisy){
        thisDungeonCell.classList.remove(thisDungeonCell.className);
        thisDungeonCell.classList.add("dungeon-cell-"+newCellType);
        thisDungeonCell.removeAttribute("onclick");
        currentDungeon["x"+thisx+"y"+thisy]=newCellType;
        if(cellOnClick){thisDungeonCell.setAttribute("onclick", cellOnClick);}
    }
    
    let finishedDig=false;
    if(digTool==="hands"){
        if(digCount["x"+x+"y"+y]==25 && thisDungeonCell.className==="dungeon-cell-mud-wall"){finishedDig=true;}
    }
    
    if(finishedDig){
        addXP(1);
        alterDungeonCell(thisDungeonCell, "mud-floor", false, x, y);
        if(changeNorth){alterDungeonCell(northDungeonCell, "mud-wall", "dig("+x+","+(y+1)+")", x, (y+1));}
        if(changeEast){alterDungeonCell(eastDungeonCell, "mud-wall", "dig("+(x+1)+","+y+")", (x+1), y);}
        if(changeSouth){alterDungeonCell(southDungeonCell, "mud-wall", "dig("+x+","+(y-1)+")", x, (y-1));}
        if(changeWest){alterDungeonCell(westDungeonCell, "mud-wall", "dig("+(x-1)+","+y+")", (x-1), y);}        
        localStorage.setItem('dungeon'+currentDungeonLevel, JSON.stringify(currentDungeon));
    }
}
