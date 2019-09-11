/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game



var player1 = prompt('Player 1 name', 'Player 1');
var player2 = prompt('Player 2 name', 'Player 2');
*/

var player1 = 'player1';
var player2 = 'player2';


// window.print()
var scoreCard, activePlayer, totalScore, gamePlaying;
init();

document.querySelector('#name-0').textContent = player1;
document.querySelector('#name-1').textContent = player2;

document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0'
document.getElementById('score-1').textContent = '0'
document.getElementById('current-0').textContent = '0'
document.getElementById('current-1').textContent = '0'

document.querySelector('.btn-roll').addEventListener('click', function(){
    //1. Get the number
    if(gamePlaying){
        var dice = Math.floor((Math.random()*6)+1);

        //2. Display Dice

        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-'+dice+'.png'

        //3. Update Score
        if(dice !== 1){
            scoreCard += dice;
            document.querySelector('#current-'+activePlayer).textContent = scoreCard;
        }else{
            // document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');

            scoreCard = 0;
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    totalScore = Number(document.getElementById('score-'+activePlayer).textContent)
    console.log(totalScore);
    totalScore += scoreCard;
    document.getElementById('score-'+activePlayer).textContent = totalScore;
    totalScore = scoreCard = 0;
    if(document.getElementById('score-'+activePlayer).textContent >= 100){
        document.getElementById('name-'+activePlayer).textContent = 'WINNER!';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        document.querySelector('.dice').style.display = 'none';
        gamePlaying = false;
    }
    else{
        nextPlayer();
    }
});

// document.querySelector('.btn-new').addEventListener('click', function(){
//     location.reload();
// })

document.querySelector('.btn-new').addEventListener('click',init)

function init(){
    scoreCard = 0;
    activePlayer = 0;
    totalScore = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('name-0').textContent = player1;
    document.getElementById('name-1').textContent = player2;
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}


function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}
