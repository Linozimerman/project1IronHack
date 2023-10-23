const playerElement = document.querySelector("#div-player")
const gameBoardElement = document.querySelector('#div-boardGame')

class Player {
    constructor (position, health, playerElement, gameBoardElement){
        this.position;
        this.health;
        this.playerElement = playerElement;
        this.gameBoardElement = gameBoardElement;
    }

    movePlayer(){

    }
    
    oneUp(){

    }
}


class Game {
    constructor (gameOver,score){
    this.gameOver = false;
    this.score = 0
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