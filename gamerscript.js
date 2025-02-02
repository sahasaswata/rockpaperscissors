let computerScore=0;
let yourScore=0;
let resetbutton=document.querySelector("#reset-btn");
let youScore=document.querySelector("#your-score");
let compScore=document.querySelector("#computer-score");
let msg=document.querySelector("#msg");
let choices=document.querySelectorAll(".choice");
let choiceArray=["rock","paper","scissors"];
const generateRandomChoice=()=>{
    return Math.floor(Math.random()*3);
}
resetbutton.addEventListener("click",()=>{
    computerScore=0;
    yourScore=0;
    updateScore();
    msg.innerText="Play your move";
    msg.style.backgroundColor="rgb(11, 60, 117)";
});
const updateScore=()=>{
    youScore.innerText=yourScore;
    compScore.innerText=computerScore;
}
const showWinner=(yourWin,yourChoice,computerChoice)=>{
    if(yourWin){
        yourScore++;
        msg.innerText=`You win, ${yourChoice} beats ${computerChoice} !`;
        msg.style.backgroundColor="green";
    }
    else{
        computerScore++;
        msg.innerText=`You lose, ${yourChoice} beaten by ${computerChoice} !`;
        msg.style.backgroundColor="red";
    }
    updateScore();
}
const drawGame=()=>{
    msg.innerText="It is a draw !";
    msg.style.backgroundColor="rgb(30, 163, 245)";
}
const playGame=(yourChoice)=>{
    let computerChoice=choiceArray[generateRandomChoice()];
    console.log(`Computer Choice ${computerChoice}`)
    console.log(`Your Choice ${yourChoice}`)
    if(yourChoice===computerChoice) drawGame();
    else{
        let yourWin=true;
        if(yourChoice==="rock") yourWin=computerChoice==="paper"?false:true;
        else if(yourChoice==="paper") yourWin=computerChoice==="scissors"?false:true;
        else yourWin=computerChoice==="rock"?false:true;
        showWinner(yourWin,yourChoice,computerChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const yourChoice=choice.getAttribute("id");
        playGame(yourChoice);
    })
});