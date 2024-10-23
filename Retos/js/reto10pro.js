// Tienes un array de números y tienes que agregar una nueva propiedad al final del array ¿Sencillo? 
// Pero debes tener en cuenta que no puedes cambiar el array original.

// Un ejemplo sería enviar el array [1, 2, 3] y agregar el número 4, esto me debería retornar [1, 2, 3, 4] 
// pero el array enviando no debe ser modificado, es decir debe mantenerse con su estado original de [1, 2, 3].

// Para solucionarlo vas a encontrar una función llamada addNumber que tiene dos parámetros de entrada:

// numbers: Un array de números.
// item: El número que se va a agregar.
// Dentro del cuerpo de la función addNumber debes escribir tu solución.

// Ejemplo 1:

// Input: [1, 2, 3], 4
// Output: [1, 2, 3, 4]

// Ejemplo 2:

// Input: ["A", "B"], "C"
// Output: ["A", "B", "C"]

let entrada1 = [1, 2, 3]
let entrada2 = ["A", "B"];

function addValue(numbers, item) {
  // Tu código aquí 👈
  return [...numbers, item];
}

console.log('Array original: ' + entrada1);
console.log('Array modificado: ' + addValue(entrada1, 4));

console.log('Array original: ' + entrada2);
console.log('Array modificado: ' + addValue(entrada2, "C"));