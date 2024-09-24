let enlaces = ["Img/1.jpg", "Img/2.jpg", "Img/3.jpg", "Img/4.jpg", "Img/5.jpg"]
let texto = ["Uno", "Dos", "Tres", "Cuatro", "Cinco"]

let imagen = document.getElementById("1")
let parrafo = document.getElementById("2")

let i=0;

imagen.onclick = function cambio() {
    if (i == enlaces.length-1) {
        i=0
    } else{
        i++
    }

    imagen.setAttribute("src", enlaces[i])

    parrafo.innerHTML = texto[i]

    console.log(setAttribute(parrafo))

    document.getElementById("2").element.classList.replace("h1", "h5")
}