const persona = {
    nombre: "Cristian",
    edad: 34,
    isDeveloper: false,
    saludo: (function(){
        console.log("Hola")
    }
    )
}

//console.log(persona)

persona.saludo();

const otra_persona = {
    nombre: "Miguel",
    edad: 28,
    isDeveloper: true,
    saludo: (function(){
        console.log("Hola")
    }
    )
}

otra_persona.saludo()

const crear_persona = (nombre, edad, isDeveloper) =>{
    return{
        nombre,
        edad,
        isDeveloper,
        saludo: function(){
            console.log("Hola")
        }
    }
}

const nueva_persona_2 = crear_persona ("Juanito", 26, true)
console.log(nueva_persona_2)

const nueva_persona_3 = crear_persona("Josefina", 19, false)
console.log(nueva_persona_3)