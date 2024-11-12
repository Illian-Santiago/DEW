const mensaje = document.querySelector("textarea");
const boton = document.querySelector("button");
const contenedor = document.querySelector(".contenedor");
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
    mensaje.textContent = "";
  } else {
    showAlert();
  }

  mostrarMensajes();
}

function mostrarMensajes() {
  for (let index = 0; index < localStorage.length; index++) {
    const comentarioActual = JSON.parse(localStorage.getItem(index));
    const parrafo = document.createElement("p");

    parrafo.innerHTML =
      `<strong>` +
      comentarioActual.autor +
      `</strong>` +
      comentarioActual.texto;

    contenedor.appendChild(parrafo);
  }
}

function showAlert() {
  const alertBox = document.getElementById("alert");
  alertBox.style.display = "block"; // Muestra el alert

  // Desaparece automáticamente después de 2 segundos
  setTimeout(() => {
    alertBox.style.display = "none";
  }, 2000);
}

function closeAlert() {
  const alertBox = document.getElementById("alert");
  alertBox.style.display = "none"; // Cierra el alert
}
