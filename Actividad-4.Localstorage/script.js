const mensaje = document.querySelector("textarea");
const agregar = document.querySelector("#agregar");
const contenedor = document.querySelector(".contenedor");
const alertaInformativa = document.querySelector(".alertaInformativa");
const alertaAdvertencia = document.querySelector(".alertaAdvertencia");
const comentario = {
  id: Date.now(),
  autor: "Tu: ",
  texto: "",
};

agregar.addEventListener("click", guardarMensaje);

function guardarMensaje() {
  if (mensaje.value) {
    comentario.texto = mensaje.value;
    localStorage.setItem(localStorage.length, JSON.stringify(comentario));
    mensaje.textContent = "";

    MostrarAlerta("informativa");
    mostrarMensajes();
  } else {
    MostrarAlerta("advertencia");
  }
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

function MostrarAlerta(tipo) {
  tipo == "informativa"
    ? (alertaInformativa.style.display = "block")
    : (alertaAdvertencia.style.display = "block");

  setTimeout(() => {
    tipo == "informativa"
      ? cerrarAlerta("informativa")
      : cerrarAlerta("advertencia");
  }, 2000);
}

function cerrarAlerta(tipo) {
  tipo == "informativa"
    ? (alertaInformativa.style.display = "none")
    : (alertaAdvertencia.style.display = "none");
}

mostrarMensajes();
