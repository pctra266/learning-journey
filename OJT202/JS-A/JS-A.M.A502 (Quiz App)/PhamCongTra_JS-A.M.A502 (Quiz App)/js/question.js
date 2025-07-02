class Question {
  constructor(q, index) {
    this.question = q.question;
    this.answers = q.answers;
    this.correctAnswer = q.correctAnswer;
    this.index = index;
    this.multi = q.multi
  }

  render() {
    throw new Error('Subclass must override this method');
  }
}
