const arbol = document.querySelector('#arbol');
const btn = document.querySelector('button');
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

btn.addEventListener('click', dibujaArbolNavidad);

function cargarImagenesEmpleados(numEmpleado){
    const nuevaImagen = document.createElement('img');
    const fila = arbol.lastElementChild;
    nuevaImagen.src = listaEmpleados[numEmpleado].foto;
    nuevaImagen.style = "width: 100px;";
    fila.appendChild(nuevaImagen);
}

function crearNuevaFila() {
    const nuevaFila = document.createElement('div');
    nuevaFila.classList.add('row');
    arbol.insertAdjacentElement("beforeend", nuevaFila);
}

function dibujaArbolNavidad() {
    btn.classList.add('d-none');
    let numEmpleadosFila = 0;
    let numEmpleadosActual = 0;

    for (let index = 0; index < listaEmpleados.length; index++) {
        if (numEmpleadosActual >= numEmpleadosFila) {
            crearNuevaFila();
            numEmpleadosFila ++;
            numEmpleadosActual = 0;
        }

        cargarImagenesEmpleados(index);
        numEmpleadosActual ++;
    }

    // Tronco
    const nuevaImagen = document.createElement('img');

    nuevaImagen.src = "img/LogoEmpresa.jpeg";
    nuevaImagen.style = "width: 100px;";

    arbol.appendChild(nuevaImagen);
}