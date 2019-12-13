// Score
const userScore = 0;
const botScore = 0;
const userScoreSpan = document.getElementById('user_score');
const botScoreSpan = document.getElementById('bot_score');
// Message
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

const gameHandler = (userPick) => {
    const botHandPick = botHandler();

    switch (userPick + botHandPick) {
        // LOSE
        case 'rp':
        case 'ps':
        case 'sr':
            console.log('Lost');
            break;
        // WIN
        case 'rs':
        case 'pr':
        case 'sp':
            console.log('You won');
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            console.log('You tied!');
            break;
    }
};
// TODO: winCheck
