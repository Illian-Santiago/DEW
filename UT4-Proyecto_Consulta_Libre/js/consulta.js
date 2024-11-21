const boton = document.querySelector("button");
const terminoIngresado = document.querySelector("input");
let pagina = 2;

boton.addEventListener('click', verificarContenido);

function cargarDatos() {
    const enlace = 'https://narutodb.xyz/api/' + terminoIngresado.value + '?page=' + pagina;

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
            sessionStorage.setItem('characters', JSON.stringify(elementos.characters));
            mostrarContenido(elementos.characters);
        });
}

function verificarContenido() {
    if (sessionStorage.getItem(terminoIngresado.value + 's') == null) {
        cargarDatos()
    } else {
        mostrarContenido(JSON.parse(sessionStorage.getItem('characters')))
    }
}

function mostrarContenido(dato) {
    console.log(dato);

    for (let index = 0; index < dato.length; index++) {
        const termino = dato[index].name;
        const nuevoParrafo = document.createElement('p');
        nuevoParrafo.textContent = termino;
        document.querySelector("main").appendChild(nuevoParrafo);
    }
}


if (sessionStorage.characters) {
    mostrarContenido(JSON.parse(sessionStorage.getItem('characters')));
}