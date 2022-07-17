// Como obtener una lista a partir de otra .slice()
//NO MODIFICA EL VALOR DEL ARRAY ORIGINAL

const array = [ "hola", 1, 2, 3, true, null, "adios"]
console.log(array.slice(0, 3))// El primer indice si lo obtiene (0) pero el ultimo no (3)

const array2 = array.slice(1, 4);
console.log(array2);

const array3 = array.slice( 1, -3 );
console.log(array3);