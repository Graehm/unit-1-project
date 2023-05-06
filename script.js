	// /*----- constants -----*/
const PLAYERS = {
    'null': 'black',
    '1': 'X',
    '-1': 'O'
}
const winningCombos =[
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
let turn = null; 
let winner = null;
let board =[];
	
    // /*----- cached elements  -----*/
// for winning message
const winMessage = document.querySelector('h1');
// to update score board --// how to select the two elements in flexbox. 
const scoring = document.querySelector('#box > .scoreBox');
// quite game
const forfeitBtn = document.querySelector('.quit');
// play again
const playAgainBtn = document.querySelector('.play');
// for clickable board
const boardTiles = [...document.querySelectorAll('#board > div')];



	// /*----- event listeners -----*/
document.getElementById('#board').addEventListener('click', move);
playAgainBtn.addEventListener('click', init);
forfeitBtn.addEventListener('click', init);



	// /*----- functions -----*/
function init() {
    turn = 1;
    winner = null;
    board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    render();
}

//     function move() {
//     make move
// }
