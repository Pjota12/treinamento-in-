var i = 0
var positivos = []
for(; i < 6; i++){
    num = prompt('digite um valor')
    num = parseInt(num)
    if(num > 0){
        positivos.push(num)
    }else{
        continue
    }
}
console.log(positivos.length)