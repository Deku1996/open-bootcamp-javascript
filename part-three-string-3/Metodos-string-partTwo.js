// Metodos de cadenas de texto (parte 2)

let input = "aRies"
let baseDatos = "aries"

// toLoweCase() - toUpperCase

console.log(input.toUpperCase())
console.log(input.toLowerCase())
console.log( input.toLowerCase() === baseDatos.toLowerCase())

// Formas de concatenar dos cadenas de caracteres

let stringUno = "hola soy la primer cadena. "
let stringDos = "Hola soy la segunda cadena"

console.log(stringUno.concat(stringDos))
console.log(stringUno+ "" + stringDos)
console.log(`${stringUno} ${stringDos}`)

// Eliminar espacios al inicio y al final

let stringTres = "    Hola soy un string con espacio al final.    "
console.log(stringTres.length)
//trim()

console.log(stringTres.trim().length)
console.log(stringTres.trimStart().length) //Eliminamos los espacios al principio
console.log(stringTres.trimEnd().length)

// Obtener el caracter que hay en cierta posicion

let stringCuatro = "Hola soy el string numero 4"

console.log(stringCuatro.charAt(5))
console.log(stringCuatro[5])


//Obtener la posicion de una palabra dentro de un string

let stringCingo = "Hola soy Cristian y soy el real anashei. Soy Cristian y esto es asi"
console.log(stringCingo.indexOf("Cristian")) //Si no encuentra la palabra o el caracter nos devolvera un -1
console.log(stringCingo.charAt(9))
console.log(stringCingo.lastIndexOf("Cristian"))