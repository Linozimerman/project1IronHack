const boardElement = document.getElementById("div-boardGame");
//const gameOverDivEndPlayer = document.querySelector(".playerClass");
//const gameOverDivEndPeople = document.querySelector(".peopleClass");



let g1 = new Game()
let p1 = new Player () 
let e1 = new Enemy ()
let pp1 = new People ()




function boardChecker(){
    //IF GAME OVER
    if(g1.stars === 0){
        g1.gameOver = true;
        if(g1.gameOver === true){
            gameOverBanner()    ///por que corre infinito?
            document.querySelectorAll(".playerClass, .peopleClass").forEach((div)=>{
                if(div.classList.contains("playerClass")){
                    div.classList.add("deadClass")
                }
                if(div.classList.contains("peopleClass")){
                    div.classList.add("deadClass")
                }
                div.classList.remove("playerClass");
                div.classList.remove("peopleClass");
            });
            return;
            
        }
    } //hasta aca es GAME OVER
    p1.dinamicArray.forEach((element, rowIndex) => {
        //console.log("First console","element:",element, "rowIndex:",rowIndex)
        element.forEach((innerElement, columnIndex) =>{
            const dinamicSelector = document.querySelector(`.item${rowIndex}\\-${columnIndex}`)
            //console.log("Second console innerElement:",innerElement, "columnIndex:", columnIndex)
            //console.log("Este es el dinamicSelector:", dinamicSelector);
            
            //CHECKS THE BOARD 
            if(innerElement === 0){
                dinamicSelector.classList.add("nothingClass")
            dinamicSelector.classList.remove("playerClass");
            dinamicSelector.classList.remove("enemyClass");
            dinamicSelector.classList.remove("peopleClass");
        } else if(innerElement === 1){
            if(dinamicSelector.classList.contains("enemyClass")){
                g1.score++;
                g1.scoreGame.innerText = g1.score;
                //console.log(g1.score)
            }
            dinamicSelector.classList.remove("nothingClass")
            dinamicSelector.classList.add("playerClass");
            dinamicSelector.classList.remove("enemyClass")
            dinamicSelector.classList.remove("peopleClass")
            // p1.playerPosition = [rowIndex,columnIndex];
            //console.log('el jugador esta en',p1.playerPosition);
        } else if (innerElement === 2){
            if(g1.gameOver === false && dinamicSelector.classList.contains("peopleClass")){
                g1.stars -= 25;
                g1.starsPlayer.innerText = g1.stars
            }
            dinamicSelector.classList.remove("nothingClass")
            //dinamicSelector.classList.remove("playerClass")
            dinamicSelector.classList.add("enemyClass")
            dinamicSelector.classList.remove("peopleClass")
        } else if (innerElement === 3){
            dinamicSelector.classList.remove("nothingClass")
            //dinamicSelector.classList.remove("playerClass")
            dinamicSelector.classList.remove("enemyClass")
            dinamicSelector.classList.add("peopleClass")
        }
        
        
    });
    
    
});
}

// ADD ENEMY
function addEnemyAfterTime() {
    setTimeout(()=>{
        e1.addEnemy(p1.dinamicArray)
        boardChecker();
addEnemyAfterTime();
}, 1000);
}
addEnemyAfterTime();

//ADD PEOPLE
function addPeopleAfterTime() {
    if(!g1.gameOver === true){
        setTimeout(()=>{
        pp1.addPeople(p1.dinamicArray)
        //console.log(e1.enemyPosition);
        boardChecker();
        addPeopleAfterTime();
        }, 4000);
    }
}
addPeopleAfterTime();

//GAME OVER BANNER
let gameOverDisplayed = false;

function gameOverBanner(){
    if (!gameOverDisplayed){
        const gameOverImage = document.createElement("div");
        gameOverImage.innerText = " ";
        boardElement.appendChild(gameOverImage);
        gameOverImage.classList.add("gameOverBanner");
        gameOverDisplayed = true;
}

}

//Event listener
document.addEventListener("keydown", (event) => {
    console.log("key pressed:", event.key)
    p1.movePlayer(event);
    boardChecker()
});




