// Como unir dos listas .concat(lista2)

const lista1 = ["hola", 4, false, null];
const lista2 = ["chau", 14, true, undefined]

console.log(lista1.concat(lista2))

const lista3 = lista1.concat(lista2);
console.log(lista3);

// Como unir dos listas con el factor de propagacion

console.log(...lista3)

const lista4 = [...lista1, ...lista2];
console.log(lista4);

// ERROR!!! Mal entendido el concepto del factor de propagacion

const lista5 = [lista1, lista2];
console.log(lista5);
