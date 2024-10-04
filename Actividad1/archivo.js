const creadorParrafos = document.querySelector('#creadorParrafo');
const contenedorParrafos = document.querySelector('.contenedorParrafos');
const todosParrafos = document.querySelector('#todosParrafos');

const botonAgrandar = document.querySelector('#botonAgrandar');
const botonDisminuir = document.querySelector('#botonDisminuir');
const botonOriginal = document.querySelector('#botonOriginal');

creadorParrafos.addEventListener('click', crearParrafos);
botonAgrandar.addEventListener('click', ()=>{datosTextoModificar('aumentar');});
botonDisminuir.addEventListener('click', ()=>{datosTextoModificar('disminuir');} );
botonOriginal.addEventListener('click', ()=>{datosTextoModificar('original');});

function datosTextoModificar(evento) {
    if (todosParrafos.checked) {
        let listaTodosParrafos = contenedorParrafos.querySelectorAll('p');

        for (let index = 0; index < listaTodosParrafos.length; index++) {
            if (evento === 'aumentar' || evento === 'disminuir' || evento === 'original') {
                modificarTamanoTexto(evento, listaTodosParrafos[index]);
            }
        }
    } else {
        let idParrafoSeleccionado = document.getElementById('parrafoSeleccionado').value;
        let parrafoSeleccionado = document.getElementById(idParrafoSeleccionado);

        
        if (evento === 'aumentar' || evento === 'disminuir' || evento === 'original') {
            modificarTamanoTexto(evento, parrafoSeleccionado);
        }
    }
}

function modificarTamanoTexto (evento, parrafo) {
    const tamanoOriginal = 20;
    let tamano = parseInt(getComputedStyle(parrafo).fontSize);

    console.log(tamano);
    switch (evento) {
        case 'aumentar':
            if (tamano>=30) {
                break;
            } else {
                tamano = tamano + 1;
                break;
            }

        case 'disminuir':
            if (tamano<=10) {
                break;
            } else {
                tamano = tamano - 1;
                break;
            }

        default:
            tamano = tamanoOriginal;
            break;
    }

    parrafo.style.fontSize = tamano + 'px';
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