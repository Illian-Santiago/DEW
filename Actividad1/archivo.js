// Contenedores
const contenedorParrafos = document.querySelector('.contenedorParrafos');
const todosParrafos = document.querySelector('#todosParrafos');


// Botones
const btncreadorParrafos = document.querySelector('#btncreadorParrafo');
const btnAgrandar = document.querySelector('#btnAgrandar');
const btnDisminuir = document.querySelector('#btnDisminuir');
const btnOriginal = document.querySelector('#btnOriginal');
const btnAplicarColor = document.querySelector('#btnAplicarColor');
const btnAplicarFuente = document.querySelector('#btnAplicarFuente');


// Eventos
btncreadorParrafos.addEventListener('click', crearParrafos);
btnAgrandar.addEventListener('click', ()=>{datosTextoModificar('aumentar');});
btnDisminuir.addEventListener('click', ()=>{datosTextoModificar('disminuir');} );
btnOriginal.addEventListener('click', ()=>{datosTextoModificar('original');});
btnAplicarColor.addEventListener('click', ()=>{datosTextoModificar('color');});
btnAplicarFuente.addEventListener('click', ()=>{datosTextoModificar('fuente');});


function crearParrafos() {
    const parrafosCrear = document.querySelector('#numeroDeParrafos').value;
    let numeroParrafo = 1;

    if (parrafosCrear) {
        contenedorParrafos.innerHTML = '';
    }

    for (let index = 0; index < parrafosCrear; index++) {
        contenedorParrafos.insertAdjacentHTML('beforeend', '<p id="parrafo'+ numeroParrafo +'" class="tamano2 Times"><strong>'+ numeroParrafo +'º</strong> Párrafo</p>');
        numeroParrafo++;
    }
}

function datosTextoModificar(evento) {
    if (todosParrafos.checked) {
        let listaTodosParrafos = contenedorParrafos.querySelectorAll('p');

        for (let index = 0; index < listaTodosParrafos.length; index++) {
            if (evento === 'color') {
                modificarColorTexto(listaTodosParrafos[index]);
            } else if (evento === 'fuente') {
                modificarFuenteTexto(listaTodosParrafos[index]);
            } else if (evento === 'aumentar' || evento === 'disminuir') {
                modificarTamanoTexto(listaTodosParrafos[index], evento);
            } else {
                modificarTamanoTexto(listaTodosParrafos[index], evento);
                modificarColorTexto(listaTodosParrafos[index], evento);
                modificarFuenteTexto(listaTodosParrafos[index], evento);
            }
        }
    } else {
        let idParrafoSeleccionado = document.getElementById('parrafoSeleccionado').value;
        let parrafoSeleccionado = document.getElementById(idParrafoSeleccionado);

        if (evento === 'color') {
            modificarColorTexto(parrafoSeleccionado);
        } else if (evento === 'fuente') {
            modificarFuenteTexto(parrafoSeleccionado);
        } else if (evento === 'aumentar' || evento === 'disminuir') {
            modificarTamanoTexto(parrafoSeleccionado, evento);
        } else {
            modificarTamanoTexto(parrafoSeleccionado, evento);
            modificarColorTexto(parrafoSeleccionado, evento);
            modificarFuenteTexto(parrafoSeleccionado, evento);
        }
    }
}

function modificarTamanoTexto (parrafo, evento) {
    let clase = parrafo.classList[0];
    let tamano = parseInt(clase.slice(6));0;
    
    switch (evento) {
        case 'aumentar':
            if (tamano>=6) {
                break;
            } else {
                tamano++;
                break;
            }

        case 'disminuir':
            if (tamano<=1) {
                break;
            } else {
                tamano--;
                break;
            }

        default:
            tamano = 2;
            break;
    }

    let nuevaClase = 'tamano' + tamano;
    parrafo.classList.replace(clase, nuevaClase);
}

function modificarColorTexto(parrafo, original) {
    if (original) {
        parrafo.style.color = 'black';
    } else {
        const nuevoColor = document.querySelector('#inputColor').value;
        parrafo.style.color = nuevoColor;
    }
}

function modificarFuenteTexto(parrafo, original) {
    const fuente = parrafo.classList[1];

    if (original) {
        parrafo.classList.replace(fuente, 'Times');
    } else {
        const nuevaFuente = document.querySelector('#inputFuente').value;

        parrafo.classList.replace(fuente, nuevaFuente);
    }
}