// Comparaciones



// Igualdad

if  (5 === 5){ 
    console.log("5 es igual a 5")
}

if (5 == 5){
    console.log( "Es una igualdad debil")
}

let a = 5;
let b = 5;

// Compara solo el valor (==)
//Compara el valor y el tipo (===)

if (a == b){
    console.log ("Igualdad debil")
}
if (a === b){
    console.log ("Igualdad fuerte")
}

 
//Desigualdad


let c = 4;
let d = 15;

if (c != d) {
    console.log("c es diferente a d- Debil")
}

if (c !== d) {
    console.log("c es diferente a d- Fuerte")
}

//Comparaciones mayor que y menor que

let maximo = 12;
let minimo = 2;

if (maximo > minimo){
    console.log("Maximo es mayor")
} 

if (maximo < minimo) {
    console.log("Minimo es mayor")
}
if (maximo <= minimo) {
    console.log("Minimo es mayor o igual")
}
if (maximo >= minimo) {
    console.log("Minimo es menor o igual")
}