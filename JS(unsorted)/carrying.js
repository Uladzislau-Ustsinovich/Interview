function calc(initNumber = 0) {

 function f(addNumber = 0) {
     return calc(initNumber + addNumber)
 }

 f.toString = function (){
     return initNumber
 }

 return f
}

const res1 = +calc(1)(2)(3) // 6
const res2 = +calc(1)(0)(3) // 4

console.log(res1)
console.log(res2)