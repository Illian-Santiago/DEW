const mensaje = document.querySelector("textarea");
const boton = document.querySelector("button");
const contenedor = document.querySelector("div");
const comentario = {
  id: Date.now(),
  Autor: "Tu",
  texto: mensaje,
};

boton.addEventListener("click", guardarMensaje);

function guardarMensaje() {
  if (mensaje.value) {
    localStorage.setItem(localStorage.length, JSON.stringify(comentario));
  }
}

function mostrarMensajes() {
  for (let index = 0; index < localStorage.length; index++) {
    const comentarioActual = JSON.parse(localStorage.getItem(index));
    console.log(comentarioActual.id);

    // const parrafo = document.createElement("p");

    // parrafo.innerHTML = `<strong>` + +`</strong> Hola mundo`;

    // contenedor.appendChild(parrafo);
  }
}


// setTimeout(() => {
//   document.getElementById("alert").style.display = "none";
// }, 2000);


mostrarMensajes();