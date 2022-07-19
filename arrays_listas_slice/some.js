// .some()

const array = [ 3, 8, 51, 47, 25, 4, 6, 7, 5, -2];

const res = array.some( valor => valor > 0);

console.log(res)

const existe = array.some(valor => valor === 5)
console.log(existe)// devuelve true

const listaObjetos = [
    {nombre: "Cristian", edad: 56},
    {nombre: "Fabiana", edad: 45},
    {nombre: "Nestor", edad: 23},
    {nombre: "Jose", edad: 12},
    {nombre: "Jaimito", edad: 90},
]

const array2 = listaObjetos.some(persona => persona.nombre === "Cristian")

console.log(array2)

// Como obtener una lista a partir de un objeto iterable

const str = "Hola soy Cristian"
console.log(str[6])

const ar_str = Array.from(str)
console.log(ar_str)

const set = new Set([2, 5, "hola", 4])
const ar_set = Array.from(set)
console.log(ar_set)

const keys = array.keys()
console.log(keys)

const newArray = Array.from(keys)
console.log(newArray)