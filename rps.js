// Score
let userScore = 0;
let botScore = 0;
const userScoreSpan = document.getElementById('user_score');
const botScoreSpan = document.getElementById('bot_score');
// Message
const wlMsg = document.getElementById('wl-msg');
const wl = document.getElementById('wl');
const result = document.getElementById('result');
// RPS Buttons
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const playerHandler = (() => {
    rock.addEventListener('click', () => {
        gameHandler('r');
    });

    paper.addEventListener('click', () => {
        gameHandler('p');
    });

    scissors.addEventListener('click', () => {
        gameHandler('s');
    });
})();

const botHandler = () => {
    const handChoices = ['r', 'p', 's'];
    const botPick = Math.floor(Math.random() * 3);

    return handChoices[botPick];
};

const wltConvert = (char) => {
    if (char === 'r') return 'Rock';
    if (char === 'p') return 'Paper';
    if (char === 's') return 'Scissors';
};

const win = (botHandPick) => {
    userScore += 1;
    userScoreSpan.innerHTML = userScore;
    outcome = wltConvert(botHandPick);

    wlMsg.style.display = 'block';
    wl.style.color = '#2bc752';
    wl.innerHTML = 'won!';
    result.innerHTML = `${outcome}.`;
};

const lose = (botHandPick) => {
    botScore += 1;
    botScoreSpan.innerHTML = botScore;
    outcome = wltConvert(botHandPick);

    wlMsg.style.display = 'block';
    wl.style.color = '#ff3535';
    wl.innerHTML = 'lost!';
    result.innerHTML = `${outcome}.`;
};

const tie = (botHandPick) => {
    outcome = wltConvert(botHandPick);
    wlMsg.style.display = 'block';
    wl.style.color = '#f0a85f';
    wl.innerHTML = 'tied!';
    result.innerHTML = `${outcome}.`;
};

const reset = () => {
    if (userScore || botScore > 0) {
        userScoreSpan.innerHTML = 0;
        botScoreSpan.innerHTML = 0;
        wlMsg.innerHTML = 'Game reset!';
    } else {
        return;
    }
};

const gameHandler = (userPick) => {
    const botHandPick = botHandler();

    // ORDER: loss, win, tie
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
