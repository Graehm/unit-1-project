// /*----- constants -----*/
const PLAYERS = {
    'null': '',
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
playAgainBtn.addEventListener('click', init);
forfeitBtn.addEventListener('click', init);

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
    // if(winner || board[tileNumber]) return;
    board[tileNumber] = turn;
    turn *= -1;
    winner = findWinner();
    winningMessage.innerText = "Game On Bud"
    render();
}


// //handle computer move
// //-----randomized function looking for sq values of null to choose randomly until winner combo or tie game (no more null tiles)
// function computersMove(turn) { };
// //code to computers turn with randomized function

// //   else if (turn) {
// //     turn *= -1;
// //     winner = findWinner();
// //     render();
// // }



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
    if (board.includes(null)) return '';
    return 'tie';
}

// render controls (btns)
// function controlBtns() {
// if (!winner) {
//     playAgainBtn.disabled
//         forfeit abled. 
//     } else (){
//     if (winner) {
//         playAgainBtn
//     }
// }



//render it all to DOM with embedded executer function 
function render() {
    tilePL.forEach(function (tileSG, idx) {
        tileSG.textContent = PLAYERS[board[idx]];
    });
    if (!winner) {
        winningMessage.textContent = `Player ${PLAYERS[turn]}'s turn`;
    } else if (winner === 'tie') {
        winningMessage.textContent = "It's A Tie!";
    } else {
        winningMessage.textContent = `Player ${PLAYERS[winner]} Wins!`;
    }
};

// //render winning message DIFFERENT METHOD TO ABOVE --SEP FUNCTIONS 
// //---Q: how to write that computer or player are winners?
// function winningMessage() {
//     if (findWinner === 'tie') {
//         h6.innerHTML = "Tie Game!";
//     } else if (findWinner === player) {
//         //player > computer;
//         h6.innerHTML = "Man beats Machine!";
//     } else if (findWinner === computer) {
//         //computer > player;
//         h6.innerHTML = "The Machine Prevails";
//     }
// }


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

