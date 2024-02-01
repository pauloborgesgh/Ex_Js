// se nao existir um nome não mostrar a barra do top se tiver mostrar normalmente
(function(){
    const nome = "Paulo"
    const elemento = document.querySelector(".top-bar p")
    if(nome){
        elemento.innerHTML += nome
    }else{
        // elemento.parentElement.style.display = "none"
        const elementotoremove = elemento.parentElement //acessando o elemento pai e removendo o elemento filho
        elementotoremove.parentElement.removeChild(elementotoremove)
    }
})()

function esconderText(){
    const titulo = document.querySelector("h1")
    titulo.style.display = "none"
  
}

function mostarText(){
    const titulo = document.querySelector("h1")
    if((titulo) === (titulo.style.display = "none")){
        
        titulo.style.display = "inline-block"
        titulo = document.querySelector("h1").innerHTML+=""
        
    }else{
        titulo.style.display = "inline-block"
    }


}