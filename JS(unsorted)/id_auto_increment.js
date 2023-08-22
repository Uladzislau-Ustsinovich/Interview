const id = ((counter = 0)=>()=>++counter)()

console.log(id()) //1
console.log(id()) //2
console.log(id()) //3