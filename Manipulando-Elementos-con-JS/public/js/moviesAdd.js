function qs (element) {
    return document.querySelector(element)
}

let h1 = qs(".moviesAddTitulo")
let article = qs('article')
let section = qs('#formulario')


h1.innerText = "AGREGAR PELICULAS";
h1.classList.add("titulo");
article.classList.add('fondoTransparente');
section.classList.add('fondoCRUD');