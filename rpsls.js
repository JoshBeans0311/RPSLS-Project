"use strict";


// single player with random "AI" or multiplayer with only two players (make this a choice at the beginning)
// incorporate inheritance (super class type player, sub class Human/Computer)
// create array of gestures
// make games minimum best of 3
// validate bad input

// extra
// account for case validation
// possible different modes
// possible different oponents with varying skills


// start with player vs player then automate "player 2"

// classes - player, computer, weapon, game

class Game {
    constructor() {
        this.playerOne = new Player("Test");

        

    }

    RunGame(){
        this.DisplayWelcome();
        this.playersThrowGestures();
        

    }
    DisplayWelcome(){

    }
    CompareGestures(){

    }
    playersThrowGestures(){

    }
}
        
class Player {
    constructor(name) {
        this.score = 0;
        this.name = name;
        this.weaponSet = [];

        this.weaponSet.push(new Weapon("Rock"));
        this.weaponSet.push(new Weapon("Paper"));
        this.weaponSet.push(new Weapon("Scissors"));
        this.weaponSet.push(new Weapon("Lizard"));
        this.weaponSet.push(new Weapon("Spock"));
    }
}
class Human{
    constructor() {
        this.score = 0;
    }
}
class Computer {
    constructor() {
        this.score = 0;
    }
}

class Weapon {
    constructor(weaponName) {
        this.weaponName = weaponName;
    }
}


let game = new Game();

console.log('game', game);

console.log(game.weaponSet[0].weaponName);

















////////////////////////////////////////////////
////////////////////////////////////////////////

// // outputs
// Rock crushes Scissors  
// Scissors cuts Paper 
// Paper covers Rock 
// Rock crushes Lizard 
// Lizard poisons Spock 
// Spock smashes Scissors 
// Scissors decapitates Lizard 
// Lizard eats Paper 
// Paper disproves Spock 
// Spock vaporizes Rock  
