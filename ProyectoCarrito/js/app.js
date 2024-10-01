// Variables, debes hacer el querySelector adecuado
const carrito = document.querySelector("#carrito");                                       // document.getElementById('carrito');                  Busca el primer elemento cuyo id sea "carrito"
const listaCursos = document.querySelector("#lista-cursos");                              // document.getElementById('lista-cursos');             Busca el primer elemento cuyo id sea "lista-cursos"
const contenedorCarrito = document.querySelector("#lista-carrito > tbody");               // document.getElementsByTagName('tbody')[0];           Busca el primer elemento tbody dentro del elemento con id lista-carrito
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");                       // document.getElementById('vaciar-carrito');           Busca el primer elemento cuyo id sea vaciar-carrito
const tarjetasCursos = document.querySelectorAll(".card");                                // document.getElementsByClassName('curso');            Busca todos los elementos cuya clase sea curso
const comprarCarritoBtn = document.querySelector("#comprar-cesta");

let articulosCarrito = [];

// Listeners
cargarEventListeners();

function cargarEventListeners() {
     // Dispara cuando se presiona "Agregar Carrito"
     listaCursos.addEventListener('click', agregarCurso);

     // Cuando se elimina un curso del carrito
     carrito.addEventListener('click', eliminarCurso);

     // Al Vaciar el carrito
     vaciarCarritoBtn.addEventListener('click', vaciarCesta);

     // Comprar carrito
     comprarCarritoBtn.addEventListener('click', comprarCarrito);

     // NUEVO: Contenido cargado
     document.addEventListener('DOMContentLoaded', () => {
          articulosCarrito = JSON.parse( localStorage.getItem('carrito') ) || []  ;
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
          cambiarCaracteristicasCurso(curso);
     }
}

function cambiarCaracteristicasCurso(curso) {
     // Guardamos en variables el id y el nombre del autor del curso que vamos a añadir
     let id = curso.querySelector("a").getAttribute("data-id");
     let autorCurso = curso.querySelector('p').innerHTML;

     for (let index = 0; index < tarjetasCursos.length; index++) {
          const idCurso = tarjetasCursos[index].querySelector("a").getAttribute("data-id");

          if (idCurso === id) { // Si el id del curso actual recorrido, coincide con el id del curso ha añadir
               tarjetasCursos[index].classList.remove('mismoAutor');
               tarjetasCursos[index].classList.add('enCarrito');

          } else if (tarjetasCursos[index].querySelector('p').innerHTML === autorCurso && !tarjetasCursos[index].classList.contains('enCarrito')) {
               aplicarDescuento(tarjetasCursos[index]);
               tarjetasCursos[index].classList.add('mismoAutor');
          }
     }
}

function aplicarDescuento(curso) {
     if (!curso.classList.contains('mismoAutor')) {
          // Buscamos el precio original e insertamos el cartel de descuento
          let precioCurso = parseFloat(curso.querySelector("span.u-pull-right ").innerHTML.slice(1));
          curso.querySelector("h4").insertAdjacentHTML('afterend', '<div><p class="descuento">Descuento</p></div>');

          // Tacho precio anterior con descuento e inserto el nuevo
          curso.querySelector('span').classList.add('precio');

          curso.querySelector('span').insertAdjacentHTML('beforebegin', '<span class="u-pull-right"></span>')
          curso.querySelector('.precio > span').innerHTML = '$' + (precioCurso-5);
     }
}

// Lee los datos del curso
// Usa querySelector para encontrar los elementos que se indican
function leerDatosCurso(curso) {
     const infoCurso = {
          imagen: curso.querySelector("img").src,                                // La imagen del curso
          titulo: curso.querySelector("h4").textContent,                         // El título del curso
          precio: curso.querySelector("span.u-pull-right").textContent,          // El precio con el descuento ya aplicado
          id: curso.querySelector("a").getAttribute("data-id"),                  // Vamos a buscar el data-id del curso, primero buca el elemento y luego accede al atributo
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

function comprarCarrito() {
     // Calculamos precio total
     let precioTotal = 0;
     
     articulosCarrito.forEach(curso => {
          precioTotal += parseFloat(curso.precio.slice(1)) * curso.cantidad;
     })

     // Insertamos los nuevos elementos
     listaCursos.insertAdjacentHTML('beforeend', '<div id="divPago" class="u-pull-right"></div>');

     document.querySelector('#divPago').innerHTML = `
          <h5>Total: $${precioTotal}</h5>
          <button id="botonPago" class="u-pull-right">Pagar</button>
     `;

     // Quitamos los cursos que no estan seleccionados
     console.log(listaCursos.querySelectorAll('.enCarrito'));

     tarjetasCursos.forEach(curso => {
          let cursoID = curso.querySelector("a").getAttribute("data-id");

          articulosCarrito.forEach( articulo => {
               if (cursoID != articulo.id) {
                    curso.remove();
               }
          })
     })

     // Se localiza el boton y se le añade el evento del alert
     let pagarBtn = document.querySelector('#botonPago');
     pagarBtn.addEventListener('click', pagar);
}

function pagar() {
     alert('Servicio temporalmente inactivo, inténtelo más tarde');
     vaciarCesta();
}

// Elimina los cursos del carrito en el DOM
function vaciarCarrito() {
     // forma rapida (recomendada)
     while(contenedorCarrito.firstChild) {
          contenedorCarrito.removeChild(contenedorCarrito.firstChild);
     }
}


function vaciarCesta () {
     vaciarCarrito();
     articulosCarrito = [];
     sincronizarStorage();
}