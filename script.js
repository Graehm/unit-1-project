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
let turn; 
let winner;
let board =[];
	
    // /*----- cached elements  -----*/
const winMessage = document.querySelector('h1');
const scoring = document.querySelector('#box > .scoreBox');
// how to select the two elements in flexbox. 
const forfeitBtn = document.querySelector('.quit');
const playAgainBtn = document.querySelector('.play');
const boardTiles = [...document.querySelectorAll('#board > div')];

	// /*----- event listeners -----*/
document.getElementById('#board').addEventListener('click', move);
playAgainBtn.addEventListener('click', init);
forfeitBtn.addEventListener('click', init);

	// /*----- functions -----*/
function move = {
    make move
}
