function mediaParcial(n1,n2,n3,situa){
    var media = (n1+n2+n3)/3
    return media
}
var transFloat = numero => parseFloat(numero)
var n1 = transFloat(prompt('digite a primeira nota:'))
var n2 = transFloat(prompt('digite a segunda nota:'))
var n3 = transFloat(prompt('digite a terceira nota:'))
var situa = null
var media = mediaParcial(n1,n2,n3,situa)
if(media >= 6){
    alert('sua media foi ' + media + ' ,você está APROVADO')
}else{
    alert('sua media foi ' + media + ' ,você está REPROVADO')
}

