//Metodos de cadenas de texto (parte 3)
//https://regexr.com

let textoLargo = "Si alguna vez te ha pasado que quieres usar un símbolo en concreto de tu teclado, pero no lo consigues, estás en el artículo indicado. Hoy te contaremos cómo hacer slash al revés o barra invertida en tu teclado con Windows 10, 8 y 7 de manera rápida y sencilla.Sigue leyend indicado. Hoy te contaremos cómo hacer slash al revés o barra invertida en tu teclado con Windows 10, 8 y 7 de manera rápida y sencilla.Sigue leyendindicado. Hoy te contaremos cómo hacer slash al revés o barra invertida en tu teclado con Windows 10, 8 y 7 de manera rápida y sencilla.Sigue leyend"

console.log(textoLargo.match(/teclado/g))

// Existe la palabra dentro del texto?
console.log(textoLargo.includes("sigue")) // Nos indica si ha encontrado en el string la palabra que buscamos

// Saber si un texto empieza con una palabra

console.log(textoLargo.startsWith("Si"))

//Saber si un texto termina con una polabra
console.log(textoLargo.endsWith("leyend"))