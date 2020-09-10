/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore, activePlayer, gamePlaying, saveScore, winningScore;
var name0 ="Player 1",name1 = "Player 2";
name0 = prompt("Please enter Player 1 name ");
name1 = prompt("Please enter Player 2 name ");

init();

//if we click on roll dice button
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying){
        //1. roll dice and display dice
        var randomNumber = Math.floor(Math.random() * 6) + 1;
        saveScore.push(randomNumber);
        saveScore.shift();
        document.querySelector('.dice').style.display = 'block'
        document.querySelector('.dice').src = 'dice-'+randomNumber+'.png';


        //2. if not 1 add score, change player and make all value 0
        // if (!(saveScore[0] == 6 && saveScore[1] == 6)) {
        if (saveScore[1] != 1) {
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
        if (score[activePlayer] >= winningScore) {
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
    activePlayer = 1-activePlayer;
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

    document.querySelector('#name-0').textContent = name0;
    document.querySelector('#name-1').textContent = name1;

    //name0 = document.getElementById("pname-0").value;
    //name1 = document.getElementById("pname-1").value;

    document.querySelector('#wscore').value = '0';
}

//Winning score set function
function wfunction() {
    winningScore = document.getElementById("wscore").value;
        if (winningScore == "" || isNaN(winningScore)) {
            alert("Score must be filled out");
            return false;
        }
    init();
    //document.getElementById('display-wscore').innerHTML = winningScore;
    return winningScore;
}

