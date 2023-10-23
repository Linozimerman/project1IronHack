const playerElement = document.querySelector("#div-player")
const gameBoardElement = document.querySelector('#div-boardGame')


class Player {
    constructor (playerPosition,  gameBoardArray, playerElement){
        this.playerPosition = playerPosition;
        this.rowIndex = playerPosition[0];
        this.columnIndex = playerPosition[1];
        this.health = 100;
        this.playerElement = playerElement;
        this.gameBoardArray = gameBoardArray;
    }

    movePlayer(event){
        
        if (event.key == "ArrowUp" && this.rowIndex === 0 ){
            this.rowIndex --;
        } else if (event.key === "ArrowDown" && this.rowIndex< gameBoardArray.length - 1){
            this.rowIndex ++;
        } else if (event.key === "ArrowRight" && this.columnIndex < gameBoardArray[0].length - 1){
            this.columnIndex++;
        } else if (event.key === "ArrowLeft" && this.columnIndex === 0){
            this.columnIndex--;
        }
        this.playerPosition= [this.rowIndex, this.columnIndex]
    }
    
    // anadir un metodo para actualizar el gameboard (debe recibir el gameboard como argumento)
    updatePPosition(){
        
    }
}


class Game {
    constructor (gameBoardArray){
    this.gameOver = false;
    this.score = 0;
    this.gameBoardArray = [[],[]];
    }
}

class Enemy {
    constructor (position){
    this.position;
    }

    addEnemy(){

    }
}

class Friend{
    constructor(position){
    this.position;
    }

    addPeople(){

    }
}