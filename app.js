var userScore = 0;
var cpuScore = 0;
const userScore_span = document.getElementById("user-score");
const cpuScore_span = document.getElementById("cpu-score");
const scoreBoard_div = document.querySelector(".score-board");
const paper_div = document.getElementById("squirtle");
const rock_div = document.getElementById("charmander");
const scissor_div = document.getElementById("bulbasaur");

function getComputerChoice(){
    var moves = Array('rock', 'paper', 'scissor');
    return moves[Math.floor(Math.random()*moves.length)];
}
function win(){
    userScore++;
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
}
function lose(){
    cpuScore++;
    cpuScore_span.innerHTML = cpuScore;
    userScore_span.innerHTML = userScore;
}
function draw(){
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win();
            break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":  
            lose();
            break; 
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":  
            draw();
            break; 
    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game("rock");
    })
    paper_div.addEventListener('click', function(){
        game("paper");
    })
    scissor_div.addEventListener('click', function(){
        game("scissor");
    })
}
main();
