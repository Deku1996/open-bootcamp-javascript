// Iterar los valores de una lista

const array = ["hola", 2, 5, false, undefined]


// Forma antigua (poco eficiente)
for (let i=0; i < array.length; i++){
    console.log(array[i])
}

// Forma ES6 (mas eficiente) .forEach()

let suma = 0;
const arrayNums = [2, 56, 45, 12, 56]
arrayNums.forEach(valor => {
    suma += valor;
    console.log(valor)
})

console.log(suma);

// Busqueda de un valor dentro de una lista  .find()
// Quiero encontrar el elemento 5

const variable = array.find( valor =>{
    if (valor === 5){
        return true
    }
})

console.log(variable)

const listaObjetos = [
    {nombre: "Cristian", edad: 56},
    {nombre: "Fabiana", edad: 45},
    {nombre: "Nestor", edad: 23},
    {nombre: "Jose", edad: 12},
    {nombre: "Jaimito", edad: 90},
]

//const objeto = listaObjetos.find(o =>{
//    if (o.nombre === "Cristian"){
//        return true
//    }
//})

const objeto = listaObjetos.find(o =>{
   return o.nombre === "Cristian"
    }
)
 const {edad} = listaObjetos.find( o => o.nombre === "Cristian")

console.log(objeto.edad)