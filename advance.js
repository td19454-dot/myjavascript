//button function when clicked
let button_element =document.querySelector('#button')
let behavior = event => console.log('i am clicked')
button_element.addEventListener('click',behavior)
let print_date = event => console.log(new Date())
button_element.addEventListener('click',print_date)
button_element.removeEventListener('click',behavior)


//for each loop

let foods = ['meat','cake','apple']
foods.forEach(function(food){
console.log(food)
})

// normal for loop
let foods1 = ['meat','cake','apple']
for (let i = 0 ; i < foods1.length ; i++){
    console.log(foods[i])
}


// filter method
let arr = [1,2,3,4,5,6]
let odds = arr.filter((num,index) => {
    if(num%2 === 1){
        return true;
    }
    else{
        return false;
    }
})
console.log(odds)

let arr1 = [1,2,3,4,5,6]
let newodds = arr.filter((num,index) => {
        return num%2 === 0;
    }
)
console.log(newodds)




// map values
let arr2 = [1,3,5,6,7,834]
let squares = arr2.map((num)=> {
    return num*num
})
console.log(squares)



//annoymuos function
let sum = function (num1 ,num2){
    return num1 + num2
}
console.log(sum(3,5))

let newsum = sum
console.log(newsum(8,9))


let sumthree = function(num1,num2,num3,sumOfTwo){
    let sum1 =  sumOfTwo(num1,num2)
    let sum2 = sumOfTwo(sum1,num3)
    return sum2
}

console.log(sumthree(1,5,6,sum))


//arrow functions
let sum2 =  (num1 ,num2) =>{
    return num1 + num2
}
console.log(sum2(9,123))

// for single argument
let square = (num1) =>  num1*num1
console.log(square(7))



// time interval
let alarm = function() {
    console.log('subha ho gayi uth jao'+new Date())  
}
let timerid = setTimeout(alarm,5000)
console.log(`alarm set : ${timerid}`)
clearTimeout(timerid)

let intervalid = setInterval(alarm,2000)
clearInterval(intervalid)




// practice 

function multiply(num1,num2) {
    return num1 * num2 
}

function multiplyOfThree(num1,num2,num3,multiply){
    result = multiply(num2,num3)
    return multiply(result,num1)
}

console.log (multiplyOfThree(2,3,4,multiply))



// create a buutton which grows twice after 2 second u are clicking it
function double() {
    let button_element = document.querySelector('.button2')
    button_element.classList.add('double')

}
let button_element2 =document.querySelector('.button2')
button_element2.addEventListener('click', event => console.log(setTimeout(double,0)))



let result1 = 0
let numbers= [7,10,12]
numbers.forEach(function(num){
result1 = result1 + num
})
console.log(result1)