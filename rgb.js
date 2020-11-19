var squares = document.querySelectorAll('.square');
var colorHeader = document.querySelector('h1');
var headerBackground = document.querySelector('.header');
var userMessage = document.querySelector('#userMessage');
var userStats = document.querySelector('#userStats');
var bar = document.querySelector('#bar');
var border = document.getElementsByTagName('li');
var newColor = document.querySelector('#new');
var resetStats = document.querySelector('#userStatsContainer');
var button = document.querySelectorAll('button');
var ulContainer = document.querySelector('#ulContainer');
var menuColor;
var answer;
var statsArr = [];
var correctAnswers = 0;
var totalAnswers = 0;

function reset() {
    var colors = [
        randColor(),
        randColor(),
        randColor(),
        randColor(),
        randColor(),
        randColor(),
    ];
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener('click', checkAnswer);
    }
    var pickedColor = colors[Math.floor(Math.random() * 6)];
    colorHeader.textContent = pickedColor;
    return answer = pickedColor;
}

function randColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    return 'rgb(' + x + ', ' + y + ', ' + z + ')';
}

function checkAnswer() {
    if (colorHeader.textContent == this.style.backgroundColor) {
        this.classList.toggle('correct');
        this.classList.add('topSquare');
        userMessage.textContent = 'Correct!';
        correctAnswers++;
        totalAnswers++;
        updateStats();
        updateBackgrounds(this.style.backgroundColor);
        correctSquares();
        triggerNewColor();
        return menuColor = this.style.backgroundColor;
    } else if (this.style.backgroundColor == 'rgb(35, 35, 35)') {
        return;
    } else {
        this.style.backgroundColor = '#232323';
        userMessage.textContent = 'Try Again!';
        totalAnswers++;
        updateStats();
    }
}

function updateStats(clear) {
    var percent = Math.floor(correctAnswers / totalAnswers * 100);
    var i = correctAnswers;
    var j = totalAnswers;
    userStats.textContent = percent + '% (' + i + '/' + j + ')  ';
}

function updateBackgrounds(color) {
    setTimeout(function () {
        headerBackground.style.backgroundColor = color;
        bar.style.color = color;
        for (var i = 0; i < border.length; i++) {
            border[i].style.borderColor = color;
        }
        for (var j = 0; j < button.length; j++) {
            button[j].style.borderColor = color;
        }
        ulContainer.style.borderColor = color;
    }, 1000);
}

function correctSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = answer;
        squares[i].classList.add('correct');
    }
}

function triggerNewColor() {
    setTimeout(function () {
        resetSquares();
        reset();
    }, 1000);
}

function quickNewColor() {
    setTimeout(function () {
        resetSquares();
        reset();
    }, 200);
}

function resetSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].classList.remove('correct');
        squares[i].classList.remove('topSquare');
    }
}

function resetScore() {
    correctReset();
    totalReset();
    userStats.textContent = '0% (0/0) ';
}

function correctReset() {
    return correctAnswers = 0;
}

function totalReset() {
    return totalAnswers = 0;
}

function buttonHover() {
    this.classList.toggle('menuToggle');
}

var newButton = document.querySelector('#new');

newButton.addEventListener('mouseover', buttonHover);
newButton.addEventListener('mouseout', buttonHover);
newColor.addEventListener('click', quickNewColor);
resetStats.addEventListener('click', resetScore);
resetStats.addEventListener('mouseover', buttonHover);
resetStats.addEventListener('mouseout', buttonHover);

reset();
