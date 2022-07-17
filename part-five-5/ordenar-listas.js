// .sort() -> MODIFICA EL ARRAY

const array = [2, 5, 89, 6, 75, 14, 0];

console.log(array);

array.sort((a, b) => {  // Esta funcion es obligatoria que retorne un valor
if (a < b){
    return -1           // Si queremos ordenarlos de menor a mayor, a debe ser menor que b (a < b) (return -1)
} else if (a > b) {
    return +1
} else { // a === b
    return 0
}
})
console.log(array)

const array2 = [2, 5, 89, 6, 75, 14, 0];

array2.sort((a, b) =>{
    if (a < b) {
        return +1
    } else if ( a > b){
        return -1
    } else {
        return 0
    }
})

console.log(array2)


// Ordenar unicamente arrays numericos

const arrayNumerico = [8, 56, 47, 89, 41, 5, 6, 8, 9, 2]

console.log(arrayNumerico.sort((a, b) => a-b)) // De menor a mayor
console.log(arrayNumerico.sort((a, b) => b - a)) // De mayor a menor


////////////////////////////////////////////////

// Interesante en arrays de objetos

const listaObjetos = [
    {nombre: "Cristian", edad: 56},
    {nombre: "Fabiana", edad: 45},
    {nombre: "Nestor", edad: 23},
    {nombre: "Jose", edad: 12},
    {nombre: "Jaimito", edad: 90},
]

//listaObjetos.sort((a, b) =>{
//    if (a.edad < b.edad){
//        return -1
// //   } else if  (a.edad > b.edad) {
//        return +1
//    } else {
//        return 0
//    }
//})

listaObjetos.sort((a, b) => a.edad - b.edad)
console.log(listaObjetos)//