//Bucles For

//for (inicializacion; condicion; actualizacion);
// Esto es el Bucle

for (let i = 0; i < 10; i++){
    console.log(i)
}

let lista = [1, 5, 52, 23, 14];

for (let i = 0; i < lista.length; i++ ){
    console.log(lista[i])
}

//Estructura for...of
for (let valor of lista){
    console.log(valor);
}

//Estructura forEach

lista.forEach(valor => {
    console.log(valor)
});

//Estructura for... in
let persona = {
    nombre: "Cristian",
    apellido: "Santa Cruz",
    edad: 26,
    isDeveloper: false,
}

for (let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad])

}