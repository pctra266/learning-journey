var index = 0;

var preButton = document.querySelector('#preQuestion');
var nextButton = document.querySelector('#nextQuestion');
var submitButton = document.querySelector('#submitForm');
var noteQuestion = document.querySelector('#note');
var finalScore = document.querySelector('#total-score');
var myQuestions = [
  {
    question: "Javascript is _________ language.",
    answers: {
      a: "Programming",
      b: "Application",
      c: "None of These",
      d: "Scripting",
    },
    multi: false,
    correctAnswer: "d",
  },
  {
    question:
      "Which of the following is a valid type of function javascript supports?",
    answers: {
      a: "named function",
      b: "anonymous function",
      c: "both of the above",
      d: "none of the above",
    },
    multi: false,
    correctAnswer: "c",
  },
  {
    question:
      "Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
    answers: {
      a: "getIndex()",
      b: "location()",
      c: "indexOf()",
      d: "getLocation()",
    },
    multi: false,
    correctAnswer: "c",
  },
  {
    question: "Which one of the following is valid data type of JavaScript",
    answers: {
      a: "number",
      b: "void",
      c: "boolean",
      d: "nothing",
    },
    multi: false,
    correctAnswer: "c",
  },
  {
    question: "Which of the following are JavaScript primitive data types?",
    answers: {
      a: "String",
      b: "Boolean",
      c: "Object",
      d: "Symbol"
    },
    multi: true,
    correctAnswer: ["a", "b", "d"]
  }
];
var userAnswers = new Array(myQuestions.length).fill(null);

function getNameQuestion(){
  return  "Question " + (index + 1) + " : " + myQuestions[index].question;
}

function showNameQuestion(){
  var question = document.querySelector(".question h2");
  question.textContent = getNameQuestion();
}

function clearAnswersForm() {
  const answersForm = document.querySelector("#answersForm");
  answersForm.innerHTML = "";
  return answersForm;
}

// 2. Kiểm tra xem user đã chọn key nào cho câu hiện tại hay chưa
function isChecked(key, questionObj) {
  const saved = userAnswers[index];
  if (questionObj.multi) {
    return Array.isArray(saved) && saved.indexOf(key) !== -1;
  } else {
    return saved === key;
  }
}

// 3. Lấy mảng các giá trị đã chọn (chỉ dùng khi multi = true)
function getCheckedValues(answersForm) {
  const checkedEls = answersForm.querySelectorAll('input[name="answer"]:checked');
  return Array.from(checkedEls).map(el => el.value);
}

// 4. Xử lý sự kiện change cho từng input
function attachChangeListener(inputEl, questionObj, answersForm) {
  inputEl.addEventListener("change", function(e) {
    if (questionObj.multi) {
      userAnswers[index] = getCheckedValues(answersForm);
    } else {
      userAnswers[index] = e.target.value;
    }
  });
}

// 5. Tạo thẻ <label> + <input> cho một đáp án (key, answerText)
function createAnswerLabel(key, answerText, questionObj, answersForm) {
  const label = document.createElement("label");
  label.style.display = "block";
  label.innerHTML = `
    <input
      type="${questionObj.multi ? 'checkbox' : 'radio'}"
      name="answer"
      value="${key}"
    >
    ${key}. ${answerText}
  `;
  
  const inputEl = label.querySelector('input[name="answer"]');

  // Khôi phục trạng thái checked nếu user đã chọn trước đó
  if (isChecked(key, questionObj)) {
    inputEl.checked = true;
  }

  // Gắn listener để lưu lựa chọn mỗi khi thay đổi
  attachChangeListener(inputEl, questionObj, answersForm);

  return label;
}

// 6. Hàm chính: hiển thị tất cả đáp án của câu hiện tại
function showAnswerQuestion() {
  const questionObj = myQuestions[index];
  const answersForm = clearAnswersForm();

  for (const key in questionObj.answers) {
    const answerText = questionObj.answers[key];
    const label = createAnswerLabel(key, answerText, questionObj, answersForm);
    answersForm.appendChild(label);
  }
}


function showNote(){
  noteQuestion.textContent =`${index + 1} out of ${myQuestions.length}`;
}

function toggleButton(){
  if(index === 0){
    preButton.style.display ='none';
  }else{
    preButton.style.display ='inline';
  }

  if(index === myQuestions.length-1){
    nextButton.style.display ='none';
    submitButton.style.display ='inline';
  }else{
    nextButton.style.display ='inline';
    submitButton.style.display ='none';
  }


}
function showQuestion() {
  showNameQuestion();
  showAnswerQuestion();
  showNote();
  toggleButton();
}

function showPreviousQuestion(){
  if(index > 0){
    index--;
    showQuestion();
  }else{
    console.log('no previous question');
  }
}

function showNextQuestion(){
  if(index < myQuestions.length-1 ){
    index++;
    showQuestion();
  }else{
    console.log('no next question');
  }
}
// Hàm kiểm tra đáp án multi-choice
function isMultiCorrect(userAns, correct) {
  return (
    Array.isArray(userAns) &&
    userAns.length === correct.length &&
    correct.every(val => userAns.includes(val))
  );
}

// Hàm kiểm tra đáp án single-choice
function isSingleCorrect(userAns, correct) {
  return userAns === correct;
}

// Tính tổng điểm
function calculateScore() {
  return myQuestions.reduce((sum, q, idx) => {
    const userAns = userAnswers[idx];
    const correct = q.correctAnswer;
    const isCorrect = q.multi
      ? isMultiCorrect(userAns, correct)
      : isSingleCorrect(userAns, correct);

    return sum + (isCorrect ? 1 : 0);
  }, 0);
}

function showScore(){
  var maxScore = myQuestions.length;
  finalScore.textContent = `Your score is: ${calculateScore()}/${maxScore} `;
  finalScore.style.color ='red';
  noteQuestion.style.display ='none';
}



preButton.addEventListener('click',function (){
  showPreviousQuestion();
})
nextButton.addEventListener('click',function (){
  showNextQuestion();
})
submitButton.addEventListener('click',function(){
  showScore();
})

// start here
showQuestion(index);
