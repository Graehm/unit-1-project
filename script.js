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


	// /*----- cached elements  -----*/
const winMessage = document.querySelector('h1');
const scoring = document.querySelector;

// scoreBox > score message;
// the board;
// the two buttons;

	// /*----- event listeners -----*/
// for button: addEventListener to start new game

// if (in game, and clicked) then display innerText: "Forfeit Game?"
// else{ await winnder and InnerHTML play again}

	// /*----- functions -----*/