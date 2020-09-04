let rockButton=document.querySelector(".imgContainerRock");
let paperButton=document.querySelector(".imgContainerPaper");
let scissorsButton=document.querySelector(".imgContainerScissors");
let bottomParent=rockButton.parentNode;
let round=document.querySelectorAll("sub")[0];
let computerScoreText=document.querySelector(".computerScore");
let humanScoreText=document.querySelector(".humanScore");
let computerState=document.querySelectorAll(".selection")[0];
let humanState=document.querySelectorAll(".selection")[1];
let middleText=document.querySelector(".middleText"); 
let playA=document.createElement("button");
playA.setAttribute("value","play Again");
playA.setAttribute("class","playNextButton");
playA.innerText="play again";
let roundCount=0;
let userScore=0,computerScore=0;
rockButton.addEventListener("click",()=>{game("ROCK")});
paperButton.addEventListener("click",()=>{game("PAPER")});
scissorsButton.addEventListener("click",()=>{game("SCISSORS")});
playA.addEventListener("click",()=>{
    bottomParent.removeChild(playA);
    bottomParent.insertBefore(scissorsButton, bottomParent.childNodes[0]);
    bottomParent.insertBefore(paperButton, bottomParent.childNodes[0]);
    bottomParent.insertBefore(rockButton, bottomParent.childNodes[0]);
    middleText.textContent="hit one of the options to begin";
    computerState.innerText="..........";
    humanState.innerText="..........";
    round.textContent="Round :0";
    userScore=0,computerScore=0;
    roundCount=0;
   humanScoreText.textContent=userScore;
   computerScoreText.textContent=computerScore;
})

/* a function to pick a random computer option */
function computerPlay(){
    let RockPaperScissors=["ROCK","PAPER","SCISSORS"];
    return RockPaperScissors[Math.floor(Math.random()*3)];
}

/* a function to play a single round and return a winning number */
function playRound(playerSelection,computerSelection){
    if(playerSelection=="ROCK"){
                if(computerSelection=="PAPER"){
                    return -1;
                }
                else if(computerSelection=="SCISSORS"){
                    return 1;
                }
    }
    else if(playerSelection=="PAPER"){
                if(computerSelection=="ROCK"){
                    return 1;
                }
                else if(computerSelection=="SCISSORS"){
                    return -1;
                }
    }
    else if(playerSelection=="SCISSORS"){
                if(computerSelection=="PAPER"){
                    return 1;
                }
                else if(computerSelection=="ROCK"){
                    return -1;
                }    

    }
     return 0;
    /*it’s a tie both throw SCISSORS
	 function only returns 0 if the player chose ROCK or PAPER or SCISORE 
	 and can't find unlike choice of the computer to compare it with, 
     in which case they are equal
	 */
    // paper > rock
    // rock > SCISSORS
    // SCISSOR > paper

}

/* a game function called by a user and manipulate the document */
function game(humanChoice){
    roundCount++;
    computerSelection=computerPlay();
    let result=playRound(humanChoice,computerSelection);
   if(result==1){  
    middleText.textContent="you won ! "+humanChoice+" beats "+computerSelection;
       userScore++;  
       }
   else if(result== -1){  
    middleText.textContent="you lose ! "+computerSelection+" beats "+humanChoice;
       computerScore++;
       }
   else { 
    middleText.textContent="it’s a tie both chose "+humanChoice;
       }

    round.textContent="Round :"+roundCount;
       if(roundCount==5){
 middleText.innerHTML="Game Over <br/> your score is : "+userScore +"<br/>computer score is : "+computerScore;
    userScore > computerScore ? round.textContent="You have won in total. congrats: " :
    userScore < computerScore ? round.textContent="You have lost in total. try again: " :
    round.textContent="you have match... you should replay";
    bottomParent.removeChild(rockButton);
    bottomParent.removeChild(paperButton);
    bottomParent.removeChild(scissorsButton);
    bottomParent.insertBefore(playA, bottomParent.childNodes[0]);
       }
   humanScoreText.textContent=userScore;
   computerScoreText.textContent=computerScore;
   computerState.textContent=computerSelection;
   humanState.textContent=humanChoice;

}