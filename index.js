const divClassWindows = document.querySelector("#spacesWindows")
const div00 = document.querySelector(".item0-0")
const div01 = document.querySelector(".item0-1")
const div10 = document.querySelector(".item1-0")
const div11 = document.querySelector(".item1-1")

//const dinamicSelector = document.querySelector(`.item-${element}-${innerelement}`)

gameBoardArray = [
    [0,2],
    [0,1]
]

//console.log (gameBoardArray)

/*
let empty = "";
let playerHTML = "";
let enemy = "";
let friend = "";
*/

gameBoardArray.forEach(element => {
    console.log("First console>",element)
    element.forEach(innerElement =>{
        console.log("Second console",innerElement)
        const dinamicSelector = document.querySelector(`.item${element}-${innerElement}`)

        if(gameBoardArray[element][innerElement] === 0){
            dinamicSelector.className = "nothingClass"
        } else if(gameBoardArray[element][innerElement] === 1){
            dinamicSelector.className = "playerClass"
        } else if (gameBoardArray[element][innerElement] === 2){
            dinamicSelector.className = "enemyClass"
        } else if (gameBoardArray[element][innerElement] === 3){
            dinamicSelector.className = "peopleClass"
        }
        
    });
});