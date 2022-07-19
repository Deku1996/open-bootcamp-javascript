const myFunction = val => {
    if (typeof val === "number"){
    return 2 * val
} else {
   // return false
   throw new Error ("El valor debe ser de tipo numerico")
}
}

//const elDoble =myFunction ("f")


try {
  // Codigo que puede fallar
  console.log("Esta ejecutandose correctamente")
  const doble= myFunction(2)
  console.log(doble)
}catch (e){
// En caso de fallar, quiero que ejecutes lo siguiente
console.error("Revise su codigo, hay un ERROR")
console.error(`El valor de e es: ${e} `)// (e) -> Tiene el valor de error
} finally {
    console.log("Esto se va a ejecutar tanto si ocurre algun error o no")
}

//// InternalError, SintaxError, TypeError, RangeError y ReferenceError
// Buscar--> Errors Javascrpit 


