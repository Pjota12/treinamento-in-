const contaFamiliar = {
    receitas: [200,3000.5,4000.4],
    despesas: [0.3,5000,1000] 
}
function somaTotal(array){
    var total = 0
    for(var i = 0; i < array.length; i++){
        total = total + array[i]
    }
    return total
}
function saldoFamiliar(conta){
    var totalreceitas = somaTotal(conta.receitas);
    var totaldespesas = somaTotal(conta.despesas);
    var saldo = totalreceitas - totaldespesas;
    if(saldo > 0){
        return console.log('a familia esta com ' + saldo + ' e é POSITIVO')
    }else{
        if(saldo < 0){
            return console.log('a familia esta com ' + saldo + ' e é NEGATIVO')
        }else{
            return console.log('a familia esta com ' + saldo + ' e é ZERO')
        }
    }
}
var saldo = saldoFamiliar(contaFamiliar)
