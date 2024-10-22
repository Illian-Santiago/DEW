// Tienes un array con una lista de strings que representan el nombre y apellido de varios usuarios, 
// tu reto es retornar ese array ordenado alfabéticamente por el apellido, para solucionarlo vas a encontrar 
// una función llamada sortByLastName que tiene un parámetro de entrada:


// array: Un array de strings.
// Dentro del cuerpo de la función sortByLastName debes escribir tu solución.

// Ejemplo:

// Input:
// [
//   "Nicolas Molina",
//   "Andrea Perez",
//   "Zulema Vicente",
//   "Juan Amador"
// ]

// Output:
// [
//   "Juan Amador",
//   "Nicolas Molina",
//   "Andrea Perez",
//   "Zulema Vicente"
// ]

let entrada = [
  "Nicolas Molina",
  "Andrea Perez",
  "Zulema Vicente",
  "Juan Amador"
];

function sortByLastName(array) {
  // Tu código aquí 👈
  return array.sort((a , b) => a.split(" ")[1].localeCompare(b.split(" ")[1]));
}

console.log(sortByLastName(entrada));