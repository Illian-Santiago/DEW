// Tu reto es retornar true si dentro de array de números al menos uno es un número par, para solucionarlo vas a encontrar una función llamada checkArray que recibe un parámetro de entrada:

// numbers: Un array de números
// Dentro del cuerpo de la función checkArray debes escribir tu solución.

let entrada1 = [1, 3, 5, 7, 10, 11]
let entrada2 = [1, 3, 5];
let entrada3 = [];

function checkArray(numbers) {
  // Tu código aquí 👈
  return numbers.some(number => (number%2) == 0);
}

//Output1: true
//Output2: false
//Output: false

console.log(checkArray(entrada1));
console.log(checkArray(entrada2));
console.log(checkArray(entrada3));