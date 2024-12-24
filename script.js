const input= document.getElementById("pesq")
const botao= document.getElementById("botao")

botao.addEventListener("click", (evt)=>{
    botao.style.display= "none"
    input.style.display= "block"

    input.focus()
})