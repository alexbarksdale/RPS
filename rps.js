// Score
let userScore = 0;
let botScore = 0;
const userScoreSpan = document.getElementById('user_score');
const botScoreSpan = document.getElementById('bot_score');
// Message
const wlMsg = document.getElementById('wl-msg');
const wl = document.getElementById('wl');
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

const win = () => {
    userScore += 1;
    userScoreSpan.innerHTML = userScore;
    wlMsg.style.display = 'block';
    wl.style.color = '#2bc752';
    wl.innerHTML = 'won!';
    console.log('win went offf');
};

const lose = () => {
    botScore += 1;
    botScoreSpan.innerHTML = botScore;
    wlMsg.style.display = 'block';
    wl.style.color = '#ff3535';
    wl.innerHTML = 'lost!';
    console.log('lost went off');
};

const tie = () => {
    wlMsg.style.display = 'block';
    wl.style.color = '#f0a85f';
    wl.innerHTML = 'tied!';
    console.log('tie went off');
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
            lose();
            console.log('You lost!');
            break;
        case 'rs':
        case 'pr':
        case 'sp':
            win();
            console.log('You won!');
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            tie();
            console.log('You tied!');
            break;
    }
};
