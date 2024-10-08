// LLamar a una nueva página
const btnNuevaVentana = document.querySelector('#btnNuevaVentana');

btnNuevaVentana.addEventListener('click', nuevaVentana);

function nuevaVentana() {
    window.open("html/ventanaModificar.html", "Ventana para modificar", "height=401, width=600");
}