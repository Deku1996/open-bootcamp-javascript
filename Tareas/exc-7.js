function alwayTrue(){
    return true
}

function* generarId(){
    let id = 0;
    while (true){
        id += 2
       if(id === 100) {
            return id
        }
        yield id // Esperando hasta que se vuelva a llamar
    }
}

const double = generarId();

console.log(double.next())


async function timing() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hola soy una promesa");
            resolve();
        }, 5000);
    });
}

timing()
