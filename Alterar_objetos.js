const pessoa = {
    nome:"joseph",
    idade: 77,
    cidade:"Santa Luzia",
    rua:"Clementi Solis",
    n_casa: 102,
    cpf:"402.688.415.99",
    email:"joseph@server.com"

}

for(let props in pessoa){
    
    
    console.log(pessoa[props]);
}