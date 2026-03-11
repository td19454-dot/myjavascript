let x = [1,3,4,5,6,7,8]
console.log(x)
console.log(x[5])



let y = [1,2,3,'Trisha',"shubham",'package',123]
console.log(y[5])
console.log(Array.isArray(x))
console.log(x.length)
let doosa = []
console.log(Array.isArray(doosa))
doosa.push(9)
console.log(doosa)
console.log(x.pop())


let z = [3,5,7,8,9]
console.log(z.splice(1,1))
console.log(z)


let a = [3,4,2,5,9,1,0]
console.log(a.toString())
console.log(a.sort())

let a2 = a
a2[0] = 110
console.log(a)


let [a1,b,c,d] = a
console.log('' + a1 + ' ' + b + ' ' + c + ' ' + d)