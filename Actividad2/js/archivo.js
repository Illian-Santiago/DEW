let numPregunta = 0;
let puntuacion  = 0;

let divBotones = document.getElementById("buttons");

const preguntas = [
    {
    pregunta : 'El Back-End es parte no visible de la web como bases de datos o scripts que se ejecutan en el servidor.',
    respuesta : true
    },
    {
    pregunta : 'Los frameworks nacieron como librerías completas para permitir al programador la creación y desarrollo de proyectos.',
    respuesta : true
    },
    {
    pregunta : 'Los scripts nacieron como fragmentos de código que realizaban ciertas tareas o rutinas concretas.',
    respuesta : true
    },
    {
    pregunta : 'El Front-End es parte no visible de la web como bases de datos o scripts que se ejecutan en el servidor.',
    respuesta : false
    },
    {
    pregunta : 'Una persona que maneje un framework no puede incorporarse de manera efectiva y eficiente a un equipo de desarrollo que esté utilizando en un proyecto determinado.',
    respuesta : false
    }
];

function comprobar(tipo) {
    divBotones.classList.add('d-none');

    if (tipo === preguntas[numPregunta].respuesta) { // Si el tipo de boton coincide con el tipo que debe deser según el array
        document.querySelector('main > div').classList.add('bg-success');

        document.querySelector('p').innerHTML = 'Ha acertado';
        console.log("Ha acertado");

        puntuacion += 2;
    } else {
        document.querySelector('main > div').classList.add('bg-danger');

        document.querySelector('p').innerHTML = 'Ha fallado';
        console.log("Ha fallado");
    }

    setTimeout (siguientePregunta, 2000);
};

function siguientePregunta(params) {
    numPregunta++;

    if (numPregunta == preguntas.length) { // Si se acaban las preguntas
        setTimeout(() => { // Espera 1 segundo, dime los resultados y resetea todo
            divBotones.classList.remove('d-none');
            document.querySelector('main > div').className = 'bg-warning';

            document.querySelector('p').innerHTML = 'Haz finalizado el test, tu puntuación es de: ' + puntuacion;
            document.querySelector('main>div>div').innerHTML = '<a href=""> <button class="btn btn-primary">Volver a empezar</button> </a>';

            numPregunta = 0;
            puntuacion = 0;
        }, 1000);
    } else { // Si no pasa a la siguiente pregunta
        document.querySelector('main > div').removeAttribute('class');
        divBotones.classList.remove('d-none');

        document.querySelector('p').innerHTML = preguntas[numPregunta].pregunta;
    }
}