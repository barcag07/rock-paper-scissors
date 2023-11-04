let playAgain;

//set initializers
let computerScore = 0;
let userScore = 0;
let round = 1;

do {
//Create function to randomly decide computer choice
function getComputerChoice() {
    //use Math.floor to round number down to nearest integer
    //Multiply Math.random by 3 so that the values are [0,3)
    let num = Math.floor(Math.random() * 3);
    let compDecision;
    switch (num) {
        case 0 : compDecision = "Rock";
        break;

        case 1: compDecision = "Paper";
        break;

        case 2: compDecision = "Scissors";
        break;
    }

    return compDecision;
}

let computer = getComputerChoice();



//ask the user for their input
function getUserChoice() {
    let userChoice = prompt("What do you pick? Rock, Paper, Scissors");
    return userChoice;
}

let user = getUserChoice();

//Create function of game (rps) that uses values from computer and user variable
function rps(computer, user) {
    console.log("Computer: " + computer);
    console.log("User: " + user);
}

console.log("Round " + round);

//calls function of rps to display results with values from computer and user values
rps(computer, user);

//Determines winner of round
if (computer == user) {
    
    alert("It's a tie. Nobody wins.");
    userScore += 0;
    computerScore += 0;
}

else if (computer == "Rock" && user.toLowerCase() == "paper" || computer == "Paper" && user.toLowerCase() == "scissors" || computer == "Scissors" && user.toLowerCase() == "rock") {
    alert("Congratulations! You beat the computer!");
    userScore++;
}

else {
    alert("Sorry the computer wins this game.");
    computerScore++;
}

console.log("Computer Score: " + computerScore + "\tUser Score: " + userScore);

playAgain = prompt("Would you like to play again?");
round++;

console.log("");

}
while (playAgain.toLowerCase() == "yes");

//Determine winner of whole game
if (computerScore > userScore) {
    console.log("The computer is the winner of the whole game. Better luck next time.");
}

else if (computerScore < userScore) {
    console.log("Way to go! You beat the computer!");
}

else {
    console.log("Looks like you and the computer tied. Nobody wins.");
}