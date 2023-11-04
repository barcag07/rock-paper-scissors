
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

//calls function of rps to display results with values from computer and user values
rps(computer, user);

//Determines winner
if (computer == "Rock" && user == "Rock") {
    
    console.log("It's a tie. Nobody wins.");
}

else if (computer == "Rock" && user == "Paper") {
    console.log("Congratulations! You beat the computer!");
}

else if (computer == "Rock" && user == "Scissors") {
    console.log("Sorry the computer wins this game.");
}

else if (computer == "Paper" && user == "Rock") {
    
    console.log("Sorry the computer wins this game.");
}

else if (computer == "Paper" && user == "Paper") {
    console.log("It's a tie. Nobody wins.");
}

else if (computer == "Paper" && user == "Scissors") {
    console.log("Congratulations! You beat the computer!");
}

if (computer == "Scissors" && user == "Rock") {
    
    console.log("Congratulations! You beat the computer!");
}

else if (computer == "Scissors" && user == "Paper") {
    console.log("Sorry the computer wins this game.");
}

else if (computer == "Scissors" && user == "Scissors") {
    console.log("It's a tie. Nobody wins.");
}

