let compChoice;
let playerChoice;
let compChoiceInt = 0;
let playerChoiceInt = 0;
let playerScore = 0;
let compScore = 0;
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let bottnoni = document.querySelector(".btn");
let winString = "";
const a = document.querySelector(".TextcompScore");
const b = document.querySelector(".TextplyarerScore");
const h = document.querySelector(".ki")
const win= document.querySelector(".win");
const computerchoise= document.querySelector(".computerchoise");
const playerchoise= document.querySelector(".playerchoise");
const anadmento= document.querySelector(".ANDAMENTO");


var div= document.createElement("div");
div.style.height="100px";
div.style.width="100px";



div.style.backgroundColor="green";
h.appendChild(div);




rock.addEventListener("click", () => {
  playerChoice = "rock";
  console.log("rock");
  computerPlay();
  console.log(computerPlay());
  round();
  a.textContent=` Comp score ${compScore}`;
  b.textContent=` Comp score ${playerScore}`;
  if(compScore===5||playerScore===5){
    if(compScore===5){
  
     

     
      
    }else if(playerScore===5){
     
    }
  }
});
paper.addEventListener("click", () => {
  playerChoice = "paper";
  console.log(playerChoice);
  computerPlay();
  console.log(computerPlay());
  round();
});
scissor.addEventListener("click", () => {
  playerChoice = "scissor";
  console.log(playerChoice);
});

function computerPlay() {
  let choiceNum = Math.floor(Math.random() * 3);

  if (choiceNum === 0) {
    compChoice = "rock";
    return compChoice;
  } else if (choiceNum === 1) {
    compChoice = "paper";
    return compChoice;
  } else if (choiceNum === 2) {
    compChoice = "scissor";
    return compChoice;
  }
}

function round() {
  if (playerChoice == "rock" && compChoice == "paper") {
  computerchoise.textContent=`computer choise ${compChoice}`;
  playerchoise.textContent=`player choise ${playerChoice}`;
    winString = `win comp with ${compChoice}`;
    console.log(winString);
    anadmento.textContent=winString;
    compScore += +1;
    console.log(compScore);

    
   
    

  } else if (playerChoice == "rock" && compChoice == "scissor") {
    winString = `win Player with ${playerChoice}`;
    console.log(winString);
    playerScore += +1;
    console.log(playerScore);

  } else if (playerChoice == "paper" && compChoice == "rock") {
    winString = `win Player with ${playerChoice}`;
    console.log(winString);
    playerScore += +1;
    console.log(playerScore);

  } else if (playerChoice == "paper" && compChoice == "scissor") {
    winString = `win comp with ${compChoice}`;
    console.log(winString);
    compScore += +1;
    console.log(compScore);
  } else if (playerChoice == "scissor" && compChoice == "rock") {
    winString = `win comp with ${compChoice}`;
    console.log(winString);
    compScore += +1;
    console.log(compScore);
  } else if (playerChoice == "scissor" && compChoice == "paper") {
    winString = `win Player with ${playerChoice}`;
    console.log(winString);
    playerScore += +1;
    console.log(playerScore);
  } else if (playerChoice == compChoice) {
    return `PAreggio`;
  }
}
