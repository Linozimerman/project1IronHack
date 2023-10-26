const boardElement = document.getElementById("div-boardGame"); //NO BORRAR NI COMENTAR esta en uso en gameOverBanner
//const gameOverDivEndPlayer = document.querySelector(".playerClass");
//const gameOverDivEndPeople = document.querySelector(".peopleClass");
//const startButtonElement = document.querySelector("#startButton")
const spacesWindowsElement = document.querySelectorAll(".spacesWindows")

let g1 = new Game()
let p1 = new Player () 
let e1 = new Enemy ()
let pp1 = new People ()
let vip1 = new Vip ();


//Que lo llame el boton de reinicio
function preinicio(){
    //create restart button
    const startButton = document.createElement("button");
    startButton.innerText = "start";
    boardElement.appendChild(startButton);
    
    
    function lightsOnOff(){
        spacesWindowsElement.forEach((div)=>{
            const randomState = Math.random() < 0.5 //esto genera true or false randomly
            if(randomState){
                div.classList.add("lightOnClass")
                div.classList.remove("nothingClass")
            } else {
                div.classList.remove("lightOnClass")
                div.classList.add("nothingClass")
                }
        });
    }
    const lucesluces = setInterval(lightsOnOff,1000);


    startButton.addEventListener("click", () => {
        console.log("clicked start")
        //Remove button
        
        //parar el juego de luces
        clearInterval(lucesluces)
        //borrar todas las luces a classNothing
        document.querySelectorAll(".lightOnClass").forEach((div)=>{
            if(div.classList.contains("lightOnClass")){
                div.classList.remove("lightOnClass")
                div.classList.add("nothingClass")
            }
        });    
        //show gif only if you hover over START
        const thunderImage = document.createElement("div");
        thunderImage.innerText = " ";
        //boardElement.appendChild(thunderImage);
        //thunderImage.classList.add("thunderBanner");
        addEnemyAfterTime();
        addPeopleAfterTime();
        addVipAfterTime()
        //boardChecker()
        //gameOverBanner()
        startButton.classList.add("hiddenStuff");
    });
}    

preinicio()
    
    
    
    
    
    
    function boardChecker(){
        //IF GAME OVER
        if(g1.stars === 0){
            g1.gameOver = true;
            if(g1.gameOver === true){
                gameOverBanner()    
                document.querySelectorAll(".playerClass, .peopleClass, .vipClass").forEach((div)=>{
                    if(div.classList.contains("playerClass")){
                        div.classList.add("deadClass")
                }
                if(div.classList.contains("peopleClass")){
                    div.classList.add("deadClass")
                }
                if(div.classList.contains("vipClass")){
                    div.classList.add("deadClass")
                }
                div.classList.remove("playerClass");
                div.classList.remove("peopleClass");
                div.classList.remove("vipClass");
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
            dinamicSelector.classList.remove("vipClass")
        } else if(innerElement === 1){
            if(dinamicSelector.classList.contains("enemyClass")){
                g1.score++;
                g1.scoreGame.innerText = g1.score;
                //console.log(g1.score)
            }
            if(g1.stars < 100 && dinamicSelector.classList.contains("vipClass")){
                g1.stars += 25;
                g1.starsPlayer.innerText = g1.stars
            }
            dinamicSelector.classList.remove("nothingClass")
            dinamicSelector.classList.add("playerClass");
            dinamicSelector.classList.remove("enemyClass")
            dinamicSelector.classList.remove("peopleClass")
            dinamicSelector.classList.remove("vipClass")
            // p1.playerPosition = [rowIndex,columnIndex];
            //console.log('el jugador esta en',p1.playerPosition);
        } else if (innerElement === 2){
            if(g1.gameOver === false && dinamicSelector.classList.contains("peopleClass")){
                g1.stars -= 25;
                g1.starsPlayer.innerText = g1.stars
            }
            if(g1.gameOver === false && dinamicSelector.classList.contains("vipClass")){
                g1.stars -= 25;
                g1.starsPlayer.innerText = g1.stars
            }
            dinamicSelector.classList.remove("nothingClass")
            //dinamicSelector.classList.remove("playerClass")
            dinamicSelector.classList.add("enemyClass")
            dinamicSelector.classList.remove("peopleClass")
            dinamicSelector.classList.remove("vipClass")
        } else if (innerElement === 3){
            dinamicSelector.classList.remove("nothingClass")
            //dinamicSelector.classList.remove("playerClass")
            dinamicSelector.classList.remove("enemyClass")
            dinamicSelector.classList.add("peopleClass")
            dinamicSelector.classList.remove("vipClass")
        }else if (innerElement === 4){
            dinamicSelector.classList.remove("nothingClass")
            //dinamicSelector.classList.remove("playerClass")
            dinamicSelector.classList.remove("enemyClass")
            dinamicSelector.classList.remove("peopleClass")
            dinamicSelector.classList.add("vipClass")
        }
        
        
    });
    
    
});
}
// ADD ENEMY
//const audio = document.querySelector("#clin")
function addEnemyAfterTime() {
        if(g1.score <10 ){
            setTimeout(()=>{
                e1.addEnemy(p1.dinamicArray)
                boardChecker();
                addEnemyAfterTime();
            }, 1000);}
        else if(g1.score<10){
            setTimeout(()=>{
                e1.addEnemy(p1.dinamicArray)
                boardChecker();
                addEnemyAfterTime();
            }, 700);}
        else if(g1.score<25){
            setTimeout(()=>{
                e1.addEnemy(p1.dinamicArray)
                boardChecker();
                addEnemyAfterTime();
            }, 500);}
        else{
            setTimeout(()=>{
                e1.addEnemy(p1.dinamicArray)
                boardChecker();
                addEnemyAfterTime();
            }, 100);}
}
//addEnemyAfterTime();

//ADD PEOPLE
function addPeopleAfterTime() {
    
        setTimeout(()=>{
        pp1.addPeople(p1.dinamicArray)
        //console.log(e1.enemyPosition);
        boardChecker();
        addPeopleAfterTime();
        }, 4000);
    
}
//addPeopleAfterTime();

// ADD VIP
function addVipAfterTime() {
    setTimeout(()=>{
    vip1.addVip(p1.dinamicArray)
    //console.log(e1.enemyPosition);
    boardChecker();
    addVipAfterTime();
    }, 12000);
}
//addVipAfterTime();



//GAME OVER BANNER AND RESTART
let gameOverDisplayed = false;

function gameOverBanner(){
    if (!gameOverDisplayed){
        const gameOverImage = document.createElement("div");
        gameOverImage.innerText = " ";
        boardElement.appendChild(gameOverImage);
        gameOverImage.classList.add("gameOverBanner");
        gameOverDisplayed = true;
        //create restart button
        const restartButton = document.createElement("button");
        restartButton.innerText = "Restart";
        boardElement.appendChild(restartButton);
        //restart button functionality 


        function restartGame(){
        restartButton.addEventListener("click", () => {
            //console.log("clicked")
            document.querySelectorAll(".deadClass").forEach((div)=>{
                if(div.classList.contains("deadClass")){
                    div.classList.remove("deadClass")
                    div.classList.add("nothingClass")
                }
            if(gameOverImage){  
                gameOverImage.remove()
                restartButton.remove()
            }
            g1.gameOver = false;
            g1.scoreGame.innerText = g1.score;
            g1.starsPlayer.innerText = 100;
            p1.movementPlayer.innerText = p1.movement;
            gameOverDisplayed = false;
            
            g1 = new Game ();
            p1 = new Player () ;
            e1 = new Enemy ();
            pp1 = new People ();
            vip1 = new Vip (); 
            });
            
        });
        }
        restartGame() 
        //preinicio()

    }

}

//Event listener keys gameplay
document.addEventListener("keydown", (event) => {
    console.log("key pressed:", event.key)
    p1.movePlayer(event);
    boardChecker()
});




