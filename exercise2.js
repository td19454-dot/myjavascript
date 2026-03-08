const myname = "Trisha Debnath"
document.querySelector('#namedisplay').innerText = myname
const gstpercentage = 18
let price = `₹ ${Math.round(((15599-(10/100*15599)-272) + (2499-(41/100*2499))-29+45))*(100+gstpercentage)/100}`;
console.log(price)