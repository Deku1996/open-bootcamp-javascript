// Que son las funciones, como se declaran y como se utilizan
// Bloques de codigo que se ejecutan con un fin especifico

const nom = "Cristian"

//SAludar("Cristian")
saludar(nom)

function saludar (nombre){
    console.log(`Hola ${nombre}`)
}

///

let nombre2 = "Hernesto"

despedir(nombre2)
console.log(nombre2)


function despedir(nombre){
    nombre = "Diego"
    console.log(`Adios ${nombre}`)
}


/////////////////////////////////////////

let persona = {nombre: "Juan", apellido: "Francia"}

saludarPersona(persona) // Aqui estamos llamando a la funcion
console.log(persona)

function saludarPersona(objeto){
   objeto.nombre = "Juancurz" // Al ser un objeto, si cambiamos un parametro dentro de la funcion nos cambia el objeto original
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}


////////   

function imprimeNumero(numero = 7){ // Si no le pasamos un valor en el llamado de la funcion, nos va a tomar 7 (en este caso), como numero por defecto
    console.log(numero)
}

imprimeNumero()


///////////////////////////////

function imprimir (...parametros) {
    console.log(parametros)
}

imprimir(3, 2, 5, 5, "hola", false)

////   

function suma(...nums){
   return nums.reduce((a, b)=> a + b )
}

const s = suma( 5,3, 4, 6, 7)

console.log(s)


//////////////////////////////   
// Si intentamos acceder a una variable definida fuera de la funcion, desde dentro podemos hacerlo
// EN cambio si intentamos acceder desde afuera a una variable definida dentro de la funsion, no podremos

let variable = 4;

function multiplicar(a = 0, b = 0,){
    console.log(variable)
    let variable_interna = "hola";
    return a * b
}

console.log( multiplicar(4, 5))