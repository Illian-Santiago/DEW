const creadorParrafos = document.querySelector('#creadorParrafo');
const contenedorParrafos = document.querySelector('.contenedorParrafos');
const botonAgrandar = document.querySelector('#botonAgrandar');
const botonDisminuir = document.querySelector('#botonDisminuir');
const botonOriginal = document.querySelector('#botonOriginal');

let tamano = 1;
let tamanoOriginal = 1;

creadorParrafos.addEventListener('click', crearParrafos);
botonAgrandar.addEventListener('click', ()=>{modificarTexto('aumentar');} );
botonDisminuir.addEventListener('click', ()=>{modificarTexto('disminuir');} );
botonOriginal.addEventListener('click', modificarTexto);

function modificarTexto (evento) {
    const pixel = 0.05;
    
    idParrafoSeleccionado = document.getElementById('parrafoSeleccionado').value;
    parrafoSeleccionado = document.getElementById(idParrafoSeleccionado);

    switch (evento) {
        case 'aumentar':
            if (tamano>2) {
                alert('superado el tamaño máximo');
                break;
            } else {
                tamano = tamano + pixel;
                break;
            }

        case 'disminuir':
            if (tamano<.9) {
                alert('superado el tamaño minimo');
                break;
            } else {
                tamano = tamano - pixel;
                break;
            }

        default:
            tamano = tamanoOriginal;
            break;
    }

    parrafoSeleccionado.style.fontSize = tamano+'em';
}

function crearParrafos() {
    const parrafosCrear = document.querySelector('#numeroDeParrafos').value;
    let numeroParrafo = 1;

    if (parrafosCrear) {
        contenedorParrafos.innerHTML = '';
    }

    for (let index = 0; index < parrafosCrear; index++) {
        contenedorParrafos.insertAdjacentHTML('beforeend', '<p id="parrafo'+ numeroParrafo +'"><strong>'+ numeroParrafo +'º</strong> Párrafo</p>');

        numeroParrafo++;
    }
}