// En este desafío tienes un array de números el cual va a tener tanto números negativos como positivos y el reto es usando la función sort de JavaScript ordenarlos de mayor a menor.

// Para solucionarlo vas a encontrar una función llamada sortDesc que tiene un parámetro de entrada:

// numbers: Un array con números positivos y negativos.
// Dentro del cuerpo de la función sortDesc debes escribir tu solución.

// Ejemplo:

// Input: [3, 1, 11, 5, 2, -7, 8]
// Output: [ 11, 8, 5, 3, 2, 1, -7]

let entrada= [3, 1, 11, 5, 2, -7, 8];

function sortDesc(numbers) {
    // Tu código aquí 👈
    return numbers.sort((a, b) => b - a);
}

console.log(sortDesc(entrada));