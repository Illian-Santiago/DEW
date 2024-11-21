const consultarApi = document.querySelector("#consultarApi");
const terminoBusqueda = document.querySelector("select").value;
const div = document.querySelector("#apiData");
const terminoElementos = terminoBusqueda + 's';

consultarApi.addEventListener('click', verificarContenido);

function cargarDatos() {
    const enlace = 'https://narutodb.xyz/api/' + terminoBusqueda;

    fetch(enlace)
        .then(consulta => { // Lo que devuelva la consulta a la API
            // Lo revisa y si todo esta bien devuelve la consulta en JSON, sino imprime el error.
            if (consulta.ok) {
                return consulta.json();
            } else {
                console.log(consulta.status);
            }
        })
        .then(elementos => {

            sessionStorage.setItem(terminoElementos, JSON.stringify(elementos.terminoElementos.replace('-', '')));
            mostrarContenido(elementos.kekkeigenkai);
        });
}

function verificarContenido() {
    if (sessionStorage.getItem(terminoElementos) == null) {
        cargarDatos()
    } else {
        console.log(JSON.parse(sessionStorage.getItem(terminoElementos)));
        mostrarContenido(JSON.parse(sessionStorage.getItem(terminoElementos))[1].characters)
    }
}

function mostrarContenido(dato, contenedor) {
    contenedor = div;
    for (let index = 0; index < dato.length; index++) {
        const termino = dato[index].name;
        const nuevoParrafo = document.createElement('p');
        mostrarContenido
        nuevoParrafo.textContent = JSON.stringify(termino);
        contenedor.appendChild(nuevoParrafo);
    }
}