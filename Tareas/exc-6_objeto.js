const datesObject = [
    {nombre:"Cristian", apellido:"Santa Cruz", edad:26, altura:196, isDeveloper: false,}
]

const age = datesObject.map(age => age.edad);
console.log(age)

const friendsObject = [
    {nombre:"Cristian", apellido:"Santa Cruz", edad:26, altura:196, isDeveloper: false,},
    {nombre:"Brahian", apellido:"Pereira", edad:27, altura:180, isDeveloper: true,},
    {nombre:"Jhonatan", apellido:"Arrasabal", edad:23, altura:170, isDeveloper: false,}
];

const orderAge = friendsObject.sort((a, b)=> a.edad - b.edad)
console.log(friendsObject)