function qs (element) {
    return document.querySelector(element)
}
let body = qs('body')
let main = qs('.container')
let h2 = qs('.subtitulo')
let a = qs('a') 
let p = document.querySelectorAll('p')
main.style.display = "block"

let userName = prompt('Ingrese su nombre')

if(userName === ""){
    h2.style.textTransform = "uppercase"
    h2.innerText = "Bienvenido Invitado"
    a.style.color = "#E51B3E"
} else{
    h2.style.textTransform = "uppercase"
    h2.innerText ="Bienvenido " +`${userName.trim()}`
    a.style.color = "#E51B3E"
}

let background = confirm('¿Desea colocar un fondo de pantalla?');
background && body.classList.add('fondo');

p.forEach((element, index) => {
    if((index + 1) % 2 == 0){
        element.classList.add('destacadoPar');
    }else{
        element.classList.add('destacadoImpar')
    }
})