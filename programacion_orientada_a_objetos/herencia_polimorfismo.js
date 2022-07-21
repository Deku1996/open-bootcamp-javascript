// Inheritance - Herencia
class Persona {
    constructor(nombre, edad, isDeveloper){
        this.nombre = nombre // this. -> hace referencia al objeto en cual esta ahora
        this.edad = edad
       
    }

    saludo(){
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años`)
    }

    
}

class Desarrolador extends Persona{ // De esta manera indicamos que Desarrollador es hereditario de Persona
    constructor(nombre, edad, lenguaje){
        super (nombre, edad) // super() -> Nos permite usar el constructor de la clase padre (Persona)
        this.lenguaje = lenguaje
    } // Aqui estamos instanciando una nueva persona (nombre, edad), que ademas es desarrollador

    saludo(){ // Override -> volver a definir algo que ya esta definido
        super.saludo()
        console.log(`Y soy desarrollador de ${this.lenguaje}`)
    }
}

const nuevoDev = new Desarrolador("Carlos", 43, "React")
console.log(nuevoDev)
nuevoDev.saludo()


// Polimorfismo 