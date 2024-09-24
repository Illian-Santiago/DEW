let numpregunta = 0;

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

    if (tipo == preguntas[numpregunta].respuesta) {
        console.log("Ha acertado");
    } else {
        console.log("Ha fallado");
    }

    document.getElementById("pregunta").innerHTML = preguntas[numpregunta].pregunta;

    numpregunta++;

    if (numpregunta == preguntas.length) {
        location.href ="/html/pagina1.html";
        numpregunta = 0;
    }
};