/* const divClassWindows = document.querySelector("#spacesWindows")
const div00 = document.querySelector(".item0-0")
const div01 = document.querySelector(".item0-1")
const div10 = document.querySelector(".item1-0")
const div11 = document.querySelector(".item1-1") */
const boardGameElement = document.querySelector("#div-boardGame")
const items = document.querySelector(".item")

//const dinamicSelector = document.querySelector(`.item-${element}-${innerelement}`)

gameBoardArray = [
    [0,2],
    [2,1]
]





gameBoardArray.forEach((element,rowIndex) => {
    console.log("First console","element:",element, "rowIndex:",rowIndex)
    element.forEach((innerElement, columnIndex) =>{
        console.log("Second console innerElement:",innerElement, "columnIndex:", columnIndex)
        const dinamicSelector = document.querySelector(`.item${rowIndex}\\-${columnIndex}`)
        console.log("Este es el dinamicSelector:", dinamicSelector);
        if(innerElement === 0){
            dinamicSelector.classList.add("nothingClass")
        } else if(innerElement === 1){
            dinamicSelector.classList.add("playerClass")
        } else if (innerElement === 2){
            dinamicSelector.classList.add("enemyClass")
        } else if (innerElement === 3){
            dinamicSelector.classList.add("peopleClass")
        }
        
    });
});