const persona = {
    nombre: "Cristian",
    edad: 26,
}
console.log(persona)

function obtenDobleEdad(edad){
    return 2 * edad
};

const dobleEdad = obtenDobleEdad(persona.edad)
console.log(dobleEdad)

function obtenEdad (edad){
let arrayNums = []

for (let i=0; i < 10; i++){
    const numero = persona.edad +i
    console.log(numero)
    arrayNums = [...arrayNums, numero]
}
return arrayNums
}

const array = obtenEdad(persona.edad)
console.log(array)