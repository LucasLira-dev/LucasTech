const input= document.getElementById("pesq")
const botao= document.getElementById("botao")

botao.addEventListener("click", (evt)=>{
    botao.style.display= "none"
    input.style.display= "block"

    input.focus()
})


const btn_contato= document.getElementById("cont")
const nome=  document.getElementById("nome")
const email=  document.getElementById("email")
const assunto=  document.getElementById("assunto")


btn_contato.addEventListener("click", (evt)=>{
    evt.preventDefault()
    btn_contato.innerHTML= "Enviando....."

    promessa()
    .then((retorno)=>{
        btn_contato.innerHTML= retorno
    })

    .catch((retorno)=>{
        btn_contato.innerHTML= retorno
    })
})


const promessa=()=>{
    let promise= new Promise((resolve, reject)=>{
       
        let tempo= 3000

        setTimeout(()=>{
            if(nome.value!="" && email.value!="" && assunto.value!="" ){
                resolve("Mensagem enviada!")
            } else{
                reject("Erro, tente novamente.")
            }
        }, tempo)
    })

    promise.then((retorno)=>{
        btn_contato.innerHTML= retorno
    })

    promise.catch((retorno)=>{
        btn_contato.innerHTML= retorno
    })
}