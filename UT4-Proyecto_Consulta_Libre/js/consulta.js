const boton = document.querySelector("a");
const btnPaginaPrincipal = document.querySelector("#paginaPrincipal");
const restablecer = document.querySelector("#reestablecer");


restablecer.addEventListener('click', () => {
    document.body.classList.add(".eleccion");
    sessionStorage.clear();
    document.body.removeChild(document.querySelector('script[src="../js/buscador.js"]')); // Elimina el script
    location.reload();
});
btnPaginaPrincipal.addEventListener('click', () => { location.reload() })
boton.addEventListener('click', () => {
    const contenido = boton.parentElement.querySelector('h2').textContent.toLocaleLowerCase().slice(1, -1);

    verificarContenido(contenido, contenido.slice(0, -1))
});


function cargarDatos(contenido, consulta) {
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

function verificarContenido(contenido, consulta) {
    if (sessionStorage.getItem(contenido) == null) {
        cargarDatos(contenido, consulta)
    } else {
        mostrarContenido(JSON.parse(sessionStorage.getItem(contenido)))
    }
}

function mostrarContenido(dato) {
    cambiarPagina();

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

function cambiarPagina() {
    document.querySelector("main").innerHTML = "";
    document.body.classList.remove(".eleccion");
    document.body.style.background = "chocolate";
    document.querySelector(".buscador").style.display = "block";
    restablecer.style.display = "block";
    btnPaginaPrincipal.style.display = "block";

    const nuevoScript = document.createElement('script');
    nuevoScript.src = '../js/buscador.js';
    document.body.appendChild(nuevoScript);
}