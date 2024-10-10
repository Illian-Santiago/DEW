const listaEmpleados = [
    { nombre: "Carlos García", cantidadVendida: 14500, foto: "img/hombre.png"},
    { nombre: "Ana López", cantidadVendida: 7890, foto: ""},
    { nombre: "Javier Fernández", cantidadVendida: 17350, foto: ""},
    { nombre: "Laura Pérez", cantidadVendida: 6020, foto: ""},
    { nombre: "María Sánchez", cantidadVendida: 18900, foto: ""},
    { nombre: "Pedro Gómez", cantidadVendida: 7320, foto: ""},
    { nombre: "Sofía Morales", cantidadVendida: 12450, foto: ""},
    { nombre: "Miguel Torres", cantidadVendida: 9800, foto: ""},
    { nombre: "Lucía Díaz", cantidadVendida: 15430, foto: ""},
    { nombre: "David Romero", cantidadVendida: 11200, foto: ""},
    { nombre: "Marta Ruiz", cantidadVendida: 6800, foto: ""},
    { nombre: "Juan Navarro", cantidadVendida: 13400, foto: ""},
    { nombre: "Carmen Gil", cantidadVendida: 5400, foto: ""},
    { nombre: "Antonio Flores", cantidadVendida: 17650, foto: ""},
    { nombre: "Elena Ortiz", cantidadVendida: 9200, foto: ""},
    { nombre: "Andrés Herrera", cantidadVendida: 19500, foto: ""},
    { nombre: "Clara Jiménez", cantidadVendida: 8550, foto: ""},
    { nombre: "Fernando Castro", cantidadVendida: 14300, foto: ""},
    { nombre: "Isabel Ríos", cantidadVendida: 7100, foto: ""},
    { nombre: "José Medina", cantidadVendida: 19500,foto: ""}
];
const btn = document.querySelector('button');

btn.addEventListener('click', cargarImagenesEmpleados);

function cargarImagenesEmpleados(){
    document.querySelector('main div').innerHTML = '<img src="'+ listaEmpleados[0].foto +'"">';
}

function dibujaArbolNavidad(){
}