(function() {
  const myQuestions = [
    {
      question: 'Javascript is _________ language.',
      answers: {
        a: 'Programming',
        b: 'Application',
        c: 'None of These',
        d: 'Scripting'
      },
      multi: false,
      correctAnswer: 'a'
    },
    {
      question:
        'Which of the following is a valid type of function javascript supports?',
      answers: {
        a: 'named function',
        b: 'anonymous function',
        c: 'both of the above',
        d: 'none of the above'
      },
      multi: false,
      correctAnswer: 'c'
    },
    {
      question:
        'Which built-in method returns the index within the calling String object of the first occurrence of the specified value?',
      answers: {
        a: 'getIndex()',
        b: 'location()',
        c: 'indexOf()',
        d: 'getLocation()'
      },
      multi: false,
      correctAnswer: 'c'
    },
    {
      question: 'Which one of the following is valid data type of JavaScript',
      answers: {
        a: 'number',
        b: 'void',
        c: 'boolean',
        d: 'nothing'
      },
      multi: true,
      correctAnswer: 'ab'
    }
    
  ];

  const app = new App(myQuestions);
  app.start();
})();
