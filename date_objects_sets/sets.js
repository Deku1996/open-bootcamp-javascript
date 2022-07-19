// Sets o conjuntos
// la diferencia entre los Sets y los arrays es que nunca nos van a permitir almacenar valores o elementos que ya existen
// Nos permite asegurarnos que dentro del conjunto, no habra valores repetidos


const array = [1, 2, 3, 4, 5, 6, "hola", 1, 4, 2];

const miSet = new Set(array);

console.log(array)
console.log(miSet)


// .add() -> nos permite añadir un valor (si intentamos añadir un valor ya existente no lo va a permitir)

miSet.add(8)
console.log(miSet)

// .delete()

miSet.delete(5)
console.log(miSet)

// .clear()
// miSet.clear()
// console.log(miSet) --> Nos devuelve un set vacio

// .has() -> nos permite buscar un valor dentro del set
console.log(miSet.has(4)) 

// .size -> nos permite conocer el tamaño del set

console.log(miSet.size)

miSet.forEach(  valor=> {
    console.log(valor)
})

