//const playerElement = document.querySelector("#div-player")
//const gameBoardElement = document.querySelector('#div-boardGame')


class Player {
    constructor (playerPosition,  gameBoardArray){
        this.playerPosition = playerPosition;
        this.rowIndex = playerPosition[0];
        this.columnIndex = playerPosition[1];
        this.health = 100;
        this.gameBoardArray = [
            [0,0],
            [1,0]
        ];
    }

    movePlayer(event){
        if (event.key == "ArrowUp" && this.rowIndex === 0 ){
            this.rowIndex --;
        } else if (event.key === "ArrowDown" && this.rowIndex < this.gameBoardArray.length - 1){
            this.rowIndex ++;
        } else if (event.key === "ArrowRight" && this.columnIndex < this.gameBoardArray[0].length - 1){
            this.columnIndex++;
        } else if (event.key === "ArrowLeft" && this.columnIndex === 0){
            this.columnIndex--;
        }
        this.playerPosition= [this.rowIndex, this.columnIndex]
    }
    updateGame(playerPosition){
        this.gameBoardArray = 
    }
}




class Game {
    constructor (){
    this.gameOver = false;
    this.score = 0;
    }
}


/* class Enemy {
    constructor (position){
    this.position;
    }

    addEnemy(){

    }
} */

/* class Friend{
    constructor(position){
    this.position;
    }

    addPeople(){

    }
} */