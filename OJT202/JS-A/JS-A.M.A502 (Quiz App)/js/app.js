class App {
  constructor(questions) {
    this.questions = questions.map(
      (q, index) => {
        if(q.multi){
          return new MultiChoiceQuestion(q,index);
        }else{
          return new SingleChoiceQuestion(q, index);
        }
        
      }
    );

    this.quizContainer = document.getElementById('quiz');
    this.resultsContainer = document.getElementById('results');
    this.submitButton = document.getElementById('submit');
    this.previousButton = document.getElementById('previous');
    this.nextButton = document.getElementById('next');

    this.submitButton.addEventListener('click', this.showResults.bind(this));
    this.previousButton.addEventListener('click', this.showPreviousSlide.bind(this));
    this.nextButton.addEventListener('click', this.showNextSlide.bind(this));

    this.currentSlide = 0;
  }

  buildQuiz() {
    const output = this.questions.map((currentQuestion) =>
      currentQuestion.render()
    );

    this.quizContainer.innerHTML = output.join('');
  }

  showResults() {
    const answerContainers = this.quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    this.questions.forEach((currentQuestion, questionNumber) => {
      console.log('currentQuestion: '+ currentQuestion); // obj
      console.log('questionNumber: '+ questionNumber); // 0,1,2,3

      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question-${questionNumber}]:checked`;
      const userAnswer = answerContainer.querySelector(selector) || {};

      if (userAnswer.value === currentQuestion.correctAnswer) {
        numCorrect++;
        answerContainers[questionNumber].style.color = 'lightgreen';
      } else {
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    this.resultsContainer.innerHTML = `${numCorrect} out of ${this.questions.length}`;
  }

  showSlide(n) {
    if (this.slides === undefined) {
      this.slides = document.querySelectorAll('.slide');
    }

    this.slides[this.currentSlide].classList.remove('active-slide');
    this.slides[n].classList.add('active-slide');
    this.currentSlide = n;

    if (this.currentSlide === 0) {
      this.previousButton.style.display = 'none';
    } else {
      this.previousButton.style.display = 'inline-block';
    }

    if (this.currentSlide === this.slides.length - 1) {
      this.nextButton.style.display = 'none';
      this.submitButton.style.display = 'inline-block';
    } else {
      this.nextButton.style.display = 'inline-block';
      this.submitButton.style.display = 'none';
    }
  }
 

  showNextSlide() {
    console.log(this);
    this.showSlide(this.currentSlide + 1);
  }
  showPreviousSlide() {
    console.log(this);
    this.showSlide(this.currentSlide -1);
  }
  

  start() {
    this.buildQuiz();
    this.showSlide(0);
  }
}
