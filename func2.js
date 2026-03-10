function generaterandommove(){
    let random = Math.random();
    let randommove = random*3;
    return randommove
}
console.log(alert(generaterandommove()))
console.log(alert(generaterandommove()))
console.log(alert(generaterandommove()))
console.log(alert(generaterandommove()))



function determinedriving(){
    let age = 2
    if (age>18){
        return  'u can drive'
    }
    else{
        return  'u can not drive'
    }
}
console.log(alert(determinedriving()))


function sum(a,b){
    let s = a+b
    return s
}

console.log(alert('the sum is '+ sum(2,6)))


function greeting(name = 'mam'){
    console.log(alert('happy new year '+name))
}
greeting()
greeting('Trisha')


// odd or even cheecking
function oddoreven(a){
    if (a%2 != 0){
        return 'odd number'
    }
     else{
        return 'even number'
     }

}
console.log(alert(oddoreven(3)))
console.log(alert(oddoreven(44)))



function larger(a,b){
    if (a>b){
        return 'large number is '+ a
    }
     else if (b>a){
        return 'large number is ' + b
     }
     else{
        return 'both number are equal'
     }
}
console.log(alert(larger(3,5)))
console.log(alert(larger(3,3)))
console.log(alert(larger(3,1)))



function convertfarenhit(a){
    return ((9/5)*a+32)
}

console.log(alert(convertfarenhit(100)))