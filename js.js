let compChoice ;
let playerChoice;
let compChoiceInt = 0;
let playerChoiceInt = 0;
playerScore=0;




function computerPlay(){
  let choiceNum=Math.floor(Math.random()*3);

  if(choiceNum===0){
    compChoice="rock"
    return compChoice
  }
  else if(choiceNum===1){
    compChoice="paper"
    return compChoice
    
  }
  else if(choiceNum===2){
    compChoice="scissor"
    return compChoice
    
  }
  
}
function playerplay(){
 let a= prompt("rock parer o scissor",)
 playerChoice=a;
 return (playerChoice)
};

function round(){
  
  if(playerChoice=="rock"&&compChoice=="paper"){
    
    return `win comp with ${compChoice}`

  }
  else if(playerChoice=="rock"&&compChoice=="scissor"){
    
    return `win Player with ${playerChoice}`

  }
  else if(playerChoice=="paper"&&compChoice=="rock"){
    
    return `win Player with ${playerChoice}`

  }
  else if(playerChoice=="paper"&&compChoice=="scissor"){
    
    return `win comp with ${compChoice}`

  }
  else if(playerChoice=="scissor"&&compChoice=="rock"){
    
    return `win comp with ${compChoice}`

  }
  else if(playerChoice=="scissor"&&compChoice=="paper"){
    
    return `Win Player With ${playerChoice}`

  }
  else if(playerChoice==compChoice){
    
    return `PAreggio`

  }
}function game(){
  playerplay();

console.log("il giocatore gioca : " ,playerChoice);

computerPlay();
console.log("il computer gioca : ",compChoice);
round();
console.log(round());
}


i=9;
function incrementI(i) {
  i = i + 1;
  return i;
}
console.log(incrementI(8));