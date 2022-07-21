// Clases
// Declarar un objeto de clase persona
// Todas las funciones tanto en objetos como en clases se denominan metodos
class Persona {
   // nombre;
   // edad;
   // isDeveloper;
    constructor(nombre, edad, isDeveloper){
        this.nombre = nombre // this. -> hace referencia al objeto en cual esta ahora
        this.edad = edad
        this.isDeveloper = isDeveloper
    }

    saludo(){
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`)
    }
}

const nueva_persona = new Persona("Cristian", 45, true)
console.log(nueva_persona)
nueva_persona.saludo()

// Instanciacion es una forma de inicializar una clase

let numero = 60 // Inicializar
let persona_2 = new Persona ("Maria", 34, false) // Instanciar
console.log(persona_2 instanceof Persona) // si es una clase de tipo Persona

// instanceof _> similar al typeof para clases