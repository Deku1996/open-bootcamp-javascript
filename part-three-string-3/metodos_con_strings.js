// Metodos mas utilizados con cadenas de caracteres
// Como obtener la longitud de un string

let string = "hola soy un string";

console.log(string.length)


// Obtener partes de cadenas de caracteres
// slice () substring() substr()

let sliceString = string.slice (0, 8)
console.log (sliceString)

let substringString = string.substring (3, 7)
console.log(substringString)

let substrString = string.substr( 4, 16)
console.log(substrString)


// Reemplazar parte del contenido de una cadena de texto

let cadena = "Hola mi nombre es Cristian"
console.log(cadena)

// Al utilizar strings solo reemplaza la primera instancia
console.log(cadena.replace('Cristian', 'Hernestito'))

let textoLargo = "Si alguna vez te ha pasado que quieres usar un símbolo en concreto de tu teclado, pero no lo consigues, estás en el artículo indicado. Hoy te contaremos cómo hacer slash al revés o barra invertida en tu teclado con Windows 10, 8 y 7 de manera rápida y sencilla.Sigue leyend indicado. Hoy te contaremos cómo hacer slash al revés o barra invertida en tu teclado con Windows 10, 8 y 7 de manera rápida y sencilla.Sigue leyendindicado. Hoy te contaremos cómo hacer slash al revés o barra invertida en tu teclado con Windows 10, 8 y 7 de manera rápida y sencilla.Sigue leyend"

console.log(textoLargo.replace('teclado', 'anashei')) 

// Al utilizar la expresion regular /g (global), reemplaza todas las instancias
console.log(textoLargo.replace(/teclado/g, 'anashei'))
