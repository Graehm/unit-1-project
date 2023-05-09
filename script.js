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
boardTiles.addEventListener('click', newGame);
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


function newGame(){

}
//render it all to DOM with embedded executer function 
function render() {
    tilePL.forEach(function(tileSG, idx) {
        tileSG.textContent = PLAYERS[board[idx]];
    })
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




// //render winning message
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
// //try to display in-game message and init title of X, make your move! 
// // function h1Message(preGame, endGame) {
// //     if (board === null) {
// //         // dispay "X, Make Your Move!";
// //     else if (board !== null) {
// //         display ''
// //     else display winningMessage;
// //         }x
// //     }
// // }

// // handle player move -- use extraction to grab idx of a sq
// // ---Q: i feel like im missing something important that makes 
// function playersMove(choice) {
//     const idx = parseInt(choice.target.id.replace('sq-', ''));
//     if (board[idx] !== null)
//         return;
//     else if (turn, 'click') {
//         turn *= -1;
//         winner = findWinner();
//         render();
//     }
// }



// //handle computer move
// //-----randomized function looking for sq values of null to choose randomly until winner combo or tie game (no more null tiles)
// function computersMove(turn) { };
// //code to computers turn with randomized function

// //   else if (turn) {
// //     turn *= -1;
// //     winner = findWinner();
// //     render();
// // }


// // findWinner functions (horiz, vertical and diag)
// function findWinner() {
//     for (let i = 0; i < winningCombos.length; i++) {
//         if (Math.abs(board[0] + board[1] + board[2]) === 3)
//             return board[0];
//         if (Math.abs(board[3] + board[4] + board[5]) === 3)
//             return board[3];
//         if (Math.abs(board[6] + board[7] + board[8]) === 3)
//             return board[6];
//         if (Math.abs(board[0] + board[3] + board[6]) === 3)
//             return board[0];
//         if (Math.abs(board[1] + board[4] + board[7]) === 3)
//             return board[1];
//         if (Math.abs(board[2] + board[5] + board[8]) === 3)
//             return board[2];
//         if (Math.abs(board[0] + board[4] + board[8]) === 3)
//             return board[0];
//         if (Math.abs(board[2] + board[4] + board[6]) === 3)
//             return board[2];
//     } if (board.includes('')) return '';
//     return 'tie';
// }

// // best three of 5 freq counter 

// // render controls (btns)
// function controlBtns() {

// } 
