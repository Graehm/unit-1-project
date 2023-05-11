// /*----- constants -----*/
const PLAYERS = {
    'null': null,
    '1': 'X',
    '-1': 'O'
}
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// /*----- state variables -----*/
let turn;
let winner;
let board;

// /*----- cached elements  -----*/
const winningMessage = document.querySelector('h1');
const boardTiles = document.getElementById('board');
const tilePL = document.querySelectorAll('.tile');
const forfeitBtn = document.querySelector('.quit');
const playAgainBtn = document.querySelector('.play');

// /*----- event listeners -----*/
//
boardTiles.addEventListener('click', makeMove);
forfeitBtn.addEventListener('click', init);
playAgainBtn.addEventListener('click', init);

// /*----- functions -----*/
init();

function init() {
    turn = 1;
    winner = null;
    board = [
        [0, 0, 0], //col 0
        [0, 0, 0], //col 1
        [0, 0, 0], //col 2
        // r0, r1, r2  
    ];
    render();
}

//with safe guard, cann access first idx of all columns
function makeMove(evt) {
    const tileNumber = evt.target.dataset.idx;
    // if (winner || boardTiles[tileNumber]) return;
    // if (boardTiles[tileNumber]) return;
    board[tileNumber] = turn;
    turn *= -1;
    winner = findWinner();
    render();
}

function findWinner() {
    for (let i = 0; i < winningCombos.length; i++) {
        if (Math.abs(board[0] + board[1] + board[2]) === 3)
            return board[0];
        if (Math.abs(board[3] + board[4] + board[5]) === 3)
            return board[3];
        if (Math.abs(board[6] + board[7] + board[8]) === 3)
            return board[6];
        if (Math.abs(board[0] + board[3] + board[6]) === 3)
            return board[0];
        if (Math.abs(board[1] + board[4] + board[7]) === 3)
            return board[1];
        if (Math.abs(board[2] + board[5] + board[8]) === 3)
            return board[2];
        if (Math.abs(board[0] + board[4] + board[8]) === 3)
            return board[0];
        if (Math.abs(board[2] + board[4] + board[6]) === 3)
            return board[2];
    }
    if (board.includes(null)) return;
    return 'tie';
};
// for (let winner = 0; winner <= 3; i++) {
// if (winner === 1) {
//     player1wins++;
// } else {
//     player2wins++
// }


//render it all to DOM with embedded executer function 
function render() {
    tilePL.forEach(function (tileSG, idx) {
        tileSG.textContent = PLAYERS[board[idx]];
    });
    forfeitBtn.disabled = !winner;
    playAgainBtn.disabled = winner;
    renderWinningMsg();
    // renderBtn();
    renderScoreBoard();
};

function renderWinningMsg() {
    if (winner === 'tie') {
        winningMessage.innerHTML = "It's A Tie!";
    } else if (!winner) {
        winningMessage.innerHTML = `Player ${PLAYERS[turn]}'s Turn`;
    } else {
        winningMessage.innerHTML = `Player ${PLAYERS[winner]} Wins!`;
    }
};

// function renderBtn() {
//     if (!winner) {
//         document.querySelector('.play').disabled = true;
//     } else {
//         document.querySelector('.play').disabled = true;
//     }
// };

function renderScoreBoard() {
};


// // render scoring updates to flexbox items 
// //---Q: how to grab the elements for scoring
// //---Q: F counter to increase the points from 0-5 as games are won. how and where -- new but same scope or embedded function?
// function scoreBoard(player, computer) {
//     const playerPoints = document.getElementsByClassName(`scoreBox > playerScore`);
//     playerPoints;
//     const computerPoints = document.getElementsByClassName(`scoreBox > computerScore`);
//     computerPoints;
// }


// // best three of 5 freq counter 
// loop with counter 
//     for (let i = 0; i>1; i++){
//     } 
//     repeat until i>=3 
//     then findWinner();
