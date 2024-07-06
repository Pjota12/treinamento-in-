function montadorMatriz2x2(matriz){
    var linha = prompt('insira a matriz:') //usuario coloca a matriz
    linha = linha.replace(/[\[\]]/g, '') //retira os "[" "]"
    linha = linha.replace(/\s+/g, '') // retira os espaços vaxios
    linha = linha.split(",") //separa os numeros em um array
    var linha2 = linha.slice(2,) //separa o array
    linha = linha.slice(0,2)
    matriz.push(linha)
    matriz.push(linha2)
    return matriz
}
var matriz1 = []
var matriz2 = []
matriz1 = montadorMatriz2x2(matriz1)
matriz2 = montadorMatriz2x2(matriz2)
var matrizmul = []
var lin = 0 // contador de linhas
var b = 0 // contador secundario
var c = 0 // contador teciario
var vet0 = []
var vet1 = []
for(;lin<2;lin++){
    b = 0
    for(;b<2;b++){
        c = 0
        var soma = 0
        for(;c<2;c++){
            var multiplica = 0
            multiplica = matriz1[lin][c] * matriz2[c][b]
            soma = soma + multiplica
        }
        if(lin == 0){
            vet0.push(soma)
        }
        if(lin==1){
            vet1.push(soma)
        }
    }
}
matrizmul.push(vet0)
matrizmul.push(vet1)
console.log(matrizmul)

