let array_01 = [43, 1, 6,5,9,8,22]
let array_02 = [45, 11, 61, 17, 14, 52, 21, 80, 179, 144,"arry_02"]



//push vai adicinar um novo valor no final de um array
//array_01.push("a",611,98)


//pop.() remove o ultimo elemento de um array

function remover(){
    if(array_01.length > 6){
        array_01.pop()
        return console.log(array_01,'removeu o ultimo item')
        
    }else{
        array_01.push(1,3,5)
        return console.log("não removeu")
    }
}

console.log(array_01)
console.log(remover())

//shift remove o primeiro iten de um array
let primeiro_item = array_01.shift()


console.log(primeiro_item)
console.log(array_01)
//unshift inclue elementos no inicio de um array

inicio_do_array = array_01.unshift(4,88,89,99)
console.log(inicio_do_array)
console.log(array_01)
console.log('****************************')
///slice() medoto
//passando um inico no metodo ele ira recortar e parando no proximo indice passado ex 7 ele ira parar no 8
slice_metodo = array_01.slice(4,8)


console.log(array_01)
console.log(slice_metodo)


///metodo splice retorara os elementos removidos
///  45 apartir desse ira remover o 11 e "adicionar um item"
let array_03 = array_02.splice(45,11, "adicionando item")

console.log(array_03)
console.log(array_02)
