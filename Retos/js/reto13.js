// Dado un array de strings tu reto es retornar la posición dentro del array en donde existe la palabra clave "myKey" y si no existe deberás
// retornar false, para solucionarlo vas a encontrar una función llamada findMyKey que recibe un parámetro de entrada:

// array: Un array de strigs.
// Dentro del cuerpo de la función findMyKey debes escribir tu solución.

// Ejemplo 1:
let Input1 = ["diamonds", "myKey", "spades", "AS"]
// Output: 1

// Ejemplo 2:
let Input2 = ["diamonds", "hearts", "spades"]
// Output: false
// solution();

// Ejemplo 3:
let Input3 = ["myKey", "hearts", "spades"]
// Output: 0

function findMyKey(array, term) {
  // Tu código aquí 👈
  return array.indexOf(term) >= 0 ? array.indexOf(term) : false;
}

console.log(findMyKey(Input1,"myKey"));
console.log(findMyKey(Input2,"myKey"));
console.log(findMyKey(Input3,"myKey"));