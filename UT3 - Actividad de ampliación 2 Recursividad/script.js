// Ejercicio 1. Ingresar una palabra y determinar si es palindroma o no. 

// Ejercicio 2. Ordenar(numeros): Realizar una función que dada una lista de números retorne otra lista con los mismos números pero ordenados de menor a mayor.
// Pista: en una lista ordenada siempre se da que un elemento en la posición x es el mínimo de la sublista que sigue:  Ej: ordenar([3,6, -1]) -> [-1,3,6]

const numeros = [12, -5, 3, 0, 7, -2, 15, 8, -1, 4];

function DetectarPolindromo(frase) {
    let frasePrincipal = frase
    // Quita todas los espacios tabulaciones y saltos de linea, aun si estos son seguidos, a lo largo de la cadena
    .replace(/\s+/g, '')
    // Convierte todas las letras a minuscula
    .toLowerCase();

    let fraseInvertida = frasePrincipal
    // Hago de la frase entera un array
    .split("")
    .reverse()
    //Hace del array un string
    .join("");

    // console.log(fraseInvertida);
    // console.log(frasePrincipal);

    if (frasePrincipal == fraseInvertida) {
        return "Es palindromo";
    } else {
        return "No es palindromo";
    }
}

function OrdenarNumeros(array) {
    return array.slice().sort((a, b) => a - b);
}

console.log(DetectarPolindromo("Oh HO"));
console.log(OrdenarNumeros(numeros));