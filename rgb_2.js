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
var easy = document.querySelector('#easy');
var hard = document.querySelector('#hard');
var menuColor;
var answer;
var statsArr = [];
var correctAnswers = 0;
var totalAnswers = 0;
var difficulty = 6;


function reset(num) {
    var colors = randColor(num);
    for (var i = 0; i < squares.length; i++) {
        if (i < num) {
        squares[i].style.visibility = 'visible';
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener('click', checkAnswer);
    } else {
        squares[i].style.visibility = 'hidden';
        squares[i].style.backgroundColor = '#232323';
    }
    }
    var pickedColor = colors[Math.floor(Math.random() * colors.length)];
    colorHeader.textContent = pickedColor;
    return answer = pickedColor;
}

function randColor(num) {
    var colors = [];
    for (var i = 0; i < num; i++) {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        colors.push('rgb(' + x + ', ' + y + ', ' + z + ')');
    }
    return colors;
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
        setTimeout(function() {
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
        for (var i = 0; i < difficulty; i++) {
            squares[i].style.backgroundColor = answer;
            squares[i].classList.add('correct');
        }
    }

    function triggerNewColor() {
        setTimeout(function() {
            resetSquares();
            reset(difficulty);
        }, 1000);
    }

    function quickNewColor() {
        setTimeout(function() {
            resetSquares();
            reset(difficulty);
        }, 200);
    }

    function resetSquares() {
        for (var i = 0; i < squares.length; i++) {
            squares[i].classList.remove('correct');
            squares[i].classList.remove('topSquare');
            squares[i].visibility = 'visible';
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

    resetStats.addEventListener('mouseover', buttonHover);
    resetStats.addEventListener('mouseout', buttonHover);
    resetStats.addEventListener('click', resetScore);

    easy.addEventListener('click', setDifficultyEasy);
    easy.addEventListener('mouseover', buttonHover);
    easy.addEventListener('mouseout', buttonHover);

    function setDifficultyEasy() {
        reset(3);
        easy.style.backgroundColor = 'black';
        hard.style.backgroundColor = 'white';
        return difficulty = 3;
    }

    hard.addEventListener('click', setDifficultyHard);
    hard.addEventListener('mouseover', buttonHover);
    hard.addEventListener('mouseout', buttonHover);

    function setDifficultyHard() {
        reset(6);
        easy.style.backgroundColor = 'white';
        hard.style.backgroundColor = 'black';
        return difficulty = 6;
    }

    reset(6);
