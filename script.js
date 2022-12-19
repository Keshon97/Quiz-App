const container = document.querySelector('#container');
const timer = document.querySelector('#timer');
const startButton = document.querySelector('#startButton');
const quizContainer = document.querySelector('#quizContainer');

const quizQuestions = [
    {
    question: 'What is JavaScript called when using no frameworks or libraries?', 
    options: ['Bland JavaScript', 'Chocolate JavaScript', 'Vanilla JavaScript', 'Naked JavaScript'],
    answer: 'Vanilla JavaScript'
    },

    {
    question: 'What indicates the position of an array?', 
    options:['index', 'for loop', 'item', 'position'],        
    answer: 'index'
    },
    {
    question: 'Where should the <script> tag be placed in the html document?', 
    options:['Top of <body> ', 'Inside of <head>', 'Bottom of <body>','Outside of <body>'],
    answer: 'Bottom of <body>'
    },
    {
    question: 'When was JavaScript invented?', 
    options:['1997', '1991', '1987', '1995'],
    answer: '1995'
    }
];
console.log(quizQuestions);

var score = 0
var quizIndex = 0
var timerCount = 40
var interval = 0
var penaltyTime = 10
var list = document.createElement('ul');

//button function that begins quiz
startButton.addEventListener('click', () => {
    if (interval === 0) {
        interval = setInterval(() => {
            timerCount--;
            timer.textContent = 'Time Left: ' + timerCount;

            if (timerCount <= 0) {
                clearInterval(interval);
                timer.textContent = 'You ran out of time';
            }
        }, 1000);
    }
    startQuiz(quizIndex);
});

startQuiz = (quizIndex) => {
    quizContainer.innerHTML = '';
    list.innerHTML = '';
    for (var i = 0; i < quizQuestions.length; i++); {
        var displayQuestion = quizQuestions[quizIndex].question;
        var userOptions = quizQuestions[quizIndex].options;
        quizContainer.textContent = displayQuestion;
    }
    userOptions.forEach((newItem) => {
        var questionList = document.createElement('li');
        questionList.textContent = newItem;
        quizContainer.appendChild(ulCreate);
        list.appendChild(questionList);
        questionList.addEventListener('click', (getAnswer));
    })
};

