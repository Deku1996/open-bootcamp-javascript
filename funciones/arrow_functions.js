// Funciones tipo flecha - funciones anonimas



const array = [1, 56, 1, 24, 65, 23]

const array2 = array.map((valor => valor * 2))
console.log(array2)

//const dobleDelValor = valor => {
//    return valor * 2
//}
// Las arrow function solo se pueden acceder una vez hayan sido inicializadas

const dobleDelValor = valor => valor * 2

console.log(doble(6))
console.log(dobleDelValor(6))

const array3 = array.map(dobleDelValor)
console.log(array3)

function doble(valor){
    return valor * 2
}