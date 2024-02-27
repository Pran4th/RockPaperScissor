let compscored = 0;
let userscored = 0;
const choices = document.querySelectorAll(".choices img");
const msg = document.querySelector("#Statement");
const compscore = document.querySelector("#compscore");
const userscore = document.querySelector("#userscore");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("class");
        playgame(userchoice);
    });
});

const gencomputerchoice = () => {
    const randIndx = ["rock", "paper", "scissors"];
    const chosen_no = Math.floor(Math.random() * 3);
    return randIndx[chosen_no];
};

const drawgame = () => {
    msg.innerText = "It was a draw!";
};

const playgame = (userchoice) => {
    const compchoice = gencomputerchoice();
    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userWin = true;
        if (userchoice === "rock") {
            userWin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userWin = compchoice === "scissors" ? false : true;
        } else if (userchoice === "scissors") {
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compchoice);
    }
};

const showWinner = (userWin, userchoice, compchoice) => {
    if (userWin) {
        userscored++;
        userscore.innerText = userscored;
        msg.innerText = `You won. ${userchoice} beats ${compchoice}`;
    } else {
        compscored++;
        compscore.innerText = compscored;
        msg.innerText = `You lost. ${compchoice} beats ${userchoice}`;
    }
};
