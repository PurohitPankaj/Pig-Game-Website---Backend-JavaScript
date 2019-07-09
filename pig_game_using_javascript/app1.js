/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var gamePlay,scores,activePlayer,roundScore,x=0,y=0;
init();

document.querySelector('.btn-roll').addEventListener('click',function(){
	if(gamePlay){
		//random Numbers
    var dice = Math.floor(Math.random() * 6) + 1;
	x=dice;
	//Display Dice
	var diceDom=document.querySelector('.dice');
	diceDom.style.display='block';
	diceDom.src = 'dice-'+ dice+ '.png';
	if(x === 6 && y === 6){
		scores[activePlayer]=0;
		document.querySelector('#score-'+activePlayer).textContent= scores[activePlayer];
		console.log(x,y);
		nextPlayer();
	}
	//Updating values
	if(dice!==1){
		//Add Score to Current Player 
		y=dice;
		roundScore+= dice;
		document.querySelector('#current-'+activePlayer).textContent= roundScore;
	}
	else{
		//Add Score to Next Player 
		nextPlayer();
	
	}
  }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
	if(gamePlay){
	scores[activePlayer] += roundScore;
	document.querySelector('#score-'+ activePlayer).textContent=scores[activePlayer];
	if (scores[activePlayer] >= 20)
	{
		document.querySelector('#name-'+activePlayer).textContent='Winner!';
		document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
		document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
		document.querySelector('.dice').style.display='none';
		gamePlay=false;
	}
	else{
		nextPlayer();
	}
  }
});

document.querySelector('.btn-new').addEventListener('click',function(){
	init();
});

function init(){
	scores=[0,0];
activePlayer=0;
roundScore=0;
gamePlay=true;
document.getElementById('current-0').textContent= 0;
document.getElementById('current-1').textContent= 0;

document.querySelector('#score-0').textContent= 0;
document.querySelector('#score-1').textContent= 0;

	document.querySelector('#name-0').textContent= 'player 1';
	document.querySelector('#name-1').textContent= 'player 2';
	
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
	

	document.querySelector('.dice').style.display='none';

}

function nextPlayer(){
	//Add Score to Next Player 
		activePlayer === 0 ?activePlayer=1: activePlayer=0;
	    roundScore=0;
		document.querySelector('.dice').style.display='none';
		
		document.querySelector('#current-1').textContent= 0;
		document.querySelector('#current-0').textContent= 0;
	    
		document.querySelector('.player-1-panel').classList.toggle('active');
		document.querySelector('.player-0-panel').classList.toggle('active');
		
		document.querySelector('#current-'+activePlayer).textContent= roundScore;

}