const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correct: "Paris"
    },
    {
      question: "Which language is used for web development?",
      options: ["Python", "C++", "JavaScript", "Java"],
      correct: "JavaScript"
    },
    {
      question: "What does HTML stand for?",
      options: [
        "HyperText Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks Text Markup Language",
        "Hyper Tool Multi Language"
      ],
      correct: "HyperText Markup Language"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const quizQuestionEl = document.getElementById('quiz-question');
  const quizOptionsEl = document.getElementById('quiz-options');
  const nextBtn = document.getElementById('next-btn');
  const scoreEl = document.getElementById('score');
  
  function loadQuiz() {
    const currentQuizData = quizData[currentQuestionIndex];
    quizQuestionEl.innerText = currentQuizData.question;
  
    quizOptionsEl.innerHTML = '';
    currentQuizData.options.forEach(option => {
      const button = document.createElement('button');
      button.innerText = option;
      button.onclick = () => selectOption(option);
      quizOptionsEl.appendChild(button);
    });
  }
  
  function selectOption(selectedOption) {
    const currentQuizData = quizData[currentQuestionIndex];
    if (selectedOption === currentQuizData.correct) {
      score++;
    }
    nextBtn.disabled = false;
  }
  
  nextBtn.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuiz();
    } else {
      quizQuestionEl.innerText = 'Quiz Completed!';
      quizOptionsEl.innerHTML = '';
      nextBtn.style.display = 'none';
      scoreEl.innerText = `Your score: ${score}/${quizData.length}`;
    }
    nextBtn.disabled = true;
  };
  
  loadQuiz();
  nextBtn.disabled = true;
  
  let timeLeft = 30; // 30 seconds per question
  let timerInterval;
  
  function startTimer() {
    timeLeft = 30;
    timerInterval = setInterval(() => {
      document.getElementById('timer').innerText = `Time Left: ${timeLeft}s`;
      timeLeft--;
      if (timeLeft < 0) {
        clearInterval(timerInterval);
        endQuiz();
      }
    }, 1000);
  }
  
  function loadQuiz() {
    const currentQuizData = quizData[currentQuestionIndex];
    quizQuestionEl.innerText = currentQuizData.question;
    quizOptionsEl.innerHTML = '';
    currentQuizData.options.forEach(option => {
      const button = document.createElement('button');
      button.innerText = option;
      button.onclick = () => selectOption(option);
      quizOptionsEl.appendChild(button);
    });
    startTimer();  // Start timer for each question
  }
  
  function endQuiz() {
    quizQuestionEl.innerText = 'Time’s up!';
    quizOptionsEl.innerHTML = '';
    nextBtn.style.display = 'none';
    scoreEl.innerText = `Your score: ${score}/${quizData.length}`;
  }
  
  nextBtn.onclick = () => {
    clearInterval(timerInterval);  // Clear the timer when moving to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuiz();
    } else {
      endQuiz();
    }
  };
  