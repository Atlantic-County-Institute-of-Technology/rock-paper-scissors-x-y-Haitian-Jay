const choices =["rock", "paper", "scissors"];
const resultElement = document.getElementById('result');

const rock = document.getElementById('button1');
const paper = document.getElementById('button2');
const scissors = document.getElementById('button3')

rock.addEventListener('click', () => {
    determineWinner(1, cpuchoice())
})
paper.addEventListener('click', () => {
    determineWinner(2, cpuchoice())
})
scissors.addEventListener('click', () => {
    determineWinner(3, cpuchoice())
})

function cpuchoice() {
    return Math.floor(Math.random() * 3) + 1;
}

// buttons.forEach(button ()=> {
//     const playerChoice = button.id;
//     const computerChoice = choices[choices.length]
//     const winner = determineWinner(playerChoice, computerChoice);
    
// })

const playerChoice = button.id;
const computerChoice = choices;
const winner = determineWinner (playerChoice, computerChoice);

function determineWinner(player, computer) {
    resultElement.textContent = `You chose ${playerChoice} computer chose ${computerChoice}`;
    if (player === computer) {
        return "It's a tie!";
    } else if (
        (player === 1 && computer === 1)
        (player === 2 && computer === 2)
        (player === 3 && computer === 3)
    ){
        return 'You win';
    } 
}
    
