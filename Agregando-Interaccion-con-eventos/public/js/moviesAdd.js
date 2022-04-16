window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');


titulo.addEventListener('mouseover', ()=>{
    titulo.style.color = 'green'    
});

titulo.addEventListener('mouseout', ()=>{
titulo.style.color = 'black'    
});

}


let estadoSecreto = 0;
let inputTitle = document.getElementById('titulo');

function changeEstado(title){
    switch(title){
        case 's':
            estadoSecreto = 1;
            break;
        case 'se':
            estadoSecreto = 2;
            break
        case 'sec':
            estadoSecreto = 3;
            break
        case 'secr':
            estadoSecreto = 4;
            break
        case 'secre':
            estadoSecreto = 5;
            break
        case 'secret':
            estadoSecreto = 6;
        case 'secreto':
            estadoSecreto = "ok";
            break
        default :
            estadoSecreto = 0
            break
        }
        return estadoSecreto;

        
}
inputTitle.addEventListener('keyup',(e) =>{
    setTimeout(()=>{
        console.log(changeEstado(e.target.value))
        if(estadoSecreto === "ok"){
            alert('SECRETO MAGICO')
            estadoSecreto = 0;
            e.target.value= ""
        }
    }, 1000)
})