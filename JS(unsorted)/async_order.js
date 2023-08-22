console.log(1);
setTimeout(() => console.log(2));
Promise.resolve().then(() => console.log(3));
Promise.resolve(console.log(8)).then(() => setTimeout(() => console.log(4)));
Promise.resolve().then(() => console.log(5));
queueMicrotask(()=>console.log(9))
setTimeout(() => console.log(6));
console.log(7);


// 1
// 8
// 7
// 3
// 5
// 9
// 2
// 6
// 4