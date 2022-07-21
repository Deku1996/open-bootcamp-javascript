const nombre = ("Marisa");
const asignatura = ["HTML", "CSS", "Javascript"]



class Estudiante {
    constructor (nombre, asignatura){
        this.nombre = nombre
        this.asignatura = asignatura
    }
    obtenDatos(){
        return console.log(`Bienvenide ${this.nombre}, tus conocimientos son ${this.asignatura}`)
    }
}

const estudiante = new Estudiante (nombre, asignatura);
console.log(estudiante)

estudiante.obtenDatos()