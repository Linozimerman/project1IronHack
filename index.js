





let g1 = new Game()
let p1 = new Player () 
let e1 = new Enemy ()
let pp1 = new People ()

function boardChecker(){
p1.dinamicArray.forEach((element, rowIndex) => {
    //console.log("First console","element:",element, "rowIndex:",rowIndex)
    element.forEach((innerElement, columnIndex) =>{
        //console.log("Second console innerElement:",innerElement, "columnIndex:", columnIndex)
        const dinamicSelector = document.querySelector(`.item${rowIndex}\\-${columnIndex}`)
        //console.log("Este es el dinamicSelector:", dinamicSelector);
        if(innerElement === 0){
            dinamicSelector.classList.add("nothingClass")
            dinamicSelector.classList.remove("playerClass");
            dinamicSelector.classList.remove("enemyClass");
            dinamicSelector.classList.remove("peopleClass");
        } else if(innerElement === 1){
            dinamicSelector.classList.remove("nothingClass")
            dinamicSelector.classList.add("playerClass");
            dinamicSelector.classList.remove("enemyClass")
            dinamicSelector.classList.remove("peopleClass")
            // p1.playerPosition = [rowIndex,columnIndex];
            //console.log('el jugador esta en',p1.playerPosition);
        } else if (innerElement === 2){
            dinamicSelector.classList.remove("nothingClass")
            dinamicSelector.classList.remove("playerClass")
            dinamicSelector.classList.add("enemyClass")
            dinamicSelector.classList.remove("peopleClass")
        } else if (innerElement === 3){
            dinamicSelector.classList.remove("nothingClass")
            dinamicSelector.classList.remove("playerClass")
            dinamicSelector.classList.remove("enemyClass")
            dinamicSelector.classList.add("peopleClass")
        }
        
    });


});
}

// updateClasses
function addEnemyAfterTime() {
setTimeout(()=>{
e1.addEnemy(p1.dinamicArray)
console.log(pp1.enemyPosition);
boardChecker();
addEnemyAfterTime();
}, 1000);
}
addEnemyAfterTime();

function addPeopleAfterTime() {
    setTimeout(()=>{
    pp1.addPeople(p1.dinamicArray)
    console.log(e1.enemyPosition);
    boardChecker();
    addPeopleAfterTime();
    }, 4000);
    }
    addPeopleAfterTime();

document.addEventListener("keydown", (event) => {
    console.log("key pressed:", event.key)
    p1.movePlayer(event);
    boardChecker()
    
    
});

