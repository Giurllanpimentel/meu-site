const result = document.querySelector(".result");
const humamScore = document.querySelector("#humam-score")
const machineScore = document.querySelector("#machine-score")

let humamScoreNumber = 0
let machineScoreNumber = 0


const playHuman = (humanChoice) => {
  playTheGame(humanChoice, playMachine());
};

const playMachine = () => {
  const choices = ["pedra", "papel", "tesoura"];
  const ramdomNumber = Math.floor(Math.random() * 3);

  return choices[ramdomNumber];
};

const playTheGame = (human, machine) => {
  console.log(human, machine);

  if (human === machine) {
    result.innerHTML = "Deu empate";
  } else if (
    (human === "papel" && machine === "pedra") ||
    (human === "pedra" && machine === "tesoura") ||
    (human === "tesoura" && machine === "papel")
  ) {
    humamScoreNumber++
    humamScore.innerHTML = humamScoreNumber
    result.innerHTML = "Você ganhou";
  } else {
    machineScoreNumber++
    machineScore.innerHTML = machineScoreNumber
    result.innerHTML = "Você perdeu pra Alexa!";
  }
};


