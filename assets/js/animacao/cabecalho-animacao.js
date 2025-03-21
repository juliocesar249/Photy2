const header = document.querySelector(".cabecalho");
const texto = header.querySelector(".cabecalho__texto");
const titulo = header.querySelector(".texto__titulo");
window.addEventListener("scroll", () =>{
    if(window.scrollY >= 400) {
        header.classList.add("cabecalho--reduzido");
        texto.classList.add("cabecalho__texto--reduzido")
        titulo.classList.add("texto__titulo--reduzido");
    } else {
        header.classList.remove("cabecalho--reduzido");
        texto.classList.remove("cabecalho__texto--reduzido")
        titulo.classList.remove("texto__titulo--reduzido");
    }
});