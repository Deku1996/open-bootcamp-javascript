// Trabajar conn metodos mas avanzados
//.map() .filter() .reduce()

const array = ["Artigas", "Rocha", "Maldonado", "  Durazno"];

const val = array.forEach( v =>{
    console.log(v)
})
console.log(val)

const newArray = array.map ((valor, indice) =>` ${indice + 1}- ${valor}`);

console.log(newArray);

const listaObjetos = [
    {nombre: "Cristian", edad: 56},
    {nombre: "Fabiana", edad: 45},
    {nombre: "Nestor", edad: 23},
    {nombre: "Jose", edad: 12},
    {nombre: "Jaimito", edad: 90},
]

const names = listaObjetos.map(obj => obj.nombre)  // Mapear solo los nombres
console.log(names)

const edades = listaObjetos.map(obj => obj.edad); // Mapear solo las edades
console.log(edades)

//const personasMayores =listaObjetos.filter(obj => {
 //   if (obj.edad > 30){
  //      return true
 //   }else{
//       return false//
//    }
//})

const personasMayores = listaObjetos.filter(obj => obj.edad > 45);
const personasMenores = listaObjetos.filter(obj => obj.edad < 15);


console.log(personasMayores);
console.log(personasMenores);

const nuevaLista = listaObjetos.filter(obj => obj.nombre);// Nos devuelve el objeto, menos "Fabian"
console.log(nuevaLista);


