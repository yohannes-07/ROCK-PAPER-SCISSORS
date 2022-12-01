let computerSelection;
let playerSelection;
let computerScore = parseInt(0);
let playerScore = parseInt(0);

const score = document.getElementById("livescore")
const newgame = document.getElementById("newgame")
const match = document.getElementById('match')
const playerImg = document.getElementById('playerImg');
const computerImg = document.getElementById('computerImg');
const humanlogo = document.getElementById("humanlogo");
const computerlogo = document.getElementById("computerlogo");



function computerPlay(){
const array = ["rock", "paper", "scissor"];
return array[Math.floor(Math.random() * array.length)];

};

const rock = document.getElementById("rock");
rock.addEventListener("click", function(){
    if (computerScore >= 5 || playerScore >=5){
        score.textContent = `| ${playerScore} : ${computerScore} |`;
        return ;
    }
    computerSelection = computerPlay();
    playerSelection = "rock";
    playround(computerSelection, playerSelection);
    updateScore();
});
const paper = document.getElementById("paper");
paper.addEventListener("click", function(){
    if (computerScore >= 5 || playerScore >=5){
        score.textContent = `| ${playerScore} : ${computerScore} |`;
        return ;
    }
    computerSelection = computerPlay();
    playerSelection = "paper";
    playround(computerSelection, playerSelection);
    updateScore();

});

const scissor = document.getElementById("scissor");
scissor.addEventListener("click", function(){
    if (computerScore >= 5 || playerScore >=5){
        score.textContent = `| ${playerScore} : ${computerScore} |`;
        return ;
    }
    computerSelection = computerPlay();
    playerSelection = "scissor";
    playround(computerSelection, playerSelection);
    updateScore();
});

newgame.addEventListener("click", function(){
    newGame();

    
});
function newGame(){
    computerScore = 0;
    playerScore = 0;
    score.textContent = `| ${playerScore} : ${computerScore} |`;
    match.textContent = "Choose from the images and play!";
    match.style.color = "orange";
    humanlogo.style.visibility = 'hidden';
    computerlogo.style.visibility = 'hidden';
    playerImg.src = "images/whitebk.png";
    computerImg.src = "images/whitebk.png"

}



function updateScore(){
    score.textContent = `| ${playerScore} : ${computerScore} |`;
    humanlogo.style.visibility = 'visible';
    computerlogo.style.visibility = 'visible';
    newgame.style.visibility = "visible";

    if (playerSelection === 'rock') {
        playerImg.src = "images/rock.jpg"
    } else if (playerSelection === 'paper') {
        playerImg.src = "images/paper.jpg"
    } else if (playerSelection === 'scissor') {
        playerImg.src = 'images/scissors.jpg'
    } if (computerSelection === 'rock') {
        computerImg.src = "images/rock.jpg"
    } else if (computerSelection === 'paper') {
        computerImg.src = "images/paper.jpg"
    } else if (computerSelection === 'scissor') {
        computerImg.src = 'images/scissors.jpg'
    }
}

const playround = (computerSelection, playerSelection ) => {
    if (computerSelection === "rock"){
        if (playerSelection === "scissor"){
            match.innerText = `Ohh you lose, try next round!`;
            computerScore += 1;
            winner();

        }else if(playerSelection === "paper"){
            match.innerText = `YOU DID IT!!! Go to next round!`;   
            playerScore += 1;
            winner();
        }
    }
     if(computerSelection === "paper"){
        if(playerSelection === "rock"){
            match.innerText = `Ohh you lose, try next round!`;
            computerScore += 1;
            winner();
 
        }else if(playerSelection === "scissor"){
            match.innerText = `YOU DID IT!!! Go to next round!`;   
            playerScore += 1;
            winner();
        }
    }
    if(computerSelection === "scissor"){
        if(playerSelection === "paper"){
            match.innerText = `Ohh you lose, try next round!`;
            computerScore += 1;
            winner();
 
        }else if(playerSelection === "rock"){
            match.innerText = `YOU DID IT!!! Go to next round!`;   
            playerScore += 1;
            winner();
        }
    }
    if (playerSelection === computerSelection) {
        match.innerText = `its a tie!`; 
        match.style.textAlign = 'center';
        winner();
    }
};


function winner(){
    if (playerScore < 5 && computerScore < 5){
        match.style.textAlign = "center";
    }else if(playerScore === 5){
        match.innerText = `YOU WON! Wanna try again?\n Click New game`;
        match.style.textAlign = "center";
        match.style.color = "Green";
        

        

    }else if(computerScore === 5){
        match.innerText = `YOU LOST! Wanna try again?\n Click new game`;
        match.style.textAlign = "center";
        match.style.color = "red";
      
    }

}





