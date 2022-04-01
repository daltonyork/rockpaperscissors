// Variables

let playerChoice = 0;
let computerChoice = 0;

let playerScore = 0;
let computerScore = 0;

let result;

// Input buttons

const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");

// Result & scoreboard text selectors

const resultText = document.getElementById("resultText");
const playerScoreText = document.getElementById("playerScoreText");
const computerScoreText = document.getElementById("computerScoreText");

// On click updaters

rockButton.addEventListener("click", function() {playerChoice = 0, rockPaperScissors()})
paperButton.addEventListener("click", function() {playerChoice = 1, rockPaperScissors()})
scissorsButton.addEventListener("click", function() {playerChoice = 2, rockPaperScissors()})

// Random weapon selector

function computerChooser() {
    computerChoice = Math.floor(Math.random()*3);
}

// Image updator

function imageUpdator() {
    if(playerChoice === 0) {
        document.getElementById("playerImage").src='./assets/rock.png';
    } else if (playerChoice === 1) {
        document.getElementById("playerImage").src='./assets/paper.png';
    } else if (playerChoice === 2) {
        document.getElementById("playerImage").src='./assets/scissors.png';
    }
    if(computerChoice === 0) {
        document.getElementById("computerImage").src='./assets/rock.png';
    } else if (computerChoice === 1) {
        document.getElementById("computerImage").src='./assets/paper.png';
    } else if (computerChoice === 2) {
        document.getElementById("computerImage").src='./assets/scissors.png';
    }
}

// Result calculator

function rockPaperScissors () {
    computerChooser();
    if(playerScore >= 5) {
        result = "Player wins!";
    } else if(computerScore >= 5) {
        result = "Computer wins!";
    } else if(computerChoice === 0 && playerChoice === 0) {
        result = "It's a draw!";
    } else if(computerChoice === 0 && playerChoice === 1) {
        result = "Paper beats rock";
        ++playerScore;
    } else if(computerChoice === 0 && playerChoice === 2) {
        result = "Rock beats scissors";
        ++computerScore;
    } else if(computerChoice === 1 && playerChoice === 0) {
        result = "Paper beats rock" 
        ++computerScore;
    } else if(computerChoice === 1 && playerChoice === 1) {
        result = "It's a draw!";
    } else if(computerChoice === 1 && playerChoice === 2) {
        result = "Scissors beats paper";
        ++playerScore;
    } else if(computerChoice === 2 && playerChoice === 0) {
        result = "Rock beats scissors";
        ++playerScore;
    } else if(computerChoice === 2 && playerChoice === 1) {
        result = "Scissors beats paper";
        ++computerScore;
    } else if(computerChoice === 2 && playerChoice === 2) {
        result = "It's a draw!";
    } if(playerScore >= 5) {
        result = "Player wins!";
    } else if(computerScore >= 5) {
        result = "Computer wins!";
    } imageUpdator()

    // Text updaters

    resultText.textContent = result;
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
}

