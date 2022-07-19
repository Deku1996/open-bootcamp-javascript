// Sesion tres... Strings

let stringComun = 'Soy un string con comillas comunes'
let stringDoble = "Soy un string con comillas dobles"

console.log(stringComun)
console.log(stringDoble)


let stringComillas = "El otro dia me dijo literalmente \"ve a sacar la basura \""
let stringComillasSimples = 'El otro dia me dijo literalmente "ve a sacar la basura"'

console.log(stringComillas)
console.log(stringComillasSimples)


/////////////// Comillas invertidas (backticks)


let nombre = "Eduardo"
let saludo = `Hola, ${nombre}, bienvenido`

console.log(saludo)


// Plantillas HTML

let plantilla = `
<html>
    <h1> Pagina web de ${nombre} </h1>
    <p> Este es un parrafo de la pagina </p>
</html>
`;

console.log(plantilla)