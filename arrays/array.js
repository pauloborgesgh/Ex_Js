const array_list = [15,66,58,32,41,54]
//function.some() retorna true se pelo menos uma vez se a comparacao for true 
// functon.every() se ao menos uma verificação for false o retorno vai ser false
//function.filter() retorna a array original sem alterar-lá
//foreach.()
let soNumerber = array_list.every(function(elemento){
    
    return typeof elemento === "number" 
})

//filter.() ira adicionar os elemento em um novo array se a comparação for verdadeira
let array_list_1 = array_list.filter(function(elemento,i,_arry_list){

    return typeof elemento === "string"

})

//forEach.()ira fazer uma interação e retornar algum valor
array_list.forEach(function(elemento,i,_arry_list){
    
    if (typeof elemento ===  "string"){

        return console.log(i,elemento)
    }else{
        return console.log(i,elemento)
    }
            
})

// map.() retorna uma nova array com o mesmo valores ou valores alterados

array_list_1 = array_list.map(function(elemento,i,array_list){
    return elemento * elemento

})
console.log(array_list);
console.log(array_list_1);