/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore, activePlayer, gamePlaying, saveScore;

init();

//if we click on roll dice button
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying){
        //1. roll dice and display dice
        var randomNumber = Math.floor(Math.random() * 6) + 1;
        saveScore.push(randomNumber);
        document.querySelector('.dice').style.display = 'block'
        document.querySelector('.dice').src = 'dice-'+randomNumber+'.png';
    
        //2. if not 1 add score, change player and make all value 0
        if (saveScore[1],saveScore[0] !== 6) {
            roundScore += randomNumber;
            document.querySelector('#current-'+activePlayer).textContent = roundScore;
        } else {
            // Next Player
            nextPlayer();
        }
    }
});



document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying){
        //1. Add score to player score
        score[activePlayer] += roundScore;
        document.querySelector('#score-'+activePlayer).textContent = score[activePlayer];
    
        //3. Who is winnes?
        if (score[activePlayer] >= 30) {
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('#name-'+activePlayer).textContent = 'WINNER!';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init)



function nextPlayer() {
    activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('.dice').style.display = 'none';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

function init() {
    score = [0,0];
    roundScore = 0;
    saveScore = [0,0];
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;

    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');

    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';

}