const creadorParrafos = document.querySelector('#creadorParrafo');
const contenedorParrafos = document.querySelector('.contenedorParrafos');
const casillaParrafoSeleccionado = document.querySelector('h4').querySelector('strong').textContent;

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
    const parrafosCrear = document.querySelector('#numeroDeParrafos').value;
    let numeroParrafo = 1;

    contenedorParrafos.innerHTML = '<p></p>';

    for (let index = 0; index < parrafosCrear; index++) {
        let nuevoParrafo = document.createElement('p');

        nuevoParrafo.textContent = ''+ numeroParrafo +'º Párrafo';
        contenedorParrafos.insertBefore(nuevoParrafo, contenedorParrafos.lastChild);

        numeroParrafo++;
    }
}