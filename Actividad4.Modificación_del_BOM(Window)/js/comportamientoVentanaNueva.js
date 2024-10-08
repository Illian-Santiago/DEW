// Mostrar el ancho y alto actual
window.onresize = tamanoPagina;
document.querySelector("#tamano").textContent = window.innerHeight + ' x ' + window.innerWidth;

function tamanoPagina() {
    document.querySelector("#tamano").textContent = window.innerHeight + ' x ' + window.innerWidth;
}

// Cambiar el tamaño
const btnTamano = querySelector('#btnTamano');


function cambiarTamano() {
    window.innerHeight = '200';
}