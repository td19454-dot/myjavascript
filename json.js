let product = {
    name : 'tshirts',
    price : 1000,
    rating :{
        starts : 4.5,
        noofreview : 453,
    }
}
console.log(product)
let str = JSON.stringify(product)
console.log(str)

let newproduct = JSON.parse(str)
console.log(newproduct)


localStorage.setItem('Name','Kg Codding');
localStorage.setItem('price',3400)
console.log(localStorage.getItem('Name'))
localStorage.setItem('product',JSON.stringify(product));
console.log(localStorage.getItem('product'))
localStorage.removeItem('price')
