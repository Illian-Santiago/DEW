const consultarApi = document.querySelector("#consultarApi");
// const termino = document.querySelector("textarea");
const div = document.querySelector("#apiData");


let enlace = 'https://narutodb.xyz/api/character';
// let datos;

consultarApi.addEventListener('click', mostrarDatos);

function mostrarDatos() {
    fetch(enlace)
        .then(consulta => { // Lo que devuelva la consulta a la API
            // Lo revisa y si todo esta bien devuelve la consulta en JSON, sino imprime el error.
            if (consulta.ok) {
                return consulta.json();
            } else {
                console.log(consulta.status);
            }
        })
        .then(elementos =>
            sessionStorage.setItem('characters', JSON.stringify(elementos))
        );
}

console.log(JSON.parse(sessionStorage.getItem('characters')));