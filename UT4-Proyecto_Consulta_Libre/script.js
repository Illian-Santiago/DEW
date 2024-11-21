const consultarApi = document.querySelector("#consultarApi");
const terminoBusqueda = document.querySelector("select");
const div = document.querySelector("#apiData");
const terminoElementos = terminoBusqueda.value + 's';

consultarApi.addEventListener('click', verificarContenido);

function cargarDatos() {
    const enlace = 'https://narutodb.xyz/api/' + terminoBusqueda.value;

    fetch(enlace)
        .then(consulta => { // Lo que devuelva la consulta a la API
            // Lo revisa y si todo esta bien devuelve la consulta en JSON, sino imprime el error.
            if (consulta.ok) {
                return consulta.json();
            } else {
                console.log(consulta.status);
            }
        })
        .then(elementos => sessionStorage.setItem(terminoElementos, JSON.stringify(elementos)));

    // recargarPagina();
}

function recargarPagina() {
    location.reload();
}

function verificarContenido() {
    if (sessionStorage.getItem(terminoElementos) == null) {
        cargarDatos()
    }
}

console.log(JSON.parse(sessionStorage.getItem(terminoElementos)));