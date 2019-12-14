// Score
let userScore = 0;
let botScore = 0;
const userScoreSpan = document.getElementById('user_score');
const botScoreSpan = document.getElementById('bot_score');
// Message
const wlMsg = document.getElementById('wl-msg');
const userPickMsg = document.getElementById('user-pick');
const resultMsg = document.getElementById('result-msg');
const restartMsg = document.getElementById('restart-msg');
// RPS Buttons
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resetBtn = document.getElementById('reset-btn');

resetBtn.addEventListener('click', () => {
    if (userScore || botScore > 0) {
        userScore = 0;
        botScore = 0;
        userScoreSpan.innerHTML = 0;
        botScoreSpan.innerHTML = 0;
        restartMsg.style.display = 'block';
        wlMsg.style.display = 'none';

        setTimeout(() => {
            restartMsg.style.display = 'none';
        }, 2000);
    } else {
        return;
    }
});

rockBtn.addEventListener('click', () => {
    gameHandler('rock');
});

paperBtn.addEventListener('click', () => {
    gameHandler('paper');
});

scissorsBtn.addEventListener('click', () => {
    gameHandler('scissor');
});

const botHandler = () => {
    const handChoices = ['rock', 'paper', 'scissor'];
    const botChoice = Math.floor(Math.random() * 3);

    return handChoices[botChoice];
};

const win = (botHandPick) => {
    userScore += 1;
    userScoreSpan.innerHTML = userScore;

    wlMsg.style.display = 'block';
    userPickMsg.style.color = '#2bc752';
    userPickMsg.innerHTML = 'won!';
    resultMsg.innerHTML = `${botHandPick}.`;
};

const lose = (botHandPick) => {
    botScore += 1;
    botScoreSpan.innerHTML = botScore;

    wlMsg.style.display = 'block';
    userPickMsg.style.color = '#ff3535';
    userPickMsg.innerHTML = 'lost!';
    resultMsg.innerHTML = `${botHandPick}.`;
};

const tie = (botHandPick) => {
    wlMsg.style.display = 'block';
    userPickMsg.style.color = '#f0a85f';
    userPickMsg.innerHTML = 'tied!';
    resultMsg.innerHTML = `${botHandPick}.`;
};

const gameHandler = (userPick) => {
    const botHandPick = botHandler();

    // CASE ORDER: loss, win, tie
    switch (userPick + botHandPick) {
        case 'rockpaper':
        case 'paperscissor':
        case 'scissorrock':
            lose(botHandPick);
            break;
        case 'rockscissor':
        case 'paperrock':
        case 'scissorpaper':
            win(botHandPick);
            break;
        case 'rockrrock':
        case 'paperpaper':
        case 'scissorscissor':
            tie(botHandPick);
            break;
    }
};
