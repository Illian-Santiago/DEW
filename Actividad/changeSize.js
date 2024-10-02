const creadorParrafos = document.querySelector('#creadorParrafo');
const divParrafos = document.querySelector('.divParrafos');

let tamano = 1;
let tamanoOriginal = 1;

creadorParrafos.addEventListener('click', crearParrafos);

function modificarTexto(elEvento, pixel, parrafo ){
    let elemento = document.getElementById(parrafo);

    switch(elEvento){
        case 'aumentar':
            if (tamano > 2){
                alert('superado el tamaño máximo');
                break;
            } else{
                tamano = tamano + pixel;
                break;
            }

        case 'reducir':
            if (tamano < .9){
                alert('superado el tamaño minimo');
                break;
            } else{
                tamano = tamano - pixel;
                break;
            }

        case 'original':
            tamano = tamanoOriginal;
            break;
    }
    elemento.style.fontSize = tamano+'em';
}

function crearParrafos() {
    let parrafosCrear = document.querySelector('#parrafo').value;
    cogerDatosParrafos();

    for (let index = 0; index < parrafosCrear; index++) {
        divParrafos.insertAdjacentHTML('beforeend', '<p id="parrafo2">Este es el segundo párrafo <strong> id = parrafo2</strong></p>');
    }
}

function cogerDatosParrafos() {
    return console.log(divParrafos.lastElementChild.id);
    parseFloat(curso.querySelector("span.u-pull-right ").innerHTML.slice(1))
}