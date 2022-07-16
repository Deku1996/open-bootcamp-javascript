// Como trabajar con listas (arrays)

let var1 = 8;
let array = [1, "Hola", false, {id: 5}, null, undefined, var1]

console.log(array);

//Acceder a los valores de un array a traves de su posicion
// array[indice] => 0, 1, 2, 3, ...

console.log(array[1]);

// MEtodos para introducir nuevos valores en nuestro arrays
// .push() .unshift() => Mutan el valor de nuestro array
// Valores al final -> Push

array.push("final", 56, false);
console.log(array)

// Valores al principio -> unfhift

array.unshift("Anashei", 79, false);
console.log(array)


// Metodos para elminiar valores en nuestros arrays
// .pop() .shift => Mutan el valor del array

// Valores al final -> Pop

let newArray = ["Carlos", 21, false, true]

newArray.pop()
console.log(newArray)

// Valores al principio -> Shift

newArray.shift()
console.log(newArray)


// Metodo para eliminar, modificar o añadir valores a nuestro array
// .splice(x, y, z)

const array2 = [1, 2, 3, 4, 5, 6];

// ELminar valores .splice(indice, numValoresAEliminar)
array2.splice(1, 3)
console.log(array2)

// Añadir valores .splice(indice, 0, nuevosValores)

array2.splice(1, 0, "hola", false)
console.log(array2) 

// Modificar valores

array2.splice(2, 1, true)
console.log(array2)