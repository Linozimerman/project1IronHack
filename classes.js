//const playerElement = document.querySelector("#div-player")
//const gameBoardElement = document.querySelector('#div-boardGame')


class Player {
    constructor (){
        this.playerPosition = [1,1];
        this.rowIndex = this.playerPosition[0];
        this.columnIndex = this.playerPosition[1];
        this.health = 100;
        this.cerocero = 0;
        this.unocero = 0;
        this.cerouno = 0;
        this.unouno = 1;
        this.dinamicArray = [
            [this.cerocero,this.cerouno],
            [this.unocero,this.unouno]
            ]
    }

    movePlayer(event){
        console.log("are we here?");
        console.log("ARRAY: ",this.dinamicArray);
        this.dinamicArray[this.rowIndex][this.columnIndex] = 0
        if (event.key == "ArrowUp"  && this.rowIndex !== 0   ){
            this.rowIndex --;
            console.log("Row index: ", this.rowIndex);
        } else if (event.key === "ArrowDown" && this.rowIndex < this.dinamicArray.length - 1 ){
            this.rowIndex ++;
        } else if (event.key === "ArrowRight"  && this.columnIndex < this.dinamicArray[0].length - 1 ){
            this.columnIndex++;
        } else if (event.key === "ArrowLeft"   && this.columnIndex > 0  ){
            this.columnIndex--;
        }
        this.playerPosition = [this.rowIndex, this.columnIndex]
        this.dinamicArray[this.rowIndex][this.columnIndex] = 1
        console.log("PLAYER POSITION: ", this.playerPosition);
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