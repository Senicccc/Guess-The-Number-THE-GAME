alert('This web is meant to be viewed in landscape mode or desktop mode.')

var lives = 3;

function startGame()
{
var num = parseInt(prompt('Enter a number between 1-10'));
if (isNaN(num)) {
    alert('Thanks for playing')
    return;
}
var com = Math.random();


if (com < 0.10) {
    com = 1;
} else if (com < 0.20) {
    com = 2;
} else if (com < 0.30) {
    com = 3;
} else if (com < 0.40) {
    com = 4;
} else if (com < 0.50) {
    com = 5;
} else if (com < 0.60) {
    com = 6;
} else if (com < 0.70) {
    com = 7;
} else if (com < 0.80) {
    com = 8;
} else if (com < 0.90) {
    com = 9;
} else {
    com = 10;
}




var hasil = '';
    if (num == com) {
        hasil = 'You guessed the RIGHT number, congratulations! ';
    } else {
        lives--;
        if (lives > 0) {
            if (confirm('WRONG NUMBER, try again! (' + lives + ' lives left)\nWanna try again?')) {
                startGame();
                return;
            }
        } else {
            hasil = 'You\'ve run out of lives. The correct number was ' + com + '.';
        }
    }
    alert('Player\'s pick: ' + num + '\n' + 'Computer\'s pick: ' + com + '\n' + hasil);
    alert('Thanks for playing!');

}

startGame();
