let opcionesDisponibles = ["character", "eeeeeeeeeeeeeeeeeeeee", "ioddffdjsdsf"];
let input = document.querySelector("input");
let lista = document.querySelector("ul");


input.addEventListener("input", mostrarOpcionesActuales);

// Cuando un elemento de la lista se seleccione, se pasara el elemento a la función para que esta la ingrese en el input.
lista.addEventListener("click", autocompletar);


// Filtra entre las opciones disponibles aquellas que coincidan con el input y las mete en un elemento que se insertara en la lista.
// Si el usuario no ha escrito nada oculta la lista de opciones.
function mostrarOpcionesActuales() {
    if (!input.value) {
        ocultarListaResultados();
        return;
    }

    const opcionesActuales = opcionesDisponibles.filter(country => country.toLowerCase().startsWith(input.value.toLowerCase()));

    lista.innerHTML = opcionesActuales.map((opcion, index) => `
        <li id='autocomplete-result-${index}' class='autocomplete-result' role='option'>${ponerNegrita(input.value, opcion)}</li>
    `).join("");

    lista.classList.remove("hidden");
}

function autocompletar(event) {
    input.value = event.target.innerText;
    ocultarListaResultados();
}

function ocultarListaResultados() {
    lista.innerHTML = "";
    lista.classList.add("hidden");
}

function ponerNegrita(input, opcion) {
    const inputLower = input.toLowerCase();
    const opcionLower = opcion.toLowerCase();
    const index = opcionLower.indexOf(inputLower); // Retorna la posición de donde coincide el inputLower dentro de la cadena de opcionLower. Devuelve un -1 si no lo encuentra.

    if (index !== -1) {
        // Retorna el trozo de la cadena de la opcion. El primer parámetro es el índice de inicio y el segundo es opcional y es el índice de fin.
        const antes = opcion.substring(0, index);
        const coincidencia = opcion.substring(index, index + inputLower.length);
        const despues = opcion.substring(index + inputLower.length);

        return `${antes}<strong>${coincidencia}</strong>${despues}`;
    }

    return opcion;
}