// Como podemos comparar listas
// .every() -> Si todos los componentes de una lista cumplen una condicion

const array = [ 2, 56, 14, 1, 25, 65, 89, -6, -14, 25]

const resultado = array.every(valor => {
    if (typeof valor === "number"){
        return true
    }else {
        return false
    }
})
console.log(resultado)

//const resultadoDos = array.every (valor => {
//    if (valor > 0) { // Aca estamos diciendo que si todos los valores del array son mayores a 0, devuelva true, si no, false.//
//        return true
//    } else {
 //       return false
//    }
//})

const resultadoDos = array.every( valor => valor > 0)
console.log(resultadoDos)


// Comparacion de listas

const ar1 = [1, 2, 3, 4]
const ar2 = [1, 2, 3, 4]

console.log(ar1 === ar2)

const compararArray = (array_1, array_2) => { // le pasamos dos parametros, el primer array y el segundo array
    if (array_1.length !== array_2.length) return false; // Lo primero que hacemos es comparar las longitudes de los array, si no son iguales, va a salir de la funcion devpñviendo un false
    const res = array_1.every((valor, i) => valor === array_2[i]) // Si son iguales va a hacer este calculo (comparar cada uno de los valores entre si)
    return res
}
console.log(compararArray (ar1, ar2))