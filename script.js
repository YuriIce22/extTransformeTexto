/* Programa - Modelo 1 */
document.addEventListener("DOMContentLoaded", function(){
    /* Evento para o botão Maiusculo */
    document.querySelector("#btn-maiuscula").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value
        document.querySelector("#result").innerHTML = inputText.toUpperCase() 
    })

    document.querySelector("#btn-minuscula").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value
        document.querySelector("#result").innerHTML = inputText.toLowerCase()
    })

})