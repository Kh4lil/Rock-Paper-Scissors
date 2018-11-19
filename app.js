var userScore = 0;
var cpuScore = 0;
const userScore_span = document.getElementById("user-score");
const cpuScore_span = document.getElementById("cpu-score");
const scoreBoard_div = document.querySelector(".score-board");
const squirtle_div = document.getElementById("squirtle");
const charmander_div = document.getElementById("charmander");
const bulbasaur_div = document.getElementById("bulbasaur");

function getComputerChoice(){
    var moves = Array('charmander', 'squirtle', 'bulbasaur');
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
    document.getElementById(userChoice).classList.add('red');
}
function draw(){
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "charmanderbulbasaur":
        case "squirtlecharmander":
        case "bulbasaursquirtle":
            win();
            break;
        case "charmandersquirtle":
        case "squirtlebulbasaur":
        case "bulbasaurcharmander":  
            lose();
            break; 
        case "charmandercharmander":
        case "squirtlesquirtle":
        case "bulbasaurbulbasaur":  
            draw();
            break; 
    }
}

function main(){
    charmander_div.addEventListener('click', function(){
        game("charmander");
    })
    squirtle_div.addEventListener('click', function(){
        game("squirtle");
    })
    bulbasaur_div.addEventListener('click', function(){
        game("bulbasaur");
    })
}
main();
