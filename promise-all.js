/*
Write a function that works the same as Promise.all
From MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
The Promise.all() method returns a single Promise that resolves when all of the
promises passed as an iterable have resolved or when the iterable contains no
promises. It rejects with the reason of the first promise that rejects.

Hint:
use the Promise constructor. The Promise constructor takes in two arguments:
"resolve" and "reject". Calling "resolve" on a value will complete the
value. Calling "reject" on a value will error-out with the value.

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
for info on the Promise constructor.

*/
const promiseAll = promises => {
    return new Promise((resolve, reject) => {
        const results = [];
        let completedCount = 0;
    
        if (promises.length === 0) {
          resolve(results);
          return;
        }
        
    promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then(result => {
            results[index] = result;
            completedCount++;
  
            if (completedCount === promises.length) {
              resolve(results);
            }
          })
          .catch(reason => {
            reject(reason);
          });
      });
    });
}

module.exports = {promiseAll};

