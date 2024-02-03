let array_ = [43,1,6,71,4,52,2,8,79,44]

//idexOf busca pelo indice setado

console.log('medodo :indexOf','Retorna a posição do iten na lista'+':'+ array_.indexOf(44));//
console.log('medodo :lastindexOf','Retorna a posição do indece da lista que voce procurar'+':'+ array_.lastIndexOf(44))//retonar o indece do elemento que você procurar
console.log('medodo :includes',''+':o retorno sera true se qualquer indece buscado for verdadeiro ou seja se existir em um array:'+ array_.includes(44))

//find.() encontra o primeiro valor que satisfaça uma condição

console.log(array_.find(function(elemento){
    if(elemento > 2){
        return elemento > 42
    }else{
        return undefined
    }
}))

//retorna o indice do primeiro elemnto contrado cujo o valor do arry for maior do que esta sendo buscado
console.log(array_.findIndex(function(elemento){
    return elemento > 50

}))