// Variables, debes hacer el querySelector adecuado
const carrito = document.querySelector("#carrito");                                       // document.getElementById('carrito');                  Busca el primer elemento cuyo id sea "carrito"
const listaCursos = document.querySelector("#lista-cursos");                              // document.getElementById('lista-cursos');             Busca el primer elemento cuyo id sea "lista-cursos"
const contenedorCarrito = document.querySelector("#lista-carrito > tbody");               // document.getElementsByTagName('tbody')[0];           Busca el primer elemento tbody dentro del elemento con id lista-carrito
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");                       // document.getElementById('vaciar-carrito');           Busca el primer elemento cuyo id sea vaciar-carrito
const tarjetasCursos= document.querySelectorAll(".card");                                // document.getElementsByClassName('curso');            Busca todos los elementos cuya clase sea curso

let articulosCarrito = [];

// Listeners
cargarEventListeners();

function cargarEventListeners() {
     // Dispara cuando se presiona "Agregar Carrito"
     listaCursos.addEventListener('click', agregarCurso);

     // Cuando se elimina un curso del carrito
     carrito.addEventListener('click', eliminarCurso);

     // Al Vaciar el carrito
     vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

     // NUEVO: Contenido cargado
     document.addEventListener('DOMContentLoaded', () => {
          articulosCarrito = JSON.parse( localStorage.getItem('carrito') ) || []  ;
          // console.log(articulosCarrito);
          carritoHTML();
     });
}


// Función que añade el curso al carrito
function agregarCurso(e) {
     e.preventDefault();

     // Delegation para agregar-carrito
     if(e.target.classList.contains('agregar-carrito')) {
          const curso = e.target.parentElement.parentElement;
          // Enviamos el curso seleccionado para tomar sus datos
          leerDatosCurso(curso);
          cambiarColorCurso(curso);
     }
}

function cambiarColorCurso(curso) {
     let id = curso.querySelector("a").getAttribute("data-id");
     let autorCurso = curso.querySelector('p').innerHTML;

     for (let index = 0; index < tarjetasCursos.length; index++) {
          const idCurso = tarjetasCursos[index].querySelector("a").getAttribute("data-id");
          const precioCurso = tarjetasCursos[index].querySelector("span.u-pull-right ").innerHTML;
          
          tarjetasCursos[index].classList.remove('border-primary');
          tarjetasCursos[index].classList.remove('border-success');

          if (idCurso === id) { // Si el id del curso actual coincide con el id parametro
               tarjetasCursos[index].classList.add('border-primary');

          } else if (tarjetasCursos[index].querySelector('p').innerHTML === autorCurso) {
               tarjetasCursos[index].classList.add('border-success');
               precioCurso = '$10';
          }
     }
}

// Lee los datos del curso
// Usa querySelector para encontrar los elementos que se indican
function leerDatosCurso(curso) {
     const infoCurso = {
          imagen: curso.querySelector("img").src,                          // La imagen del curso
          titulo: curso.querySelector("h4").innerText,                     // El título del curso
          precio: curso.querySelector("span.u-pull-right ").innerHTML,     // El precio con el descuento ya aplicado
          id: curso.querySelector("a").getAttribute("data-id"),            // Vamos a buscar el data-id del curso, primero buca el elemento y luego accede al atributo
          cantidad: 1
     }


     if( articulosCarrito.some( curso => curso.id === infoCurso.id ) ) { 
          const cursos = articulosCarrito.map( curso => {
               if( curso.id === infoCurso.id ) {
                    let cantidad = parseInt(curso.cantidad);
                    cantidad++
                    curso.cantidad =  cantidad;
                    return curso;
               } else {
                    return curso;
               }
          })
          articulosCarrito = [...cursos];
     }  else {
          articulosCarrito = [...articulosCarrito, infoCurso];
     }

     // console.log(articulosCarrito);
     carritoHTML();
}


// Elimina el curso del carrito en el DOM
function eliminarCurso(e) {
     e.preventDefault();
     if(e.target.classList.contains('borrar-curso') ) {
          // e.target.parentElement.parentElement.remove();
          const curso = e.target.parentElement.parentElement;
          const cursoId = curso.querySelector('a').getAttribute('data-id');
          
          // Eliminar del arreglo del carrito
          articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

          carritoHTML();
     }
}


// Muestra el curso seleccionado en el Carrito
function carritoHTML() {
     vaciarCarrito();

     articulosCarrito.forEach(curso => {
          const row = document.createElement('tr');
          row.innerHTML = `
               <td>  
                    <img src="${curso.imagen}" width=100>
               </td>
               <td>${curso.titulo}</td>
               <td>${curso.precio}</td>
               <td>${curso.cantidad} </td>
               <td>
                    <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
               </td>
          `;
          contenedorCarrito.appendChild(row);
     });

     // NUEVO:
     sincronizarStorage();

}

// NUEVO: 
function sincronizarStorage() {
     localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

// Elimina los cursos del carrito en el DOM
function vaciarCarrito() {
     // forma rapida (recomendada)
     while(contenedorCarrito.firstChild) {
          contenedorCarrito.removeChild(contenedorCarrito.firstChild);
     }
}
