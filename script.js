function getComputerChoice() {
  let rpsChoices = ["Rock", "Paper", "Scissors"];
  const randomChoice = rpsChoices[Math.floor(Math.random() * 3)];
  return randomChoice;
}

function getResult(playerChoice, computerChoice) {
  let count = 0;
  if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice === "Paper") ||
    (playerChoice === "Paper" && computerChoice === "Rock")
  ) {
    count = 1;
  } else if (playerChoice === computerChoice) {
    count = 0;
  } else count = -1;
  return count;
}

function showResult(score, playerChoice, computerChoice) {
  let result = document.getElementById("result");

  switch (score) {
    case -1:
      result.innerText =  `You Lose!`;
      break;
    case 0:
      result.innerText = `It's a Draw!`;
      break;
    case 1:
      result.innerText = `You Win!`;
      break;
  }
  let playerScore = document.getElementById("player-score");
  let hands = document.getElementById("hands");
  playerScore.innerText = `${Number(playerScore.innerText) + score}`;
  hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`;
}

function onClickRPS(playerChoice) {
  let compChoice = getComputerChoice();
  let res = getResult(playerChoice.value, compChoice);
  showResult(res, playerChoice.value, compChoice);
}

function playGame() {
  let btns = document.querySelectorAll(".rpsButton");
  btns.forEach((btn) => {
    btn.onclick = () => onClickRPS(btn);
  });
  let endgame = document.getElementById("endGameButton");
  endgame.addEventListener("click", endGame);
}

function endGame() {
  let playerScore = document.getElementById("player-score");
  let hands = document.getElementById("hands");
  let result = document.getElementById("result");
  playerScore.innerText = "";
  hands.innerText = "";
  result.innerText = "";
}

playGame();
