function qs (element) {
    return document.querySelector(element);
}

let body = qs('body');
let h1 = qs('.moviesListTitulo');

let darkMode = confirm("¿Desea modo oscuro?");

if(darkMode){
    body.style.backgroundColor = "#7f7f7f";
    body.classList.add('fondoMoviesList');
}
        
    h1.innerText = "LISTADO DE PELICULAS";
    h1.style.color = "white";
    h1.style.backgroundColor = "teal";
    h1.style.padding = "20px"



