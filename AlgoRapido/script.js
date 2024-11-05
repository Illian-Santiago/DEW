// Escribe una función printNumbers(from, to) que genere un número cada segundo, comenzando desde from y termiando con to.
// Usando "setInterval" y "setTimeout".

function printNumbers(from, to) {
    setInterval (() =>{
        if (from <= to) {
            console.log(from++);
        }
    }, 1 * 1000)
};

printNumbers(0,10);