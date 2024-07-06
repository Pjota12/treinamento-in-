function div3(num1){
    var soma = 0
    for(var i in num1){
        soma = soma + parseInt(num1[i])
    }
    if(soma%3 == 0){
        return true
    }else{
        return false
    }
}
function div5(num){
    indice = num.length
    final = num[indice - 1]
    final = parseInt(final)
    if(final == 0 || final == 5){
        return true
    }else{
        return false
    }
}
var cont =  0
while(true){
    num = prompt('insira um numero:')
     var divisivel_por_5 = div5(num)
     var divisivel_por_3 = div3(num)
     if((divisivel_por_5 == true) && (divisivel_por_3 == true)){
        console.log('fizzbuzz')
     }else{
        if(divisivel_por_3 == true){
            console.log('fizz')
        }else{
            if(divisivel_por_5 == true){
                console.log('buzz')
            }else{
                console.log('')
            }
        }
     }
     cont++
     if(cont == 5){
        break
     }
}