const pessoa = {
    nome:"joseph",
    idade: 77,
    cidade:"Santa Luzia",
    rua:"Clementi Solis",
    n_casa: 102,
    cpf:"402.688.415.99"

}
console.log(pessoa.n_casa,pessoa.nome);

//vendo arrays

const nomes = ["Alessio","Helena","Maria","Jose","Renato","Gustavo","Gil Moro","Marcia","Netto","Claudio","Jusara","Meliodas","Nicolas","Oswaldo"]


for (let i = 0 ; i < nomes.length; i ++){
    console.log(`${i}:nome é ${nomes[i]}`)
}