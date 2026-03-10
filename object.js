let product={
    company_name : 'mango',
    price : 861,
    item_name : 'T-shirts',
    displayprice : function(){
        console.log(`price of the product is ${this.price}`)
    }
};

console.log(product);
product.displayprice();

alert(product.company_name);

product.company_name = 'banana';
alert(product.company_name);

alert(product['price']);

delete product.company_name;
console.log(product);

console.log('i am trisha'.length)
console.log('i am trisha'.toUpperCase())
console.log('i am trisha '.split())

let a = 5
let b = a
console.log(a,b)
 a = 8
 console.log(a,b)


 let x = {num : 5}
 let y = x
 console.log(`x=${x.num},y=${y.num}`)
 x.num = 8
console.log(`x=${x.num},y=${y.num}`)

let p = {pop : 'abcd'}
let c = {pop : 'abcd'}
console.log(p==c)

let {price} = product
console.log(price)


let product2={
    company_name : 'apple',
    price : 100000,
    item_name : 'laptop',
    'delivery-time' : 'same_day_delivery'
    
};
let copyproduct = product2
console.log(product2)
copyproduct.price = 2000000
console.log(product2)
console.log(product2['delivery-time'])


let object={
    message : 'good job',
    status : 'complete',
}

let{message,status}=object;
console.log(message)



function identicalproducts(product1, product2){
    if (typeof product1 != 'object' || typeof product2 != 'object'){
        console.warn('parameters passed were not objects');
        return false;
    }
    else if (product1 === product2){
        return true; // Same object reference
    }
    else if (product1.name === product2.name && product1.size === product2.size && product1.price === product2.price){
        return true; // Same properties
    }
    else {
        return false;
    }
}

let p1  = {
    name : 'laptop',
    size : 'large',
    price : '10000'
}
let p2  = {
    name : 'laptop',
    size : 'large',
    price : '10000'
}
let p3 = {
    name : 'laptop',
    size : 'large',
    price : '20000'
}
p4 = 89
console.log(identicalproducts(p1,p2))
console.log(identicalproducts(p1,p3))
console.log(identicalproducts(p1,p4))
console.log(identicalproducts(p1,p1))