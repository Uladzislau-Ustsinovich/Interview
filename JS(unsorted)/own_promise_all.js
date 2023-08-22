function PromiseAll(promises) {
  return new Promise((resolve) => {
    const promisesResult = [];
    let resolvedPromisesCounter = 0;

    promises.forEach((promise, index) => {
      promise.then((result) => {
        promisesResult[index] = result;

        if (++resolvedPromisesCounter === promises.length) {
          resolve(promisesResult);
        }
      });
    });
  }).catch((error) => console.log(error));
}

const p1 = new Promise((res) => setTimeout(() => res("Done"), 2000));
const p2 = new Promise((res) => setTimeout(() => res("Done"), 1000));
const p3 = new Promise((_, rej) => setTimeout(() => rej("Error"), 1500));

PromiseAll([p1, p2, p3]).then(console.log);
