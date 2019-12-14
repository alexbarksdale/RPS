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
    gameHandler('r');
});

paperBtn.addEventListener('click', () => {
    gameHandler('p');
});

scissorsBtn.addEventListener('click', () => {
    gameHandler('s');
});

const botHandler = () => {
    const handChoices = ['r', 'p', 's'];
    const botChoice = Math.floor(Math.random() * 3);

    return handChoices[botChoice];
};

const wltConvert = (char) => {
    if (char === 'r') return 'Rock';
    if (char === 'p') return 'Paper';
    return 'Scissors';
};

const win = (botHandPick) => {
    userScore += 1;
    userScoreSpan.innerHTML = userScore;
    outcome = wltConvert(botHandPick);

    wlMsg.style.display = 'block';
    userPickMsg.style.color = '#2bc752';
    userPickMsg.innerHTML = 'won!';
    resultMsg.innerHTML = `${outcome}.`;
};

const lose = (botHandPick) => {
    botScore += 1;
    botScoreSpan.innerHTML = botScore;
    outcome = wltConvert(botHandPick);

    wlMsg.style.display = 'block';
    userPickMsg.style.color = '#ff3535';
    userPickMsg.innerHTML = 'lost!';
    resultMsg.innerHTML = `${outcome}.`;
};

const tie = (botHandPick) => {
    outcome = wltConvert(botHandPick);

    wlMsg.style.display = 'block';
    userPickMsg.style.color = '#f0a85f';
    userPickMsg.innerHTML = 'tied!';
    resultMsg.innerHTML = `${outcome}.`;
};

const gameHandler = (userPick) => {
    const botHandPick = botHandler();

    // CASE ORDER: loss, win, tie
    switch (userPick + botHandPick) {
        case 'rp':
        case 'ps':
        case 'sr':
            lose(botHandPick);
            break;
        case 'rs':
        case 'pr':
        case 'sp':
            win(botHandPick);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            tie(botHandPick);
            break;
    }
};
