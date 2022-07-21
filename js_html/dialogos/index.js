const boton = document.querySelector("#btn")

console.log(boton)

boton.addEventListener("click", ()=> {
   //alert("se ha hecho click")
   //confirm("Estas de acuerdo?")&& console.log("OK")
  // confirm("Estas de acuerdo?") ? console.log("Ok") : console.log("No")
   
  const respuesta = confirm ("Seguro?")
  if (respuesta) {
    console.log("Estas de acuerdo")
  } else {
    console.log("No estas de acuerdo")
  }
    

})

const botonInfo= document.querySelector("#info")

botonInfo.addEventListener("click", () => {
   const nombre = prompt("Cual es tu nombre?")
   console.log("Tu nombre es"  + nombre) 
})