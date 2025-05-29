(function () {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
})();
// result: 1 4 3 2

// call stack: 1 -> s2 -> s3 -> 4
// process: 1(log) ->s2(webapi) ->s3(webapi) ->4(log)
// call stack: 3 (log)
// call stack after 1s: 2(log)
