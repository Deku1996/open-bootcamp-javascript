// Sesion 5 - Numbers

//Declaracion de variables numericas (enteros y decimales)
let a = 5;
console.log(a);

let b = 0.2;
console.log(b)

// Precision

let c = 0.1;

console.log(b + c); // Nos da un numero con muchos cero por el espacio que se asigna en memoria temporal, el cual no puede ser precisio (0.300000000004)


// Pequeño truco para obtener valores "reales"
console.log(Math.round((0.1 + 0.2) * 100)/100);