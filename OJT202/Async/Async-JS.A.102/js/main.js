(function () {
  var app = angular.module('myApp', []);

  app.controller('demoCtrl', ['$scope', DemoController]);

  function getDataPromise(url) {
    return new Promise(function (resolve, reject) {
      $.get(url, function (data, status) {
        if (status === 'success') {
          resolve(data);
        }
        reject(new Error('Error while getting ' + url));
      });
    });
  }

  console.log('hi');

  const USER_API = 'https://jsonplaceholder.typicode.com/users';
  const POST_API = 'https://jsonplaceholder.typicode.com/posts?userId=';
  const COMMENT_API = 'https://jsonplaceholder.typicode.com/comments?postId='

  function DemoController($scope) {
    // Your Code Here
    // Callback-style
      $.get(USER_API, function (users) {
        console.log(users);
          //...
      });
    // Promise-style
      let allUsers;
      // getDataPromise(USER_API)
      //   .then(function (users) {
      //     //...
      //   })
      //   //...
    // Async/await-style
      // (async () => {
      //   try {
      //     //...use getDataPromise function 
      //   } catch (error) {
      //     console.log(error)
      //   }
      // })();
  }
})();
