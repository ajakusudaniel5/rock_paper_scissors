let humanScore = 0;
let computerScore = 0;


function getComputerchoice() {
    let word = Math.floor(Math.random() * 3);
    
    switch (word) {
        case 0:
            return "paper";
            break;
        case 1:
            return "rock";
            break;
        case 2:
            return "scissors";
            break;
    }

}
console.log(getComputerchoice());

function getHumanChoice() {
    let message = prompt("Enter rock,paper or scissors");
    return message
}

console.log(getHumanChoice());


