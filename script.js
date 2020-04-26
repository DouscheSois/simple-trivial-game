const mainScreen = document.getElementById('main-screen');
const questionOne = document.getElementById('question-one');
const questionTwo = document.getElementById('question-two');
const questionThree = document.getElementById('question-three');
const questionFour = document.getElementById('question-four');
const questionFive = document.getElementById('question-five');
const questionSix = document.getElementById('question-six');
const questionSeven = document.getElementById('question-seven');
const questionEight = document.getElementById('question-eight');
const questionNine = document.getElementById('question-nine');
const questionTen = document.getElementById('question-ten');
const questionEleven = document.getElementById('question-eleven');
const win = document.getElementById('win');

const countDown = document.getElementById('timer');

const secs = 15;

function display() {
  countDown.innerHTML = 'Time is ' + secs + ' seconds';
}

display();

function startGame() {
  mainScreen.style.display = 'none';
  questionOne.style.display = 'block';
  timer();
}

function timer() {
  let secs = 15;
  let timer = setInterval(function() {
    secs--;
    console.log(secs);
    countDown.innerHTML = `You have ${secs} seconds left`;

    if(secs < 1) {
      clearInterval(timer);
      countDown.innerHTML = `Time's Up!`;
      mainScreen.style.display = 'block';
      questionOne.style.display = 'none';
      questionTwo.style.display = 'none';
      questionThree.style.display = 'none';
      questionFour.style.display = 'none';
      questionFive.style.display = 'none';
      questionSix.style.display = 'none';
      questionSeven.style.display = 'none';
      questionEight.style.display = 'none';
      questionNine.style.display = 'none';
      questionTen.style.display = 'none';
      questionEleven.style.display = 'none';
      win.style.display = 'none';
    }
  }, 1000);
}

document.addEventListener('click', function(event) {
  if(!event.target.matches('#right-answer')) {
    return;
  } else {
    event.preventDefault();
    questionOne.style.display = 'none';
    questionTwo.style.display = 'block';
  }
}, false);

document.addEventListener('click', function(event) {
  if(!event.target.matches('#right-answer-two')) {
    return;
  } else {
    event.preventDefault();
    questionTwo.style.display = 'none';
    questionThree.style.display = 'block';
  }
}, false)

document.addEventListener('click', function(event) {
  if(!event.target.matches('#right-answer-three')) {
    return;
  } else {
    event.preventDefault();
    questionThree.style.display = 'none';
    questionFour.style.display = 'block';
  }
}, false)

document.addEventListener('click', function(event) {
  if(!event.target.matches('#right-answer-four')) {
    return;
  } else {
    event.preventDefault();
    questionFour.style.display = 'none';
    questionFive.style.display = 'block';
  }
}, false)

document.addEventListener('click', function(event) {
  if(!event.target.matches('#right-answer-five')) {
    return;
  } else {
    event.preventDefault();
    questionFive.style.display = 'none';
    questionSix.style.display = 'block';
  }
}, false)

document.addEventListener('click', function(event) {
  if(!event.target.matches('#right-answer-six')) {
    return;
  } else {
    event.preventDefault();
    questionSix.style.display = 'none';
    questionSeven.style.display = 'block';
  }
}, false)

document.addEventListener('click', function(event) {
  if(!event.target.matches('#right-answer-seven')) {
    return;
  } else {
    event.preventDefault();
    questionSeven.style.display = 'none';
    questionEight.style.display = 'block';
  }
}, false)

document.addEventListener('click', function(event) {
  if(!event.target.matches('#right-answer-eight')) {
    return;
  } else {
    event.preventDefault();
    questionEight.style.display = 'none';
    questionNine.style.display = 'block';
  }
}, false)

document.addEventListener('click', function(event) {
  if(!event.target.matches('#right-answer-nine')) {
    return;
  } else {
    event.preventDefault();
    questionNine.style.display = 'none';
    questionTen.style.display = 'block';
  }
}, false)

document.addEventListener('click', function(event) {
  if(!event.target.matches('#right-answer-ten')) {
    return;
  } else {
    event.preventDefault();
    questionTen.style.display = 'none';
    questionEleven.style.display = 'block';
  }
}, false)

document.addEventListener('click', function(event) {
  if(!event.target.matches('#right-answer-eleven')) {
    return;
  } else {
    event.preventDefault();
    questionEleven.style.display = 'none';
    win.style.display = 'block';
  }
}, false)
