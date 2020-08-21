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




//What if you use weapon array as if player 1 calls [0] and playeer 2 calls [3] player2 ++ points 
////////////////////////////////////////////////
///////////////////////////////////////////////


class Game {
    constructor() {
        this.playerOne = new Player("Test");

        

    }

    runGame(){   /////main method
        this.displayWelcome();
        this.compareGestures();
        this.playersThrowGestures();


    }
    displayWelcome(){
        console.log("Welcome to Rock, Paper, Scissors, Lizard, Spock!");

    }
    compareGestures(){
        console.log("Each player will have the option of throwing the following gestures: Rock, Paper, Scissors, Lizard or Spock.");
        console.log("Whichever player wins three rounds first wins the game.");
    }
    playersThrowGestures(){
        this.chooseGesture();
    }
    chooseGesture(){
        let gestureChoice = ""

        gestureChoice = prompt("Please chose a gesture to throw.");

        
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
game.runGame();


// console.log('game', game);

// console.log(player.weaponSet[0].weaponName);

















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
