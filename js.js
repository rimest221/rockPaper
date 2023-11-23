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
const pop= document.querySelector(".pop");
const reset=document.querySelector(".reset");
/*  */


const computerchoise= document.querySelector(".computerchoise");
const playerchoise= document.querySelector(".playerchoise");
const anadmento= document.querySelector(".ANDAMENTO");


var div= document.createElement("div");
div.style.height="100px";
div.style.width="100px";



div.style.backgroundColor="green";
h.appendChild(div);



/**Sasso */
rock.addEventListener("click", () => {
  playerChoice = "rock";
  console.log("rock");
  computerPlay();
  console.log(computerPlay());
  round();
  a.textContent=` Comp score ${compScore}`;
  b.textContent=` Player score ${playerScore}`;
  /* */
  popup();});
  /**Carta */
paper.addEventListener("click", () => {
  playerChoice = "paper";
  console.log(playerChoice);
  computerPlay();
  console.log(computerPlay());
  round();
  a.textContent=` Comp score ${compScore}`;
  b.textContent=` Player score ${playerScore}`;
  popup();

});
/**forbice*/
scissor.addEventListener("click", () => {
  playerChoice = "scissor";
  console.log(playerChoice);
  computerPlay();
  console.log(computerPlay());
  round();
  a.textContent=` Comp score ${compScore}`;
  b.textContent=` Player score ${playerScore}`;
  popup();
});
/**funzione giocata PC */
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
/**Funzione del round */
function round() {
  if (playerChoice == "rock" && compChoice == "paper") {
  computerchoise.textContent=`computer choise: ${compChoice}`;
  playerchoise.textContent=`player choise: ${playerChoice}`;
    winString = `win comp with ${compChoice}`;
    console.log(winString);
    anadmento.textContent=winString;
    compScore += +1;
    console.log(compScore);

    
  } else if (playerChoice == "rock" && compChoice == "scissor") {
    computerchoise.textContent=`computer choise: ${compChoice}`;
  playerchoise.textContent=`player choise: ${playerChoice}`;
    winString = `win Player with ${playerChoice}`;
    console.log(winString);
    anadmento.textContent=winString;
    playerScore += +1;
    console.log(playerScore);

  } else if (playerChoice == "paper" && compChoice == "rock") {
    computerchoise.textContent=`computer choise: ${compChoice}`;
  playerchoise.textContent=`player choise: ${playerChoice}`;
    winString = `win Player with ${playerChoice}`;
    console.log(winString);
    anadmento.textContent=winString;
    playerScore += +1;
    console.log(playerScore);

  } else if (playerChoice == "paper" && compChoice == "scissor") {
    computerchoise.textContent=`computer choise: ${compChoice}`;
  playerchoise.textContent=`player choise: ${playerChoice}`;
    winString = `win comp with ${compChoice}`;
    console.log(winString);
    anadmento.textContent=winString;
    compScore += +1;
    console.log(compScore);
  } else if (playerChoice == "scissor" && compChoice == "rock") {
    computerchoise.textContent=`computer choise: ${compChoice}`;
  playerchoise.textContent=`player choise: ${playerChoice}`;
    winString = `win comp with ${compChoice}`;
    console.log(winString);
    anadmento.textContent=winString;
    compScore += +1;
    console.log(compScore);
  } else if (playerChoice == "scissor" && compChoice == "paper") {
    computerchoise.textContent=`computer choise: ${compChoice}`;
  playerchoise.textContent=`player choise: ${playerChoice}`;
    winString = `win Player with ${playerChoice}`;
    console.log(winString);
    anadmento.textContent=winString;
    playerScore += +1;
    console.log(playerScore);
  } else if (playerChoice == compChoice) {
    computerchoise.textContent=`computer choise: ${compChoice}`;
  playerchoise.textContent=`player choise: ${playerChoice}`;
  anadmento.textContent="pareggio";
    return `PAreggio`;
  }
}
/*popup vittoria */
function popup(){
  if(compScore===5||playerScore===5){
    if(compScore===5){
  
      pop.classList.remove("none");
      const theWinner=document.querySelector(".theWinner");
      theWinner.textContent="computer Win";
     
      
    }else if(playerScore=5){
      const theWinner=document.querySelector(".theWinner");
      theWinner.textContent="player Win";
      pop.classList.remove("none");
    }
  }
};
/**inizializzazione */
function iniz(){
  
 
 pop.classList.add("none");
 playerScore=0;
 compScore=0;
 a.textContent=playerScore;
 b.textContent=compScore;
 
};

reset.addEventListener("click",iniz);