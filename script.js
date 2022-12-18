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

