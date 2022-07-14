// Casos muy especificos - break, continue

let lista = [1, 2, 3, 4, 5, 6, 7, 8 ];

for (let i = 0; i < lista.length; i++){

    if (lista [i] === 3){
        continue; // EL continue lo que haria es volver arriba, es decir a comenzar el bucle for
    }

    console.log(lista[i]);

    if (lista[i] > 5) {
        break; // El break lo que haria seria saltarse todo lo demas
    }
}


// CUal es el ambito de un bucle

