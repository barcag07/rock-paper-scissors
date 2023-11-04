function getComputerChoice() {
    //use Math.floor to round number down to nearest integer
    //Multiply Math.random by 3 so that the values are [0,3)
    let num = Math.floor(Math.random() * 3);
    let decision;
    switch (num) {
        case 0 : decision = "Rock";
        break;

        case 1: decision = "Paper";
        break;

        case 2: decision = "Scissors";
        break;
    }

    return decision;
}

console.log(getComputerChoice());