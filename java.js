let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["stone", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game Was Draw. Play Again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}` ;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("comp win");
        msg.innerText = `Comp Win.  ${compChoice} beats your ${userChoice}` ;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    console.log("user choice = ", userChoice)
        const compChoice = genCompChoice();
        console.log("comp choice = ", compChoice)

    if(userChoice===compChoice){
        drawGame();
        
    } else {
        let userWin = true;
        
        if(userChoice === "stone"){
            //stone
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice==="paper"){
            //paper
            userWin = compChoice === "scissors" ? false : true;
        }else{
            //scissors
            userWin = compChoice==="stone" ? false : true;
        }
        showWinner(userWin , userChoice, compChoice);
   }
};



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
