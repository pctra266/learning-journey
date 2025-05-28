class MultiChoiceQuestion extends Question {
  constructor(q, index) {
    super(q, index);
  }

  // Problem 2: Implement code here
  render() {
    const answers = Object.keys(this.answers).map((letter) => {
      return `
        <label>
          <input type="checkbox" name="question-${this.index}" value="${letter}">
        ${letter} : ${this.answers[letter]}
        </label>`;
    });

    return `
      <div class="slide">
        <div class="question">${this.question}</div>
        <div class="answers"> ${answers.join('')}</div>
      </div>`;
  }
}
