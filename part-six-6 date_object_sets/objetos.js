// Trabajando con Objetos

const obj = {
    id: 5,
    nombre: "Hernesto",
    apellido: "Fernandez",
    isDeveloper: true,
    favorite_books: ["El metodo", "El codigo de la manifestacion."],
    "4-juegos": [1, 2, 3, 4]
}

console.log(obj.apellido)
console.log(obj["4-juegos"])

// Como acceder a propiedades a traves de variables
const prop = "isDeveloper"
console.log(obj[prop])

const obj2 = obj;
console.log(obj2);

obj2.nombre = "Franchie"
console.log(obj2.nombre)
console.log(obj.nombre)

// En valores o elementos primarios si hace una copia del objeto, y lo almacena en otro lugar de memoria

let val1 = 5;
let val2 = val1;

val2 = 7;
console.log(val1)
console.log(val2)

///////

const obj3 = { ...obj}

console.log(obj.nombre)
console.log(obj3.nombre)

obj3.nombre = "Anashei"

console.log(obj.nombre)
console.log(obj3.nombre)


// Como ordenar listas de objetos en funcion de una propiedad

const listaPeliculas = [
    {titulo: "Lo que el viento se llevo", anyo: 1939},
    {titulo: "Titanic", anyo: 1997},
    {titulo: "Moana", anyo: 2016},
    {titulo: "El efecto mariposa", anyo: 2004},
    {titulo: "TED", anyo: 2012}
]

console.log(listaPeliculas)

// .sort() -> MUTA EL VALOR DE LA LISTA ORIGINAL
// Como ordenar listas de menor a mayor (segun el año)

listaPeliculas.sort((a, b) => a.anyo - b.anyo)
console.log(listaPeliculas)