let playerScore = 0;
let computerScore = 0;
let gameAlive = true;

const resetBtn = document.querySelector("button");
const pScore = document.querySelector(".player-score");
const cScore = document.querySelector(".computer-score");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
pScore.textContent += `Player: ${playerScore}`;
cScore.textContent += `Computer: ${computerScore}`;

let winner = document.createElement("div");
document.body.appendChild(winner);

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  function computerPlay() {
    let throwHand = Math.floor(Math.random() * 3) + 1;

    switch (throwHand) {
      case 1:
        return "rock";
        break;
      case 2:
        return "paper";
        break;
      case 3:
        return "scissors";
        break;
    }
  }
  if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(`Player wins, ${playerSelection} beats ${computerSelection}`);
    playerScore++;
    pScore.textContent = `Player: ${playerScore}`;
  } else if (
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    console.log(`Computer wins, ${computerSelection} beats ${playerSelection}`);
    computerScore++;
    cScore.textContent = `Computer: ${computerScore}`;
  } else {
    console.log("Tie Round");
  }
  if (playerScore === 5) {
    gameAlive = false;
    winner.textContent = "Player Wins!";
  } else if (computerScore === 5) {
    winner.textContent = "Computer Wins!";
    gameAlive = false;
  }
  if (gameAlive === false) {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  }
}

function reset() {
  gameAlive = true;
  playerScore = 0;
  pScore.textContent = `Player: ${playerScore}`;
  computerScore = 0;
  cScore.textContent = `Computer: ${computerScore}`;
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
  winner.textContent = "";
}

rock.addEventListener("click", function () {
  playRound("rock");
});
paper.addEventListener("click", function () {
  playRound("paper");
});
scissors.addEventListener("click", function () {
  playRound("scissors");
});
resetBtn.addEventListener("click", reset);
