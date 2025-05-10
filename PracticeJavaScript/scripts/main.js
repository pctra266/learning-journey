let score = JSON.parse(localStorage.getItem('score'));
if(score == null){
    score =  {
    player: 0,
    computer: 0
};
}
updateScore();
let playerChoice = ''; 
let computerChoice = ''; 
let result = '';
function playGame(playerChoice) {
let randomNumber = (Math.random());
if(randomNumber < 0.33){
    computerChoice = 'Rock';
} else if (randomNumber < 0.66){
    computerChoice = 'Paper';
} else {
    computerChoice = 'Scissors';
}

result = `You:<img src="images/${playerChoice}.jpg"> , Computer:<img src="images/${computerChoice}.jpg">  - `;

    if (playerChoice === computerChoice) {
        result += 'It\'s a tie!';
    } else if (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        result += 'You win!';
        score.player++;
    } else {
        result += 'You lose!';
        score.computer++;
    }
    updateScore();
    updateResult();
}
function updateResult() {
    document.getElementById('result').innerHTML = result;
}
function updateScore() {
    document.getElementById('score').innerHTML = `Player: ${score.player}, Computer: ${score.computer}`;
    localStorage.setItem('score', JSON.stringify(score));
}
function resetScore() {
    score.player = 0;
    score.computer = 0;
    updateScore();
}
