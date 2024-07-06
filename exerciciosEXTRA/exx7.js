function expoenciaçao(x,n){
    if(n===0){
        return 1;
    }
    if(n>0){
        return x * expoenciaçao(x,n-1)
    }
    if(n<0){
        return 1 / expoenciaçao(x, -n)
    }
}
console.log(expoenciaçao(2,3))