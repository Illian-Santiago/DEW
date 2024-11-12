const mensaje = document.querySelector("textarea");
const boton = document.querySelector("button");
const contenedor = document.querySelector("div");
const comentario = {
  id: Date.now(),
  autor: "Tu: ",
  texto: "",
};

boton.addEventListener("click", guardarMensaje);

function guardarMensaje() {
  if (mensaje.value) {
    comentario.texto = mensaje.value;
    localStorage.setItem(localStorage.length, JSON.stringify(comentario));

  }
}

function mostrarMensajes() {
  for (let index = 0; index < localStorage.length; index++) {
    const comentarioActual = JSON.parse(localStorage.getItem(index));
    const parrafo = document.createElement("p");

    parrafo.innerHTML = `<strong>` + comentarioActual.autor + `</strong>` + comentarioActual.texto;

    contenedor.appendChild(parrafo);
  }
}

// setTimeout(() => {
//   document.getElementById("alert").style.display = "none";
// }, 2000);


mostrarMensajes();