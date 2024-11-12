const mensaje = document.querySelector("textarea");
const boton = document.querySelector("button");
const contenedor = document.querySelector("div");
const contenidoContenedor = "";
const comentario = {
  id: Date.now(),
  texto: mensaje,
};

boton.addEventListener("click", guardarMensaje);

function guardarMensaje() {
  if (mensaje.value) {
    localStorage.setItem(comentario.id, comentario.texto.value);
    mostrarMensaje();
  }
}

function mostrarMensaje() {
  localStorage.forEach((mensaje) => {
    const parrafo = document.createElement("p");
    const strong = document.createElement("strong");

    strong.textContent = "fdsfdsf";
    parrafo.textContent = "dfdsfdfddsffds";

    parrafo.appendChild(strong);
    contenedor.appendChild(parrafo);
  });
}

// Función para ocultar el alert después de 2 segundos
setTimeout(() => {
  document.getElementById("alert").style.display = "none";
}, 2000); // 2000 milisegundos = 2 segundos

console.log(localStorage);

// localStorage.clear();

// // Convertir el objeto a una cadena JSON
// const personaJSON = JSON.stringify(comentario);

// // Guardar el objeto en localStorage
// localStorage.setItem("persona", personaJSON);

// // Para verificar que se ha guardado correctamente, puedes recuperarlo
// const personaGuardada = localStorage.getItem("persona");

// // Convertir la cadena JSON de vuelta a un objeto
// const personaObjeto = JSON.parse(personaGuardada);

// console.log(personaObjeto); // { nombre: "Juan", edad: 30, ciudad: "Madrid" }
