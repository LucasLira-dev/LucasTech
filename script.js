const input= document.getElementById("pesq")
//const botao= document.getElementById("botao")


document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.querySelector('#botao');  // Substitua pelo seu seletor do botão

    if (searchButton) {
        searchButton.addEventListener('click', function() {
            // Adicione aqui a funcionalidade de busca
            botao.style.display= "none"
            input.style.display= "block"
        
            input.focus()
        });
    } else {
        console.warn('Botão de pesquisa não encontrado nesta página');
    }
});







const btn_contato= document.getElementById("cont")
const nome=  document.getElementById("nome")
const email=  document.getElementById("email")
const assunto=  document.getElementById("assunto")


btn_contato.addEventListener("click", (evt)=>{
    evt.preventDefault()
   
    if(nome.checkValidity() && email.checkValidity() && assunto.checkValidity()){
     btn_contato.innerHTML= "Enviando....."
    promessa()
    .then((retorno)=>{
        btn_contato.innerHTML= retorno
    })

    .catch((retorno)=>{
        btn_contato.innerHTML= retorno
    })
} else{
    alert(" Por favor, preencha os campos do formúlario")
}
})


const promessa=()=>{
    let promise= new Promise((resolve, reject)=>{
       
        let tempo= 3000

        setTimeout(()=>{
            if(nome.value!=="" && email.value!=="" && assunto.value!=="" ){
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



let articleElements = document.querySelectorAll("article");

let noresult = document.getElementById("semResultado");

let recomendados = document.getElementById("rec");




// Adiciona um evento de input ao elemento de entrada
input.addEventListener("input", (e) => {
    // Normaliza o valor de entrada para lidar com letras acentuadas
    let inputed = e.target.value.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let found = false;

    // Itera sobre todos os elementos <article>
    articleElements.forEach((article) => {
        let h1 = article.querySelector("h2");
        if (h1) {
            // Normaliza o texto do <h2> para lidar com letras acentuadas
            let h1Text = h1.textContent.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            if (h1Text.includes(inputed)) {
                article.style.display = "block";
                found = true;
            } else {
                article.style.display = "none";
            }
        }
    });

    // Verifica se o campo de entrada está vazio
    if (inputed === "") {
        noresult.style.display = "none";
    } else {
        noresult.style.display = found ? "none" : "block";
        recomendados.style.display = found ? "block" : "none"; // Esconde "recomendados" se nenhum artigo for encontrado
     
    }
});

