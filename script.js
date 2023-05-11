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
let tileCounter = 0;

// /*----- cached elements  -----*/
const winningMessage = document.querySelector('#message');
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
    tileCounter = 0;
    render();
}

//with safe guard, cann access first idx of all columns
function makeMove(evt) {
    const tileNumber = evt.target.dataset.idx;
    // if (winner || boardTiles[tileNumber]) return;
    // if (boardTiles[tileNumber]) return;
    board[tileNumber] = turn;
    // console.log(findWinner());
    tileCounter++;
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
    if (tileCounter === 9) return "tie"
    return null
    
    
    // (board.includes(null));
    // return 'tie';
};
// for (let winner = 0; winner <= 3; i++) {
// if (winner === 1) {
//     player1wins++;
// } else {
//     player2wins++
// }


function render() {
    tilePL.forEach(function (tileSG, idx) {
        tileSG.textContent = PLAYERS[board[idx]];
    });
    renderWinningMsg();
    turn *=-1;
    renderBtns();
    // renderScoreBoard();
};

function renderWinningMsg() {
    if (winner === 'tie') {
        winningMessage.textContent = "It's A Tie!";
    } else if (winner===null) {console.log("something");
        winningMessage.textContent = `Player ${PLAYERS[turn]}'s Turn`;
    } else { 
        winningMessage.textContent = `Player ${PLAYERS[winner]} Wins!`;
    }
};

function renderBtns() {
    forfeitBtn.disabled = !winner;
    playAgainBtn.disabled = winner;
};

// function renderScoreBoard() {
//     document.querySelector('.scoreOne').textContent = xScore;
//     document.querySelector('.scoreTwo').textContent = oScore;
//     // set i=findWinner?
//     for (let i = 0; i >= 3; i++) {
//         if (xScore ===3) {
//             xScore += 1 || end game;
//         } else if (oScore = findWinner) {
//             oScore += 1 || end game;
//         } renderScoreBoard();
//         if (xScore === 3) {
//         game over && display winningMessage;

//         }
//         else if (oScore === 3) {
//         game over && display winningMessage;
//         }
//     }


// };
// cache the elements
// add to initial function 

// use win variable 
// ---------------------------------------------------------------


// // best three of 5 freq counter 
// loop with counter 
//     for (let i = 0; i>1; i++){
//     } 
//     repeat until i>=3 
//     then findWinner();

// for (let winner = 0; winner <= 3; i++) {
// if (winner === 1) {
//     player1wins++;
// } else {
//     player2wins++
// }
