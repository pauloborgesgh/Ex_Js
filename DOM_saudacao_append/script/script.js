// se nao existir um nome não mostrar a barra do top se tiver mostrar normalmente
(function(){
    const nome = "Paulo"
    
    if(nome){
       const topBarElement = document.createElement("div") //criando elemento com Dom
       topBarElement.className = "top-bar"
       topBarElement.innerHTML= `<p>Olá, <b>${nome}<b></p>`
       
       const elementFather = document.querySelector(".hero") // =>elemento pai = > elemento hero-content(filho)
       //console.log(elementFather.querySelector(".hero-content"))
       elementFather.insertBefore(topBarElement,firstElementChild)
       
        console.log(elementFather.firstChild)
        console.log(elementFather.firstElementChild)
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