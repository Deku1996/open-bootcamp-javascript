//Arrays

const lista = [ 1, "Hola", true, undefined, null];
const lista2 = new Array(1, "Hola", true, undefined, null);
const lista3 = new Array (3);
const lista4 = [lista, lista2];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

/////////////////////////////////////////

//Objetos

const celular = {
    alto: 10,
    ancho: 5,
    marca: "Xiaomi",
    disponible: true,
    tarjeta:{
        marca: "Sandik",
        almacenamiento: 64,
    }
}
celular.año = 2021;
celular.marca = "Samsung"

console.log(celular.marca)

/////////////////////////////////////

//Fechas

const hoy = new Date();
console.log(hoy);

const fecha_milisegundos = new Date(10);
console.log(fecha_milisegundos);