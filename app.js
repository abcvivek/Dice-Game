/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores,currentScore,currentPlayer,gamePlaying;

scores = [0,0];
currentScore = 0;
currentPlayer = 0;
gamePlaying = true;

document.getElementById('score-0').innerHTML = '0';
document.getElementById('score-1').innerHTML = '0';
document.querySelector('.current-score-0').innerHTML = '0';
document.querySelector('.current-score-1').innerHTML = '0';

document.querySelector('.dice').style.display = 'none';

document.querySelector('#roll-dice').addEventListener('click',rollDice);

document.getElementById('hold').addEventListener('click' ,hold);

document.querySelector('#new-game').addEventListener('click',newGame);

document.querySelector('.dice1').style.display = 'none';

document.querySelector('#roll-dice1').addEventListener('click',rollDice);

document.getElementById('hold1').addEventListener('click' ,hold);

document.querySelector('#new-game1').addEventListener('click',newGame);


function newGame() {

if(gamePlaying == false) {
scores = [0,0];
currentScore = 0;
currentPlayer = 0;

document.getElementById('score-0').innerHTML = '0';
document.getElementById('score-1').innerHTML = '0';
document.querySelector('.current-score-0').innerHTML = '0';
document.querySelector('.current-score-1').innerHTML = '0';

document.querySelector('.dice').style.display = 'none';
document.querySelector('.dice1').style.display = 'none';

document.querySelector('.player-0').innerHTML = '<strong>PLAYER 1</strong>';
document.querySelector('.player-1').innerHTML = '<strong>PLAYER 2</strong>';

document.querySelector('.player-0').classList.remove('active');
document.querySelector('.player-1').classList.remove('active');

document.querySelector('.player-0').classList.add('active')

gamePlaying = true;
}

}


function nextPlayer() {

	currentScore = 0;
    	document.querySelector('.current-score-' + currentPlayer).innerHTML = '0';
    	if(currentPlayer == 0)
		currentPlayer = 1;
	    else
		currentPlayer = 0;

	document.querySelector('.player-0').classList.toggle('active');
	document.querySelector('.player-1').classList.toggle('active');
      
}

function rollDice() {

if(gamePlaying) {
	
	var randomNumber = Math.floor(Math.random() * 6) + 1;
 
    if(randomNumber != 1) {
        currentScore = currentScore + randomNumber;
        document.querySelector('.current-score-' + currentPlayer).innerHTML = currentScore;
    }
    else {
    	
       nextPlayer();
    }

	var selectionObject = document.querySelector('.dice');

	selectionObject.style.display = 'block';
	selectionObject.src = 'dice-' + randomNumber + '.png';

    var selectionObject = document.querySelector('.dice1');

	selectionObject.style.display = 'block';
	selectionObject.src = 'dice-' + randomNumber + '.png';
}

};

function hold() {

	if(gamePlaying) {

	scores[currentPlayer] = scores[currentPlayer] + currentScore;

	document.getElementById('score-' + currentPlayer).innerHTML = scores[currentPlayer];

	document.querySelector('.current-score-' + currentPlayer).innerHTML = '0';

	if(scores[currentPlayer] >= 20) {
		document.querySelector('.player-name-' + currentPlayer + ' ' + 'h2' + ' ' + 'strong').innerHTML = 'WINNER';
		gamePlaying = false;
	}
	else
	{
		nextPlayer();
	}

	}
}






