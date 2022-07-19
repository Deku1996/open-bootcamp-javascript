// Principales operaciones aritmeticas
let a = 3.5;
let b = 4.6;

// Suma (+)
console.log(a + b)

// Resta (-)
console.log(a - b);

//Multiplicacion (*)
console.log(a * b);

//Division
console.log(a / b);


//Representacion de los numeros en cadenas de texto
console.log(typeof a)

let a_s = a.toString();
console.log(a_s);

console.log(typeof a_s);

//Redondeo de numeros decimales

let c = 3.2; 
let d = c * 3;

console.log(d);
console.log(typeof d)

// .toFixed - Limitar el numero de decimales al valor x

console.log(d.toFixed(2))// debemos pasarle un parametro dentro del parentesis, si no tomaria como si fuese 0, 
                        //y estariamos diciendo que quiero obtener 0 numeros decimales
console.log(typeof d.toFixed(2))

// .toPrecision(x)- Limita el numero de cifras significativas

console.log(d.toPrecision(4))