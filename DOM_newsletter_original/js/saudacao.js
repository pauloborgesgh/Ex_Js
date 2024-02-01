(function () {
    

})()
const txtEmail = document.getElementById("txtEmail")
const msgFeed = document.getElementById("newsletterFeedback")


function emailConfirmed(){
    let email = txtEmail.value
    msgFeed.innerHTML = `<br> Email ${email} cadastrado com Sucesso`
     
    console.log( "emailConfirmed")
}