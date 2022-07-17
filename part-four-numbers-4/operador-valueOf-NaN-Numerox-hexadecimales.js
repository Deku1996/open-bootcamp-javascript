// Operador .valueOf() - Obtener valores numericos a partir de literales
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log (a + b); 
console.log(a.valueOf() + b.valueOf());

console.log(b.valueOf());

let str = new String("Hola soy un string");
console.log(str)
console.log(str.valueOf());

// NaN (Not a Number) - Infinity
let n = Number('adios');
console.log(n) // Nos devuelve un error porque estamos intentando castear un numero en un string
console.log(isNaN(n)) // Preguntamos si n (en este caso) es un NaN

let numerador = 23;
let divisor = 0;

console.log(numerador / divisor);

// Como convertir los string a valores numericos con Number, parseInt y parseFloat
let numero = '5.89';
let numeroDos = 17.2;

console.log(typeof numero)
console.log(numero + numeroDos) // (+) Tambien sirve para concatenar string
                                //Error de concepto
console.log(Number(numero) + numeroDos);

console.log(parseInt(numero))
console.log(parseFloat(numero))

let numeroTres = 6;
console.log(parseInt(numeroTres));
console.log(parseFloat(numeroTres))

// Numeros hexadecimales (base 16)

let numeroHex = '0x3a5b7';
console.log(parseInt(numeroHex, 16))



// Obtener los valores maximo y minimo en JavaScript

let minPrecision = Number.EPSILON;
let minValorJs = Number.MIN_VALUE;
let maxValorJs = Number.MAX_VALUE;

console.log(minPrecision);
console.log(minValorJs);
console.log(maxValorJs)