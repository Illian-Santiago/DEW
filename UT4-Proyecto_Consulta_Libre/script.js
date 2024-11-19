const consultarApi = document.querySelector("#consultarApi");
const termino = document.querySelector("textarea");
const div = document.querySelector("#apiData");
let datos;

consultarApi.addEventListener('click', mostrarDatos);

function mostrarDatos() {
    const enlace = 'https://narutodb.xyz/api/character';

    fetch(enlace)
        .then(data => { if (!data.ok) { throw Error(data.status); } return data.json(); })
        .then(clanes => {
            for (let index = 0; index < clanes.length; index++) {
                const elemento = JSON.stringify(clanes[index]);
                console.log(elemento);
            }
        })
        .catch(error => { console.log(error) });
}