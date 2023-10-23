/* const divClassWindows = document.querySelector("#spacesWindows")
const div00 = document.querySelector(".item0-0")
const div01 = document.querySelector(".item0-1")
const div10 = document.querySelector(".item1-0")
const div11 = document.querySelector(".item1-1") 
const boardGameElement = document.querySelector("#div-boardGame")
const items = document.querySelector(".item")
//const dinamicSelector = document.querySelector(`.item-${element}-${innerelement}`)
*/


let gameBoardArray = [
    [0,0],
    [0,0]
] 


let g1 = new Game([
    [0,0],
    [0,1]
] )
let p1 = new Player ([1,1]) 
// Actualiza gameboard segun la variable gameBoardArray

gameBoardArray.forEach((element,rowIndex) => {
    //console.log("First console","element:",element, "rowIndex:",rowIndex)
    element.forEach((innerElement, columnIndex) =>{
        //console.log("Second console innerElement:",innerElement, "columnIndex:", columnIndex)
        const dinamicSelector = document.querySelector(`.item${rowIndex}\\-${columnIndex}`)
        //console.log("Este es el dinamicSelector:", dinamicSelector);
        if(innerElement === 0){
            dinamicSelector.classList.add("nothingClass")
        } else if(innerElement === 1){
            dinamicSelector.classList.add("playerClass");
            p1.playerPosition = [rowIndex,columnIndex];
            console.log('el jugador esta en',p1.playerPosition);
        } else if (innerElement === 2){
            dinamicSelector.classList.add("enemyClass")
        } else if (innerElement === 3){
            dinamicSelector.classList.add("peopleClass")
        }
        
    });
});

document.addEventListener("keydown", (event) => {
    console.log("key pressed:", event.key)
    p1.movePlayer(event);
    p1.updatePPosition(game.gameBoardArray)


});

