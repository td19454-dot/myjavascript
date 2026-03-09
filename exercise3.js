let gender = 'male'
        let metroticket = 70
        let age = 29
        if (age < 5){
            console.log('the price of metro ticket is ' + 0)
        }
        if (5<age && 8>age){
            console.log('the price of metro ticket is' + metroticket/2)

        }
        if (age > 65){
            console.log('the price of metro ticket is' +metroticket*0.3)
        }
        if  (gender=='female' && age < 65 && age > 5){
            console.log('the price of metro ticket is' + metroticket/2)
        }
        if (gender == 'male' && age <65 && age >8){
            console.log('the price of metro ticket is' + metroticket)
        }