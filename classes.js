//const playerElement = document.querySelector("#div-player")
//const gameBoardElement = document.querySelector('#div-boardGame')
const randomRowIndex = Math.floor(Math.random() * 3);
const randomColumnIndex = Math.floor(Math.random() * 3);

class Player {
    constructor (){
        this.playerPosition = [2,2];
        this.rowIndex = this.playerPosition[0];
        this.columnIndex = this.playerPosition[1];
        this.health = 100;
        this.dinamicArray = [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ]
    }

    movePlayer(event){
        //console.log("are we here?");
        //console.log("ARRAY: ",this.dinamicArray);
        this.dinamicArray[this.rowIndex][this.columnIndex] = 0
        if (event.key == "ArrowUp"  && this.rowIndex !== 0   ){
            this.rowIndex --;
            //console.log("Row index: ", this.rowIndex);
        } else if (event.key === "ArrowDown" && this.rowIndex < this.dinamicArray.length - 1 ){
            this.rowIndex ++;
        } else if (event.key === "ArrowRight"  && this.columnIndex < this.dinamicArray[0].length - 1 ){
            this.columnIndex++;
        } else if (event.key === "ArrowLeft"   && this.columnIndex > 0  ){
            this.columnIndex--;
        }
        this.playerPosition = [this.rowIndex, this.columnIndex]
        this.dinamicArray[this.rowIndex][this.columnIndex] = 1
        //console.log("PLAYER POSITION: ", this.playerPosition);
    }
    updateGame(dinamicArray){
        playerPosition[this.rowIndex][this.columnIndex] = 1
    }
}


class Game {
    constructor (){
    this.gameOver = false;
    this.score = 0;
    }
}


 class Enemy {
    constructor (){
        this.enemy; 
        this.enemyPosition = [0,2]
        this.enemyRowIndex = this.enemyPosition[0];
        this.enemyColumnIndex = this.enemyPosition[1];
    }
    addEnemy(){
        this.player.dinamicArray[this.enemyRowIndex][this.enemyColumnIndex] = 2
    }
} 

/* class People{
    constructor(position){
    this.position;
    }

    addPeople(){

    }
} */