function getComputerChoice() {
    let returnValue = Math.floor(Math.random() * 3);
    switch (returnValue) {
        case 0:
            return "rock"
            break;
        case 1:
            return "paper"
            break;
        case 2:
            return "scissors"
            break;
    }
};
console.log(getComputerChoice());

function getHumanChoice() {
    let inputMessage = prompt("Type rock, paper or scissors ");
    return inputMessage;
};

console.log(getHumanChoice());
