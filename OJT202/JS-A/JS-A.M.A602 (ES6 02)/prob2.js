function fibonacci(n, memo = new Map()) {
    if (n <= 1) return 1;
  
    if (memo.has(n)) {
      return memo.get(n);
    }
  
    const result = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    memo.set(n, result);
  
    return result;
  }