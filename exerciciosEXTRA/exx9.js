function transformadorDeNota(nota){
    if(nota>=90){
        return 'A'
    }else{
        if((nota<90)&&(nota>=80)){
            return 'B'
        }else{
            if((nota<=79) && nota>=70){
                return 'C'
            }else{
                if((nota<=69) && (nota>=60)){
                    return 'D'
                }else{
                    return 'E'
                }
            }
        }
    }
}
var nota = prompt('insira sua nota:')
nota = parseFloat(nota)
var nota_abc = transformadorDeNota(nota)
console.log(nota_abc)