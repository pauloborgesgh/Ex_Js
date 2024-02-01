const produto = {
    nome:"caneta",
    qtd:10,
    cor:"azul",
    modelo:"bic",
    comprar: function(n){
        if (n > this.qtd){
            return  "qtd nao dispobnivel"
        }
        this.qtd -= n
    }
}
produto.comprar(2)
console.log(produto)
produto.comprar(12)
console.log(produto)