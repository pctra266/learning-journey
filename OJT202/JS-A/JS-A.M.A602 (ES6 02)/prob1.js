var numbers = {
    from: 0,
    to: 100,
    step: 1,
  
    *[Symbol.iterator]() {
      for (let value = this.from; value <= this.to; value += this.step) {
        yield value;
      }
    }
  };    

  for (let num of numbers) {
    console.log(num);
  }
  
  var numbers2 = {
    from: 6,
    to: 30,
    step: 4,
  
    *[Symbol.iterator]() {
      for (let value = this.from; value <= this.to; value += this.step) {
        yield value;
      }
    }
  };
  
  for (let num of numbers2) {
    console.log(num);
  }
  