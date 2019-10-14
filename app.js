/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent;

var scores, roundScore, activePlayer, gamePlaying, firstRoll, secondRoll,count;
gamePlaying=true;
count =0;
init();


document.querySelector('.btn-roll').addEventListener('click', function(){
	
	
	if(gamePlaying){
		
	
	// Anonymous Function
	// 1 Random Number
	var dice = Math.floor(Math.random()*6)+1;
	
	// 2 Display Result
	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';
	
	
	// 3 Update Score if rolled number was NOT 1
	if(dice !== 1){
		
		//add score
		roundScore += dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
		if(dice ===6){
			firstRoll = dice;
			count ++;
			if(firstRoll ===6 && count ==2){
				if(activePlayer===0){
					roundScore=0;
					activePlayer=1;
					document.querySelector('.player-0-panel').classList.remove('active');
					document.querySelector('.player-1-panel').classList.add('active');
					document.querySelector('#current-' + activePlayer).textContent = roundScore;
					document.querySelector('.dice').style.display = 'none';
					count=0;
					console.log(count);
					firstRoll=0;
				}else if (firstRoll ===6 && count ==2){
					roundScore=0;
					activePlayer=0;
					document.querySelector('.player-1-panel').classList.remove('active');
					document.querySelector('.player-0-panel').classList.add('active');
					document.querySelector('#current-' + activePlayer).textContent = roundScore;
					document.querySelector('.dice').style.display = 'none';
					count=0;
					firstRoll=0;
				}
			}
		}else{
			count = 0;
			
		}
		
	
	}else{
		
		if(activePlayer===0){
			roundScore=0;
			activePlayer=1;
			document.querySelector('.player-0-panel').classList.remove('active');
			document.querySelector('.player-1-panel').classList.add('active');
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
			document.querySelector('.dice').style.display = 'none';
		}else{
			roundScore=0;
			activePlayer=0;
			document.querySelector('.player-1-panel').classList.remove('active');
			document.querySelector('.player-0-panel').classList.add('active');
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
			sdocument.querySelector('.dice').style.display = 'none';

			
		}
		
	}
	}
});

document.querySelector('.btn-hold').addEventListener('click', function(){
	
		var funcVar= document.getElementById("Numb1").value;
	if (gamePlaying){
			if(scores[activePlayer]>funcVar){
			  document.querySelector('#name-'+ activePlayer).textContent = 'Winner';
			  document.querySelector('.dice').style.display = 'none';
			gamePlaying=false;
		}
		if(activePlayer===0){
			scores[0]+=roundScore;
			document.querySelector('#score-' + activePlayer).textContent = 	scores[0];
			roundScore=0;
			activePlayer=1;
			document.querySelector('.player-0-panel').classList.remove('active');
			document.querySelector('.player-1-panel').classList.add('active');
		
		if(scores[activePlayer]>funcVar){
			  document.querySelector('#name-'+ activePlayer).textContent = 'Winner';
			  document.querySelector('.dice').style.display = 'none';
			gamePlaying=false;
		}
		}else if( activePlayer===1){
			
			scores[1]+=roundScore;
				roundScore=0;
			document.querySelector('#score-' + activePlayer).textContent = 	scores[1];
			activePlayer=0;
			document.querySelector('.player-1-panel').classList.remove('active');
			document.querySelector('.player-0-panel').classList.add('active');
		if(scores[activePlayer]>funcVar){
			  document.querySelector('#name-'+ activePlayer).textContent = 'Winner';
			  document.querySelector('.dice').style.display = 'none';
			gamePlaying=false;
		}
		}
		
		
	}

});



document.querySelector('.btn-new').addEventListener('click', init);
	

function init(){
		 scores = [0,0];
		 roundScore = 0;
		 activePlayer= 0;
		document.querySelector('.dice').style.display = 'none';
		document.getElementById('score-0').textContent = '0';
		document.getElementById('score-1').textContent = '0';
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';
		document.querySelector('#name-0').textContent = "Player 1";
		document.querySelector('#name-1').textContent = "Player 2" ;
		gamePlaying=true;

}









