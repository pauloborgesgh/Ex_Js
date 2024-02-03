let array_01 = [43, 1, 6, 71, 4, 52, 2, 8, 79, 44,"exemplo da do arry_01"]
let array_02 = [45, 11, 61, 17, 14, 52, 21, 80, 179, 144,"exemplo da do arry_02"]



//tiString mostra os valores de um arrar e mostra como string
console.log( array_01.toString(function(){
    
}))
//join() separa os elemento por determinado caracter
console.log(array_02.join(' * '))

// concat() usar quando precisar juntar arrays

function concat(){
    let array_03 = array_02.concat(array_01)
    return console.table(array_03)
}
concat();


let array_04 =[].concat(array_02)
console.table(array_04)