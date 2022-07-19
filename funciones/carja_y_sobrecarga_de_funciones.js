// Carga y sobrecarga de funciones

function saludar(){
    hola()
}

function hola(){
    console.log("Hola, soy la funcion hola()")
}

saludar()

/// Se ejecuta el codigo de arriba a bajo

// 1. cargar la funcion global()
// 2. Añade la funcion saludar por encima de la global/ saludar() global()
// 3. Una vez que esta dentro de la funcion saludar, descubre que debe llamar a la funcion hola() / hola() saludar() global()
// 4. Ya una vez que termino con la funcion hola(), la quita de la carga / saludar() global()
// 5. global()

// StackOverflows

//function recursivo() {
//    recursivo ()
//}

//recursivo()