const boton = document.querySelector("a");
const contenido = boton.parentElement.querySelector('h2').textContent.toLocaleLowerCase().slice(0, -1);
const consulta = contenido.slice(1, -1);
const restablecer = document.querySelector("footer button");


restablecer.addEventListener('click', () => { document.body.classList.add(".eleccion"); sessionStorage.clear(); location.reload(); });
boton.addEventListener('click', verificarContenido);


function cargarDatos() {
    const enlace = 'https://narutodb.xyz/api/' + consulta + '?limit=10000';

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
            sessionStorage.setItem(contenido, JSON.stringify(elementos.characters));
            mostrarContenido(elementos.characters);
        });
}

function verificarContenido() {
    if (sessionStorage.getItem(contenido) == null) {
        cargarDatos()
    } else {
        mostrarContenido(JSON.parse(sessionStorage.getItem(contenido)))
    }
}

function mostrarContenido(dato) {
    document.querySelector("main").innerHTML = "";
    document.body.classList.remove(".eleccion");
    document.body.style.background = "chocolate";
    document.querySelector(".buscador").style.display = "block";
    restablecer.style.display = "block";

    for (let index = 0; index < dato.length; index++) {
        const nuevaCard = document.createElement("div");
        nuevaCard.className = "card";
        nuevaCard.innerHTML = `
            <img src="${dato[index].images}" alt="${dato[index].name}">
            <div class="contenidoCarta">
                <h2> ` + dato[index].name + ` </h2>
            </div>
            `;

        document.querySelector("main").appendChild(nuevaCard);
    }
}


if (sessionStorage.characters) {
    mostrarContenido(JSON.parse(sessionStorage.getItem(contenido)));
}