// Contenedores
const contenedorParrafos = document.querySelector('.contenedorParrafos');
const todosParrafos = document.querySelector('#todosParrafos');

// Botones
const btncreadorParrafos = document.querySelector('#btncreadorParrafo');
const btnAgrandar = document.querySelector('#btnAgrandar');
const btnDisminuir = document.querySelector('#btnDisminuir');
const btnOriginal = document.querySelector('#btnOriginal');

// Eventos
btncreadorParrafos.addEventListener('click', crearParrafos);
btnAgrandar.addEventListener('click', ()=>{datosTextoModificar('aumentar');});
btnDisminuir.addEventListener('click', ()=>{datosTextoModificar('disminuir');} );
btnOriginal.addEventListener('click', ()=>{datosTextoModificar('original');});

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
    let strongParrafo = parrafo.querySelector('strong');

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
    strongParrafo.style.fontSize = tamano + 'px';
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