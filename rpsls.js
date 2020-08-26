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

// classes - player, computer, gesture, game




//What if you use gesture array as if player 1 calls [0] and playeer 2 calls [3] player2 ++ points 
////////////////////////////////////////////////
///////////////////////////////////////////////


class Game {
    constructor() {
        this.playerOne = new Player("Test1");
        this.playerTwo = new Player("Test2");
        

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



}
        
class Player extends Game{
    constructor(name) {
        this.score = 0;
        this.name = name;
        this.gestureThrow = [];

        this.gestureThrow.push(new Gesture("Rock"));
        this.gestureThrow.push(new Gesture("Paper"));
        this.gestureThrow.push(new Gesture("Scissors"));
        this.gestureThrow.push(new Gesture("Lizard"));
        this.gestureThrow.push(new Gesture("Spock"));
    }
    
    chooseGesture(){
        let gestureChoiceOne = "";

        gestureChoiceOne = prompt("Player one, please chose a gesture to throw out of Rock, Paper, Scissors, Lizard or Spock.");


        let gestureChoiceTwo = "";

        gestureChoiceTwo = prompt("Player two, please chose a gesture to throw out of Rock, Paper, Scissors, Lizard or Spock.");
        
    

            if (gestureChoiceOne === "Scissors" && gestureChoiceTwo === "Rock");
            console.log("Player Two Wins!! Rock Crushes Scissors!!");
        
            if (gestureChoiceOne === "Paper" && gestureChoiceTwo === "Scissors");
            console.log("Player Two Wins!! Scissors Cuts Paper!!");

            if (gestureChoiceOne === "Rock" && gestureChoiceTwo === "Paper");
            console.log("Player Two Wins!! Paper Covers Rock!!");

            if (gestureChoiceOne === "Lizard" && gestureChoiceTwo === "Rock");
            console.log("Player Two Wins!! Rock Crushes Lizard!!");

            if (gestureChoiceOne === "Spock" && gestureChoiceTwo === "Lizard");
            console.log("Player Two Wins!! Lizard Poisons Spock!!");

            if (gestureChoiceOne === "Scissors" && gestureChoiceTwo === "Spock");
            console.log("Player Two Wins!! Spock Smashes Scissors!!");

            if (gestureChoiceOne === "Lizard" && gestureChoiceTwo === "Scissors");
            console.log("Player Two Wins!! Scissors Decapitates Lizard!!");

            if (gestureChoiceOne === "Paper" && gestureChoiceTwo === "Lizard");
            console.log("Player Two Wins!! Lizard Eats Paper!!");

            if (gestureChoiceOne === "Spock" && gestureChoiceTwo === "Paper");
            console.log("Player Two Wins!! Paper Disproves Spock!!");

            if (gestureChoiceOne === "Rock" && gestureChoiceTwo === "Spock");
            console.log("Player Two Wins!! Spock Vaporizes Rock!!");



            if (gestureChoiceOne === "Rock" && gestureChoiceTwo === "Scissors");
            console.log("Player One Wins!! Rock Crushes Scissors!!");
        
            if (gestureChoiceOne === "Scissors" && gestureChoiceTwo === "Paper");
            console.log("Player One Wins!! Scissors Cuts Paper!!");

            if (gestureChoiceOne === "Paper" && gestureChoiceTwo === "Rock");
            console.log("Player One Wins!! Paper Covers Rock!!");

            if (gestureChoiceOne === "Rock" && gestureChoiceTwo === "Lizard");
            console.log("Player One Wins!! Rock Crushes Lizard!!");

            if (gestureChoiceOne === "Lizard" && gestureChoiceTwo === "Spock");
            console.log("Player One Wins!! Lizard Poisons Spock!!");

            if (gestureChoiceOne === "Spock" && gestureChoiceTwo === "Scissors");
            console.log("Player One Wins!! Spock Smashes Scissors!!");

            if (gestureChoiceOne === "Scissors" && gestureChoiceTwo === "Lizard");
            console.log("Player One Wins!! Scissors Decapitates Lizard!!");

            if (gestureChoiceOne === "Lizard" && gestureChoiceTwo === "Paper");
            console.log("Player One Wins!! Lizard Eats Paper!!");

            if (gestureChoiceOne === "Paper" && gestureChoiceTwo === "Spock");
            console.log("Player One Wins!! Paper Disproves Spock!!");

            if (gestureChoiceOne === "Spock" && gestureChoiceTwo === "Rock");
            console.log("Player One Wins!! Spock Vaporizes Rock!!");
    }
}


class Human extends Player{
    constructor() {
        this.score = 0;
    }
}
class Computer extends Player{
    constructor() {
        this.score = 0;
    }
}

class Gesture extends Player{
    constructor(gestureName) {
        this.gestureName = gestureName;
    }
}



let game = new Game();
game.runGame();


// console.log('game', game);

// console.log(player.gestureThrow[0].gestureName);

















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
