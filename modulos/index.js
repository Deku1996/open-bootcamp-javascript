// Una parte de codigo que se puede reutilizar en nuestro programa
// Formas de importar y exportar modulos
// 1. CommonJS - require
// 2. Import ES6 - import

const moduloMatematicas = require("./modulos_int/matematicas")
console.log(moduloMatematicas)
//const factorial = moduloMatematicas.factorial;
//const {factorial, suma} = moduloMatematicas;
//const suma = moduloMatematicas;

const {factorial, suma} = require("./modulos_int/matematicas.js")

const fact = moduloMatematicas.factorial(5)
console.log(fact)

const sum = moduloMatematicas.suma(15, 28)
console.log(sum)

const elevar = moduloMatematicas.eleva(2, 8)