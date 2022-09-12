var startBtnEl = document.getElementById('start')
console.log(startBtnEl)
var backBtnEl = document.getElementById('go-back')
var timerEl = document.getElementById('timer')
var listHighScoreEl = document.getElementById("high-score-list")
var starterContainer = document.getElementById('start-container')
var questionContainer = document.getElementById('question-container')
var questionEl = document.getElementById('question')
var answerBtnEl = document.getElementById('answer')
var initialForm = document.getElementById('initials-form')
var wrong = document.getElementById('wrong')
var correct = document.getElementById('correct')
var questionIndex;
var timer;
var timerCount;
var highScore = 0;
var questions = [
    {
        q: 'Arrays in Javascript can be used to store __________.',
        a: '4. all of the above',
        // choices = [choice: '1. numbers', choice: '2. booleans', choice: '3. strings', choice: '4. all of the above']
        choices: ['1. numbers',  '2. booleans',  '3. strings',  '4. all of the above']
    },
    {
        q: 'Commonly used data types DO NOT include:',
        a: '3. alerts',
        // choice1: '1. strings' ,  choice2: '2. booleans' ,  choice3: '3. alerts' ,  choice4: '4. numbers' 
        choices: ['1. strings' ,   '2. booleans' ,   '3. alerts' ,   '4. numbers']
    },
    {
        q: 'The condition in an if/else statement is enclosed within __________.',
        a: '3. parenthesis',
        // choice1: '1. quotes', choice2: '2. curly brackets',  choice3: '3. parenthesis',  choice4: '4. square brackets'
        choices: ['1. quotes',  '2. curly brackets',   '3. parenthesis',  '4. square brackets']
    },
    {
        q: 'String values must be enclosed within __________ when being assigned to variables.',
        a: '3. quotes',
    //    choice1: '1. commas',  choice2: '2. curly brackets',  choice3: '3. quotes', choice4: '4. parenthesis'
        choices: ['1. commas',  '2. curly brackets',  '3. quotes', '4. parenthesis']
    },
    {
        q: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        a: '4. console.log',
        // choice1: '1. JavaScript', choice2: '2. terminal/bash', choice3: '3. for loops', choice4: '4. console.log'
        choices: ['1. JavaScript',  '2. terminal/bash',  '3. for loops',  '4. console.log']
    },
];
// console.log(questions[0].q)

function startGame() {
    // hide start button once game starts
    starterContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    timerCount = 30;
    questionIndex = 0;
    startTimer()
    displayQuestions()
    // console.log("start")
}

function displayQuestions() {
    console.log(questionIndex)
    questionEl.textContent = questions[questionIndex].q;

    var optionOne = document.createElement('button');
    optionOne.setAttribute('class', 'ansOne');
    optionOne.textContent = questions[questionIndex].choices[0];
    answerBtnEl.appendChild(optionOne)

    var optionTwo = document.createElement('button');
    optionTwo.setAttribute('class', 'ansTwo');
    optionTwo.textContent = questions[questionIndex].choices[1];
    answerBtnEl.appendChild(optionTwo)

    var optionThree = document.createElement('button');
    optionThree.setAttribute('class', 'ansThree');
    optionThree.textContent = questions[questionIndex].choices[2];
    answerBtnEl.appendChild(optionThree)

    var optionFour = document.createElement('button');
    optionFour.setAttribute('class', 'ansFour');
    optionFour.textContent = questions[questionIndex].choices[3];
    answerBtnEl.appendChild(optionFour)


    optionOne.onclick = submitAnswer
    optionTwo.onclick = submitAnswer
    optionThree.onclick = submitAnswer
    optionFour.onclick = submitAnswer
}

function startTimer() {
    // sets timer
    timer = setInterval(function () {
        timerCount--;
        timerEl.textContent = timerCount;
        // if (timerCount >= 0) {
        //     if (isOver && timerCount > 0) {
        //         clearInterval(timer);
        //         gameOver();
        //     }
        // }
        // if timer runs out game ends
        if (timerCount === 0) {
            clearInterval(timer);
            gameOver();

        }
    }, 1000)
}

function submitAnswer(event) {
    
    console.log(questionIndex)
    if (questions[questionIndex].a === event.target.innerText) {
        alert('correct')
        // push to an array, parseint
        timerCount += 7
        console.log(highScore)
        

    }
    else {
        alert('wrong')
        timerCount -= 3
    }
   questionIndex ++  
   displayQuestions()
//    for (let i =0; answerBtnEl.length; i++) {
//     answerBtnEl[i].display='none';
//    }

   }
    

function gameOver() {
    // need to figure out how to get this to load when timer ends
    var initials = initialForm.value.trim()
    if (initials !== '') {

    highScore = JSON.parse(window.localStorage.getItem(highScore)) || []
    var newScore = {score: timer, initials: initials}
    highScore.push(newScore)
    localStorage.setItem('highScore', JSON.stringify(highScore))
    }

    // highScore.textContent = listHighScoreEl
    // localStorage.setItem("high-score", listHighScoreEl)
    // console.log(listHighScoreEl)
    console.log(highScore)

}
// how to get inital submission box and high score to show up when timer is done??

// back button when game is done to return to home page

// view high score page





//  event listeners
startBtnEl.addEventListener('click', startGame)

// initialsSubmit.addEventListener('submit', submitHighScore)

// viewHighScoreEl.addEventListener('click', listHighScores)

// backBtnEl.addEventListener('click', renderStartPage)

// clearScoresBtnEl.addEventListener('click', clearScores)