let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const userComp_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice(){
    const choices = ["r","p","s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors"; 


}

function action(letter){
    if(letter === "r") return "smashes";
    if(letter === "p") return "covers";
    return "cuts"; 
}

function win(userChoice, compChoice){
    userScore++;
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    userComp_span.innerHTML = compScore;
    result_div.innerHTML = `${convertToWord(userChoice)} ${action(userChoice)} ${convertToWord(compChoice)}. You win! 🔥`;
    userChoice_div.classList.add("green-glow");
    setTimeout(() => userChoice_div.classList.remove("green-glow"), 500);
}

function lose(userChoice, compChoice){
    compScore++;
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    userComp_span.innerHTML = compScore;
    result_div.innerHTML = `${convertToWord(compChoice)} ${action(compChoice)} ${convertToWord(userChoice)}. You lose. ☹️`;    
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"), 500);
}

function draw(userChoice, compChoice){
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    userComp_span.innerHTML = compScore;
    result_div.innerHTML = `${convertToWord(compChoice)} = ${convertToWord(userChoice)}. Its a draw.`; 
    userChoice_div.classList.add("gray-glow");
    setTimeout(() => userChoice_div.classList.remove("gray-glow"), 500);  
}

function game(userChoice){
    const compChoice = getCompChoice();
    switch(userChoice + compChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break; 
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;    
    }
}


function main(){
    rock_div.addEventListener("click", () => game("r"));

    paper_div.addEventListener("click", () => game("p"));

    scissors_div.addEventListener("click", () => game("s"));

}

main();