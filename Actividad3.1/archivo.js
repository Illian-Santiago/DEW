const arbol = document.querySelector('#arbol');
const btn = document.querySelector('button');
const baseEmpleados = document.querySelector('#baseEmpleados');
const listaEmpleados = [
    { nombre: "Carlos García", cantidadVendida: 14500, foto: "img/hombre.png"},
    { nombre: "Ana López", cantidadVendida: 7890, foto: "img/mujer.png"},
    { nombre: "Javier Fernández", cantidadVendida: 17350, foto: "img/hombre.png"},
    { nombre: "Laura Pérez", cantidadVendida: 6020, foto: "img/mujer.png"},
    { nombre: "María Sánchez", cantidadVendida: 18900, foto: "img/mujer.png"},
    { nombre: "Pedro Gómez", cantidadVendida: 7320, foto: "img/hombre.png"},
    { nombre: "Sofía Morales", cantidadVendida: 12450, foto: "img/mujer.png"},
    { nombre: "Miguel Torres", cantidadVendida: 9800, foto: "img/hombre.png"},
    { nombre: "Lucía Díaz", cantidadVendida: 15430, foto: "img/mujer.png"},
    { nombre: "David Romero", cantidadVendida: 11200, foto: "img/hombre.png"},
    { nombre: "Marta Ruiz", cantidadVendida: 6800, foto: "img/mujer.png"},
    { nombre: "Juan Navarro", cantidadVendida: 13400, foto: "img/hombre.png"},
    { nombre: "Carmen Gil", cantidadVendida: 5400, foto: "img/mujer.png"},
    { nombre: "Antonio Flores", cantidadVendida: 17650, foto: "img/hombre.png"},
    { nombre: "Elena Ortiz", cantidadVendida: 9200, foto: "img/hombre.png"},
    { nombre: "Andrés Herrera", cantidadVendida: 19500, foto: "img/hombre.png"},
    { nombre: "Clara Jiménez", cantidadVendida: 8550, foto: "img/mujer.png"},
    { nombre: "Fernando Castro", cantidadVendida: 14300, foto: "img/hombre.png"},
    { nombre: "Isabel Ríos", cantidadVendida: 7100, foto: "img/mujer.png"},
    { nombre: "José Medina", cantidadVendida: 19500, foto: "img/hombre.png"},
    { nombre: "Javier Fernández", cantidadVendida: 17350, foto: "img/hombre.png"}
];
const listaEmpleadosOrdenados = listaEmpleados.sort(
    function(empleadoActual, siguienteEmpleado) {
        return (siguienteEmpleado.cantidadVendida - empleadoActual.cantidadVendida);
    }
);

btn.addEventListener('click', dibujaArbolNavidad);

function crearCard(persona, numFila) {
    const nuevaCarta = document.createElement('div');
    const fila = arbol.lastElementChild;

    nuevaCarta.classList.add('card');
    nuevaCarta.innerHTML = `
        <img src=` + listaEmpleados[persona].foto + ` alt="Avatar" style="width:100%;">
        
        <div>
            <p><b>` + listaEmpleados[persona].nombre + `</b></p> 
            <p><b>Vendido: </b>` + listaEmpleados[persona].cantidadVendida + `</p>
        </div>
    `;
    
    switch (numFila) {
        case 1:
            nuevaCarta.classList.add('primeros');
        break;
    
        case 2:
            nuevaCarta.classList.add('segundos');
        break;
        
        case 3:
            nuevaCarta.classList.add('terceros');
        break;

        default:
            nuevaCarta.classList.add('resto');
        break;
    }

    fila.appendChild(nuevaCarta);
}

function crearNuevaFila() {
    const nuevaFila = document.createElement('div');

    nuevaFila.classList = 'd-flex justify-content-around';

    arbol.insertAdjacentElement("beforeend", nuevaFila);
}

function dibujaArbolNavidad() {
    document.querySelector('footer').classList.add('d-none');

    let numFila = 0;
    let numEmpleadosFila = 0;
    let numEmpleadosActual = 0;

    for (let index = 0; index < listaEmpleadosOrdenados.length; index++) {
        if (index < baseEmpleados.value) {
            if (numEmpleadosActual >= numEmpleadosFila) {
                numFila ++;
                crearNuevaFila();
                numEmpleadosFila ++;
                numEmpleadosActual = 0;
            }
    
            crearCard(index, numFila);
            numEmpleadosActual ++;
        }
    }

    // Tronco
    const nuevaImagen = document.createElement('img');

    nuevaImagen.src = "img/LogoEmpresa.jpeg";
    nuevaImagen.style = "width: 10%;";

    arbol.appendChild(nuevaImagen);
}