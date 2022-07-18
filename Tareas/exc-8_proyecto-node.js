const myFunction = val => {
   if ( typeof val === "string" ){
   return val
}else {
    throw new Error ("El valor debe ser una letra")
}
}

try{
console.log("Todo esta correcto")
} catch(e) {
    console.log("ERROR!")
}

