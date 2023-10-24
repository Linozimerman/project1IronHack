const scorePlayer = document.querySelector("#score")

class Player {
    constructor (){
        this.playerPosition = [2,2];
        this.rowIndex = this.playerPosition[0];
        this.columnIndex = this.playerPosition[1];
        this.scorePlayer = score;
        this.score = 0;
        this.dinamicArray = [
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0]
        ]
    }

    movePlayer(event){
        //console.log("are we here?");
        //console.log("ARRAY: ",this.dinamicArray);
        
        
        
        this.dinamicArray[this.rowIndex][this.columnIndex] = 0
        if (event.key == "ArrowUp"  && this.rowIndex !== 0   ){
            this.rowIndex --;
            this.score ++;
            //console.log("Row index: ", this.rowIndex);
        } else if (event.key === "ArrowDown" && this.rowIndex < this.dinamicArray.length - 1 ){
            this.rowIndex ++;
            this.score ++;
        } else if (event.key === "ArrowRight"  && this.columnIndex < this.dinamicArray[0].length - 1 ){
            this.columnIndex++;
            this.score ++;
        } else if (event.key === "ArrowLeft"   && this.columnIndex > 0  ){
            this.columnIndex--;
            this.score ++;
        }
        this.playerPosition = [this.rowIndex, this.columnIndex]
        this.dinamicArray[this.rowIndex][this.columnIndex] = 1
        //console.log("PLAYER POSITION: ", this.playerPosition);
        this.scorePlayer.innerText = this.score
    }
    updateGame(){
        playerPosition[this.rowIndex][this.columnIndex] = 1
    }
}


class Game {
    constructor (){
    this.gameOver = false;
    this.health = 100;
    this.score = 0;
    }
}


 class Enemy {
    constructor (){
        this.enemyPosition = [0,0]
        this.enemyRowIndex = this.enemyPosition[0];
        this.enemyColumnIndex = this.enemyPosition[1];
        
    }
    randomPosition(){
        this.enemyPosition[0] = Math.floor(Math.random() * 5);
        this.enemyPosition[1] = Math.floor(Math.random() * 5);
        this.enemyRowIndex = this.enemyPosition[0];
        this.enemyColumnIndex = this.enemyPosition[1];
    }
    addEnemy(dinamicArray){
        this.randomPosition();
        dinamicArray[this.enemyRowIndex][this.enemyColumnIndex] = 2
        
    }

} 

class People {
    constructor (){ 
        this.peoplePosition = [0,0]
        this.peopleRowIndex = this.peoplePosition[0];
        this.peopleColumnIndex = this.peoplePosition[1];
        
    }
    randomPosition(){
        this.peoplePosition[0] = Math.floor(Math.random() * 5);
        this.peoplePosition[1] = Math.floor(Math.random() * 5);
        this.peopleRowIndex = this.peoplePosition[0];
        this.peopleColumnIndex = this.peoplePosition[1];
    }
    addPeople(dinamicArray){
        this.randomPosition();
        dinamicArray[this.peopleRowIndex][this.peopleColumnIndex] = 3
        
    }

} 