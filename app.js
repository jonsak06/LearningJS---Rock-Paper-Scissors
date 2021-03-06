const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(
        `${ROCK}, ${PAPER} or ${SCISSORS}?`,
        ""
    ).toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
};

const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

const getWinner = (
    cPlayer,
    cComputer //works without curly braces because it contains only one expression
) =>
    cPlayer === cComputer
        ? RESULT_DRAW
        : (cPlayer === ROCK && cComputer === SCISSORS) ||
          (cPlayer === PAPER && cComputer === ROCK) ||
          (cPlayer === SCISSORS && cComputer === PAPER)
        ? RESULT_PLAYER_WINS
        : RESULT_COMPUTER_WINS;

startGameBtn.addEventListener("click", () => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log("Game is starting...");
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    winner = getWinner(playerChoice, computerChoice);
    let message = `You picked ${playerChoice}, computer picked ${computerChoice} therefore you `;
    if (winner === RESULT_DRAW) {
      message += 'had a draw';
    } else if (winner === RESULT_PLAYER_WINS) {
      message += 'won';
    } else {
      message += 'lost';
    }
    alert(message);
    gameIsRunning = false;
});
