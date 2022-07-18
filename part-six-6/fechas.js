// Trabajando con fechas

const fecha = new Date()

console.log(fecha)

// Atencion - Los meses inicializan en 0
const fecha2 = new Date(1996, 2, 22) //-- Mi fecha de nacimiento

console.log(fecha2)

// Podemos definir la fecha con milisegundos
const fecha3 = new Date (100000000)
console.log(fecha3)

const fecha4 = new Date("March 22, 1996 05:25:15");
console.log(fecha4)

console.log(fecha > fecha2 )

const fecha5 = new Date (1996, 2, 22)

console.log(fecha2 === fecha5) // ERROR - No se pueden comparar dos fechas de esta manera

console.log(fecha2.getTime() === fecha5.getTime())

//// Obtener el dia, el mes y el año de una fecha
// Obtener el dia .getDate()
// Obtener el mes .getMonth()
// Obtener el año .getFullYear()


console.log(fecha2.getDate())
console.log(fecha2.getMonth())
console.log(fecha2.getFullYear())


// Truquito     .toLocaleDateString

console.log(fecha2.toLocaleDateString("en-GB"))

