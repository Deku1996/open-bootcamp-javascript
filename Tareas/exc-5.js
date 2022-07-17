let lista = ["papas", "huevos", "carne", "azucar", "leche"] // 1
let lista2 = lista.push("aceite de igrasol") //2
let lista3 = lista.pop() //3

const pelisFavoritas = [
    {titulo: "Interestelar", actor: "Mattew McConaughe", director: "Christofer Nolan", fecha: 2014},
    {titulo: "Transformers", actor: "Megan Fox", director: "Michael Bay", fecha: 2007},
    { titulo: "Garra", actor: "Adam Sandler", director: "Jeremiah Zagar", fecha: 2022},
] //4

const enero = pelisFavoritas.filter (obj => obj.fecha > 2010) //5
console.log(enero)
const mapear = pelisFavoritas.map(obj => obj.director) //6
const mapear2 = pelisFavoritas.map(obj => obj.titulo) //7 

console.log(mapear)
console.log(mapear2)

const lista4 = mapear.concat(mapear2); //8
console.log(lista4)

const mapear3 = [...mapear, ...mapear2] //9
console.log(mapear3)









