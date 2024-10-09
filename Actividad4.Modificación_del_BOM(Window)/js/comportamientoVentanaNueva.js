// Mostrar el ancho y alto actual
window.onresize = tamanoPagina;
document.querySelector("#tamano").textContent = window.outerWidth + ' x ' + window.outerHeight;

function tamanoPagina() {
    document.querySelector("#tamano").textContent = window.outerWidth + ' x ' + window.outerHeight;
}

// Cambiar el tamaño
const btnTamano = document.querySelector('#btnTamano');
const nuevoAncho = document.querySelector('#nuevoAncho');
const nuevoAlto = document.querySelector('#nuevoAlto');

// btnTamano.addEventListener('click', cambiarTamano);
nuevoAlto.addEventListener("mouserover", cambiarTamano)

function cambiarTamano() {
    let anchuraAnterior = window.outerWidth;
    let alturaAnterior = window.outerHeight;

    if (nuevoAncho.value >= 538 && nuevoAlto.value >= 190) {
        window.resizeTo(nuevoAncho.value, nuevoAlto.value);
    }
}