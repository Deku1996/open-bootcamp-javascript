class Persona {
    // Private -> # Con la almohadilla lo que haces es convertir en privado
    // Solo se puede acceder desde dentro de la clase
    #nombre // Se esta guardando desde un atributo en el que no se pueda acceder desde afuera
    #edad
    //#obtenEdad

    // Protected ->
    // Solo se puede acceder desde dentro de la clase y desde clases descendientes
    _isDeveloper = true // Estoy inicializando una variable protegida, como true
     constructor(nombre, edad){
         this.#nombre = nombre // this. -> hace referencia al objeto en cual esta ahora
         this.#edad = edad
     }
 
     saludo(){
         console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`)
     }
     obtenNombre(){ // Funcion getter -> nos permite acceder (de forma controlada) a algun atributo protegido
      return  this.#nombre 
    }
     #obtenEdad(){
        return this.#edad
     }
     getEdad(){
        return this.#edad
     }
     setEdad(nuevaedad){
        this.#edad = nuevaedad
      
 }
}

 const persona = new Persona ("Cristian", 70)
// console.log(persona)
 //console.log(persona.nombre)
 persona.saludo()
console.log(persona.obtenNombre())
//console.log(persona.#obtenEdad()) --> No podemos acceder desde afuera porque esta privada

//console.log(persona._isDeveloper()) --> No podemos acceder porque es protegida


// Getters -> Metodos que nos permiten atributos/metodos privados o protegidos
const edad = persona.getEdad()
console.log(edad)
// Setters -> Metodos que nos permiten cambiar el valor de alguno de los atributos privados o protegidos
// Si queremos cambiar la edad de una persona

persona.setEdad(32)
console.log(persona.getEdad()) // Este getter, ya nos esta accediendo a le nueva edad (setEdad)